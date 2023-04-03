/** @format */

import { useEffect, useState } from "react";
import SidePanel from "../../Components/SidePanel";
import "./Dashboard.css";
import { Outlet, Link, NavLink } from "react-router-dom";
import DashBody from "../../Components/DashBody";

function Dashboard() {
  const [isSlide, setIsSlide] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  }, [width]);

  return (
    <div className="dashboard">
      <SidePanel width={width} isSlide={isSlide} setIsSlide={setIsSlide}>
        <div className="panel_content">
          <div className="upper_content">
            <div onClick={() => setIsSlide(false)} className="active">
              <div>My Courses</div>
            </div>
            {/* <NavLink
              onClick={() => setIsSlide(false)}
              to={`/dashboard/courses`}
              className={({ isActive, isPending }) =>
                isActive ? "active" : isPending ? "pending" : ""
              }
            >
              <div>My Courses</div>
            </NavLink>
            {/* <NavLink 
              onClick={() => setIsSlide(false)}
              to={`/dashboard/groups`}
              className={({ isActive, isPending }) =>
                isActive ? "active" : isPending ? "pending" : ""
              }
            >
              <div>My Group</div>
            </NavLink>
            */}
          </div>
          <div className="lower_content">
            <p>Facing Problems?</p>
            <button className="help_btn">Get help</button>
          </div>
        </div>
      </SidePanel>
      <DashBody isSlide={isSlide} setIsSlide={setIsSlide} width={width} />
      {/* <Outlet context={[isSlide, setIsSlide, width]} /> */}
    </div>
  );
}

export default Dashboard;
