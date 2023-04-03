/** @format */

import { Link } from "react-router-dom";

function Courses(props) {
  return (
    <>
      <div className="bunch">
        <p>Individual Course</p>
        <div className="course_scroll">
          {props.courses.map((course, index) => {
            return (
              <div key={index} className="course_card">
                <img src={course.image} alt="IMG" />
                <div className="details">
                  <p className="title">{course.name}</p>
                  <p className="batch">Batch : {course.batch}</p>
                  <Link to={`/course/${course._id}`}>
                    <button className="course_btn">Start Course</button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Courses;
