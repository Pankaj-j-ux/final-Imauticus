/** @format */

import { Link, NavLink, Outlet } from "react-router-dom";
import "./Course.css";
import SidePanel from "../../Components/SidePanel";
import { useEffect, useState } from "react";
import CourseBody from "../../Components/CourseBody";

function Course() {
  const [isSlide, setIsSlide] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  }, [width]);
  return (
    <>
      <div className="dashboard">
        <SidePanel width={width} isSlide={isSlide} setIsSlide={setIsSlide}>
          <div className="panel_content">
            <div className="upper_content">
              <div onClick={() => setIsSlide(false)} className="active">
                <div>Course</div>
              </div>
            </div>
            <div className="lower_content">
              <p>Facing Problems?</p>
              <button className="help_btn">Get help</button>
            </div>
          </div>
        </SidePanel>
        {/* <Outlet context={[isSlide, setIsSlide, width]} /> */}
        <CourseBody isSlide={isSlide} setIsSlide={setIsSlide} width={width} />
      </div>
    </>
  );
}

export default Course;
