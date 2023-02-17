import React from "react";
import "./NavItem.css";

export default function NavItem(props) {
  return (
    <div className={props.isActive ? "nav-item active" : "nav-item"}>
      <span className="nav-item-txt">{props.title}</span>
    </div>
  );
}
NavItem.defaultProps = {
  isActive: false,
};
