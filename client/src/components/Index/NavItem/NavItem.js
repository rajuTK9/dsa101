import React from "react";
import "./NavItem.css";
import GetCourse from "../../../data/GetCourse";

export default function NavItem(props) {
  const data = GetCourse(`/topics/${props.title}`);
  function changeTopic() {
    props.setCourseData(data);
  }
  return (
    <div
      className={props.isActive ? "nav-item active" : "nav-item"}
      onClick={changeTopic}
    >
      <span className="nav-item-txt">{props.title}</span>
    </div>
  );
}
NavItem.defaultProps = {
  isActive: false,
};
