/** @format */

import { useOutletContext } from "react-router-dom";
import Header from "./Header";

function GroupBody() {
  const [isSlide, setIsSlide, width] = useOutletContext();

  return (
    <>
      <div
        className="groupbody dash_body"
        style={{ marginLeft: width > 900 ? "260px" : "0px" }}
      >
        <Header
          headername="My Group"
          isSlide={isSlide}
          setIsSlide={setIsSlide}
          width={width}
        />
        <div className="below_header">
          {width < 900 ? (
            <div className="blind">My Groups</div>
          ) : (
            <div className="empty_text">Empty</div>
          )}
        </div>
      </div>
    </>
  );
}

export default GroupBody;
