import React from "react";
import "../CSS/Cards.css";
import { BoarderBrownBtn, Btn, BoarderGreenBtn, GreenBtn } from "./Btns";

function ListingCard(props) {
  return (
    <div className="ListingCard">
      <img src={props.img} />
      <div>
        <h1>{props.head}</h1>
        <div>
          <p>Price</p>
          <h1>${props.head}</h1>
        </div>
      </div>
      <hr />
      <div>
        <div>
          <p>Location: {props.location}</p>
          <p>Quantity Available: {props.quantity}</p>
        </div>
        <div>
          <p>Material:{props.material}</p>
          <p>Condition:{props.condition}</p>
        </div>
      </div>
      <hr />
      <p>Additional note</p>
      <p>{props.note}</p>
      <div>
        <div>
          <h1>
            <span>{props.rating}</span>/5
          </h1>
          <p>⭐⭐⭐⭐</p>
        </div>
        <div>
          <BoarderBrownBtn text="View Listing" />
        </div>
      </div>
    </div>
  );
}

export default ListingCard;
