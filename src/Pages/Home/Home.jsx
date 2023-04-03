/** @format */

import { Link } from "react-router-dom";
import "./home.css";

import Auth from "../../Components/Auth";

function Home() {
  return (
    <>
      <div className="home_body">
        <p>Welcome to Imarticus Learnings</p>
        {/* <Link to={`/dashboard/courses`} className="home_btn">
          Go To Dashboard
        </Link> */}
        <Auth />
      </div>
    </>
  );
}

export default Home;
