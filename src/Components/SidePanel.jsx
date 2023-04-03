/** @format */

import { Link } from "react-router-dom";

function SidePanel(props) {
  return (
    <div
      className="side_panel"
      style={{
        left: props.width < 900 ? (props.isSlide ? "0px" : "-260px") : "0px",
      }}
    >
      {props.isSlide && (
        <p className="cross" onClick={() => props.setIsSlide(false)}>
          🗙
        </p>
      )}
      <div className="panel_logo">
        <Link to={"/"}>
          <img
            src="https://cdn.pegasus.imarticus.org/images/imarticus-new-logo.svg"
            alt="logo"
          />
        </Link>
      </div>
      {props.children}
    </div>
  );
}

export default SidePanel;
