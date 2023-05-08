import React from "react";
import "../CSS/Btn.css";

function BoarderGreenBtn(props) {
  return <button className="boarder-green-btn">{props.text}</button>;
}

function GreenBtn(props) {
  return <button className="green-btn">{props.text}</button>;
}

function BoarderBrownBtn(props) {
  return <button className="boarder-brown-btn">{props.text}</button>;
}

export { BoarderGreenBtn, GreenBtn, BoarderBrownBtn };
