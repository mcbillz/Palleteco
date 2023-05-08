import React from "react";
import "../CSS/Cards.css";
import { BoarderBrownBtn, Btn, BoarderGreenBtn, GreenBtn } from "./Btns";

function ListingCard(props) {
  return (
    <div className="ListingCard">
      <img src={props.img} />
      <div className="ListingCardDiv1">
        <h1>{props.head}</h1>
        <div>
          <p>Price</p>
          <h1>${props.price}</h1>
        </div>
      </div>
      <hr />
      <div className="ListingCardDiv2">
        <div>
          <p>Location: {props.location}</p>
          <p>Quantity Available: {props.quantity}pcs</p>
        </div>
        <div>
          <p>Material: {props.material}</p>
          <p>Condition: {props.condition}</p>
        </div>
      </div>
      <hr />
      <p>Additional note</p>
      <p className="noteP">{props.note}</p>
      <div className="ListingCardDiv3">
        <div>
          <h1>
            <span>{props.rating}</span>/5
          </h1>
          <p>{props.star}</p>
        </div>
        <div>
          <BoarderBrownBtn text="View Listing" />
        </div>
      </div>
    </div>
  );
}

export default ListingCard;
