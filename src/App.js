import React from "react";
import "./styles.css";
import Snowfall from "react-snowfall";

const treeImage =
  "https://cdn.iconscout.com/icon/free/png-256/christmas-tree-1919198-1619796.png";

export default function App() {
  console.log(window.location.href);
  const str = window.location.href.split("?")[1];
  const decoded = decodeURIComponent(str);

  console.log(decoded);

  return (
    <div className="App">
      <Snowfall color="white" snowflakeCount={300} />
      <div className="card-area">
        <div className="tree-wrapper">
          <img className="tree-image" src={treeImage} />
        </div>
        <div className="title">Merry Chirstmas</div>
        <div className="divider" />
        <div className="card-contents">{decoded}</div>
      </div>
    </div>
  );
}
