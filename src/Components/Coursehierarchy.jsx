/** @format */

import { useState } from "react";
import Folder from "./folder.js";

function Coursehierarchy({ course }) {
  // console.log(course);
  const [targetURL, setTargetURL] = useState("");
  const [start, setStart] = useState(false);

  return (
    <>
      {start && (
        <div className="fullscreen">
          <button onClick={() => setStart(false)} className="video_close_btn">
            ✖
          </button>
          <iframe
            className="video_main"
            width="560"
            height="315"
            src={targetURL}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      )}
      <div className="ladder">
        <div className="details"></div>
        <div className="loop">
          <Folder
            setTargetURL={setTargetURL}
            setStart={setStart}
            items={course}
          />
        </div>
      </div>
    </>
  );
}

export default Coursehierarchy;
