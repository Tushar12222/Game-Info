import React, { useState } from "react";
import icon from "D:/React_projects/games-info/src/images/console.png";

export default function Gameitem(props) {
  const [pic, setPic] = useState(props.thumb);
  const handleOnError = () => {
    setPic(icon);
  };
  return (
    <>
      <div className="card mx-4 my-4">
        <img
          src={pic}
          onError={handleOnError}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <ul>
            <p className="card-text">
              <li>Game ID: {props.gameId ? props.gameId : "Unknown"}</li>
              <li>
                Steam ID: {props.steamAppId ? props.steamAppid : "Unknown"}
              </li>
              <li>Cheapest price($): {props.cheapest}</li>
            </p>
          </ul>
        </div>
      </div>
    </>
  );
}
