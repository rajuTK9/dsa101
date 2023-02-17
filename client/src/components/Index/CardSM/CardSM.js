import React from "react";
import "./CardSM.css";
import { Link } from "react-router-dom";

export default function CardSM(props) {
  return (
    <Link to={`/${props.title}`}>
      <div className={props.isActive ? "card-sm active" : "card-sm"}>
        <div
          className="card-img"
          style={{ backgroundImage: `url(${props.img})` }}
        ></div>
        <div className="card-body">
          <h3 className="card-title">{props.title}</h3>
        </div>
      </div>
    </Link>
  );
}
