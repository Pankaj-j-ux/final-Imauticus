/** @format */

import { useRef, useState } from "react";
import logo from "../G.png";
import { useNavigate } from "react-router-dom";

// import { signInWithPopup, GoogleAuthProvider, getAuth } from "firebase/auth";
// import { auth } from "../misc/firebase";

function Auth() {
  const [isSignUp, setSignUp] = useState(true);
  const navigate = useNavigate();
  const myref = useRef();
  const [btn2, setbtn2] = useState("Login");
  const [btn1, setbtn1] = useState("Sign up");
  const [data, setData] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const [confirmPass, setConfirmPass] = useState(true);

  const googleSignUp = async () => {
    // const provider = new GoogleAuthProvider();
    // signInWithPopup(auth, provider)
    //   .then((result) => {
    //     const credential = GoogleAuthProvider.credentialFromResult(result);
    //     const token = credential.accessToken;
    //     const user = result.user;
    //     myref.current.click();
    //   })
    //   .catch((error) => {
    //     console.log("Oops! Login Failed");
    //   });
  };

  const changeHandler = (e) => {
    // console.log(e.target.name, e.target.value);
    setData((pre) => {
      if (e.target.name === "cpassword") {
        pre.password !== e.target.value
          ? setConfirmPass(false)
          : setConfirmPass(true);
      }
      if (e.target.name === "password") {
        pre.cpassword !== e.target.value
          ? setConfirmPass(false)
          : setConfirmPass(true);
      }
      return {
        ...pre,
        [e.target.name]: e.target.value,
      };
    });
  };

  const resetForm = () => {
    setConfirmPass(true);
    setData({
      name: "",
      lastname: "",
      email: "",
      password: "",
      cpassword: "",
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const { name, lastname, email, password, cpassword } = data;
    if (isSignUp) {
      //   console.log(data);
      if (name && lastname && email && password && cpassword && confirmPass) {
        setbtn1("...");

        const response = await fetch(
          "https://imarticus-backend.onrender.com/api/v1/signup",
          {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              ...data,
            }),
          }
        );

        const result = await response.json();

        if (result.success) {
          alert("Successfully Registered");
          setSignUp(!isSignUp);
        } else {
          alert(result.msg);
          setbtn1("Sign Up");
        }
      } else {
        alert("Please Fill in the Details completely");
      }
    } else {
      //   console.log(data);

      if (email && password) {
        setbtn2("...");
        const response = await fetch(
          "https://imarticus-backend.onrender.com/api/v1/login",
          {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              ...data,
            }),
          }
        );
        console.log(response);

        const result = await response.json();
        console.log(result);

        if (result.success) {
          // myref.current.click();
          // redirect("/dashboard/courses");
          alert("successfully loged In");
          navigate("/dashboard/courses");
        } else {
          setbtn2("Login");
          alert(result.msg);
        }
      } else {
        alert("Please Fill in the Details completely");
      }
    }
  };

  return (
    <>
      <div className="auth">
        <a
          style={{ display: "none" }}
          href={window.location.href + "dashboard/courses"}
          ref={myref}
        >
          Please
        </a>
        <div className="part1">
          <div className="login-card">
            <form className="form">
              <h2>{isSignUp ? "Sign Up" : "Log In"}</h2>
              {isSignUp && (
                <div className="entry">
                  <input
                    type="text"
                    name="name"
                    placeholder="First name"
                    onChange={changeHandler}
                    value={data.name}
                  />
                  <input
                    type="text"
                    name="lastname"
                    placeholder="Last name"
                    onChange={changeHandler}
                    value={data.lastname}
                  />
                </div>
              )}
              <div className="entry">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={changeHandler}
                  value={data.email}
                />
              </div>

              <div className="entry">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={changeHandler}
                  value={data.password}
                />
                {isSignUp && (
                  <input
                    type="password"
                    name="cpassword"
                    placeholder="Confirm Password"
                    onChange={changeHandler}
                    value={data.cpassword}
                  />
                )}
              </div>
              {isSignUp && (
                <span
                  style={{
                    display: "block",
                    color: "red",
                    alignSelf: "flex-end",
                    fontSize: "15px",
                    fontWeight: "500",
                    height: "21px",
                  }}
                >
                  {confirmPass ? "" : "* Confirm Password is not same"}
                </span>
              )}
              {isSignUp ? (
                <button
                  type="submit"
                  onClick={submitHandler}
                  className="button sbutton"
                >
                  {btn1}
                </button>
              ) : (
                <button
                  type="submit"
                  onClick={submitHandler}
                  className="button sbutton"
                >
                  {btn2}
                </button>
              )}
            </form>

            {isSignUp ? (
              <div className="msg">
                <span>Already have an account?</span>
                <span>
                  <b
                    onClick={() => {
                      resetForm();
                      setSignUp(false);
                    }}
                  >
                    Log in !
                  </b>
                </span>
              </div>
            ) : (
              <div className="msg">
                <span>Don't have an account?</span>
                <span>
                  <b
                    onClick={() => {
                      resetForm();
                      setSignUp(true);
                    }}
                  >
                    Sign Up !
                  </b>
                </span>
              </div>
            )}
          </div>
        </div>
        <div className="googlbtn">
          <p>OR</p>
          <button onClick={googleSignUp}>
            <img src={logo} alt="G" />
            <span>Continue with Google</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Auth;
