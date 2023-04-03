/** @format */

import { useState } from "react";

function Folder({ items, setTargetURL, setStart }) {
  const [expand, setExpand] = useState(false);

  if (items.isRoot) {
    return (
      <div>
        <div className="course_overview">
          <img src={items.image} alt="IMG" />
          <div>
            <div>{items.name}</div>
            <div>{items.batch}</div>
            <div>{`Total Module : ${items.items.length}`}</div>
          </div>
        </div>
        <div>
          {items.items.map((exp, index) => {
            return (
              <Folder
                key={index}
                setTargetURL={setTargetURL}
                setStart={setStart}
                items={exp}
              />
            );
          })}
        </div>
      </div>
    );
  } else if (items.isFolder) {
    return (
      <div>
        <div onClick={() => setExpand(!expand)} className="title_box">
          <div>
            <div>{`${items.id}. ${items.subtitle}`}</div>
            {expand ? (
              <button onClick={() => setExpand(false)}>-</button>
            ) : (
              <button onClick={() => setExpand(true)}>+</button>
            )}
          </div>
          <div>{`Lecture: ${items.items.length}`}</div>
        </div>
        <div style={{ display: expand ? "block" : "none" }}>
          {items.items.map((exp, index) => {
            return (
              <Folder
                key={index}
                setTargetURL={setTargetURL}
                setStart={setStart}
                items={exp}
              />
            );
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div
        className="subtitle_box"
        onClick={() => {
          setTargetURL(items.src);
          setStart(true);
        }}
      >
        <div>{`${items.id}. ${items.subtitle}`}</div>
        {items.isVideo ? (
          <button
            onClick={() => {
              setTargetURL(items.src);
              setStart(true);
            }}
            className="play_btn"
          >
            PLAY
          </button>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default Folder;
