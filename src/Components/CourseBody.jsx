/** @format */

import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import Header from "./Header";
import Coursehierarchy from "./Coursehierarchy";

function CourseBody({ isSlide, setIsSlide, width }) {
  const [success, setSuccess] = useState(false);
  const [course, setCourse] = useState({});

  // const [isSlide, setIsSlide, width] = useOutletContext();
  const { id } = useParams();

  const getCourse = async () => {
    const response = await fetch(
      `https://imarticus-backend.onrender.com/api/v1/getonecourse/${id}`,
      {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const result = await response.json();
    if (result.success) {
      // console.log(result);
      setSuccess(true);
      setCourse(result.course);
    }
  };

  useEffect(() => {
    getCourse();
  }, []);

  return (
    <>
      <div
        className="coursebody  dash_body"
        style={{ marginLeft: width > 900 ? "260px" : "0px" }}
      >
        <Header
          headername={course.name}
          isSlide={isSlide}
          setIsSlide={setIsSlide}
          width={width}
        />

        {success ? (
          <div className="down_header below_header">
            <div className="blind">
              <span style={{ marginRight: "20px", fontSize: "30px" }}>
                {" "}
                <Link
                  style={{ textDecoration: "none", color: "gray" }}
                  to={`/dashboard/courses`}
                >
                  ◄
                </Link>
              </span>
              {`All Courses > ${course.name}`}
            </div>
            <Coursehierarchy course={course} />
          </div>
        ) : (
          <div className="loader">
            <p>◠</p>
          </div>
        )}
      </div>
    </>
  );
}

export default CourseBody;
