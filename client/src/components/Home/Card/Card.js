import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

export default function Card(props) {
  return (
    <Link to={`/${props.title}`}>
      <div className="card">
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
