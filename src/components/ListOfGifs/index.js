import React from "react";
import Gif from "../Gif";
import "./styles.css";

export default function ListOfGifs({ gifs }) {
  return (
    <div className="ListOfGifs">
      <div>
        {gifs.map(({ id, title, url }) => (
          <Gif id={id} key={id} title={title} url={url} />
        ))}
      </div>
    </div>
  );
}
