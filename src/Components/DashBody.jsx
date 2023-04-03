/** @format */

import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import Courses from "./Courses";
import Header from "./Header";

function DashBody({ isSlide, setIsSlide, width }) {
  const [courses, setCourses] = useState([]);
  // const [isSlide, setIsSlide, width] = useOutletContext();

  const getCourses = async () => {
    const response = await fetch(
      "https://imarticus-backend.onrender.com/api/v1/getallcourses",
      {
        method: "GET",
        mode: "cors",
        cache: "no-cache",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const result = await response.json();
    if (result.success) {
      // console.log(result);
      setCourses(result.courses);
    }
  };

  useEffect(() => {
    getCourses();
  }, []);

  return (
    <div
      className="dash_body"
      style={{ marginLeft: width > 900 ? "260px" : "0px" }}
    >
      <Header
        headername="My Courses"
        isSlide={isSlide}
        setIsSlide={setIsSlide}
        width={width}
      />
      {courses.length ? (
        <div className="below_header">
          {width < 900 ? <div className="blind">My Courses</div> : ""}
          <Courses courses={courses} />
        </div>
      ) : (
        <div className="loader">
          <p>◠</p>
        </div>
      )}
    </div>
  );
}

export default DashBody;
