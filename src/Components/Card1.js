import React from "react";
import "../CSS/Cards.css";

function Card1(props) {
  return (
    <div className="card1">
      <img src={props.img} />
      <h1>{props.head}</h1>
      <p>{props.text}</p>
    </div>
  );
}

export default Card1;
