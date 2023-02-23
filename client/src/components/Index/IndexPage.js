import React from "react";
import CardSM from "./CardSM/CardSM";
import Chapter from "./Chapter/Chapter";
import "./IndexPage.css";
import NavItem from "./NavItem/NavItem";

export default function IndexPage() {
  return (
    <div className="index-container">
      <div className="index-hero"></div>
      <div className="index-main">
        <div className="index-navbar">
          <NavItem title="Basics of C++" isActive="true" />
          <NavItem title="Strings" />
          <NavItem title="Arrays" />
          <NavItem title="Loops" />
          <NavItem title="Vector" />
          <NavItem title="Stack" />
          <NavItem title="Linked List" />
          <NavItem title="Stacks" />
          <NavItem title="Queue" />
          <NavItem title="Heap" />
          <NavItem title="Graphs" />
          <NavItem title="Trees" />
          <NavItem title="Hashmaps" />
          <NavItem title="D.P." />
        </div>
        <div className="index-content">
          <div className="index-cards-container">
            <CardSM
              title={"Basics"}
              img={"./assets/illustrations/basic-dsa.svg"}
            />
            <CardSM
              title={"DSA Starter"}
              img={"./assets/illustrations/starter-dsa.svg"}
            />
            <CardSM
              title={"Adv. DSA"}
              img={"./assets/illustrations/advanced-dsa.svg"}
            />
          </div>
          <div className="index-chapters-container">
            <Chapter
              title="Chapter 1: Lorem ipsum dolor sit amet consectetur."
              description="Sagittis scelerisque leo suspendisse mauris sed semper dolor malesuada accumsan."
              status="done"
            />
            <Chapter
              title="Chapter 1: Lorem ipsum dolor sit amet consectetur."
              description="Sagittis scelerisque leo suspendisse mauris sed semper dolor malesuada accumsan."
              status="done"
            />
            <Chapter
              title="Chapter 1: Lorem ipsum dolor sit amet consectetur."
              description="Sagittis scelerisque leo suspendisse mauris sed semper dolor malesuada accumsan."
              status="current"
            />
            <Chapter
              title="Chapter 1: Lorem ipsum dolor sit amet consectetur."
              description="Sagittis scelerisque leo suspendisse mauris sed semper dolor malesuada accumsan."
              status="pending"
            />
            <Chapter
              title="Chapter 1: Lorem ipsum dolor sit amet consectetur."
              description="Sagittis scelerisque leo suspendisse mauris sed semper dolor malesuada accumsan."
              status="pending"
            />
            <Chapter
              title="Chapter 1: Lorem ipsum dolor sit amet consectetur."
              description="Sagittis scelerisque leo suspendisse mauris sed semper dolor malesuada accumsan."
              status="pending"
            />
            <Chapter
              title="Chapter 1: Lorem ipsum dolor sit amet consectetur."
              description="Sagittis scelerisque leo suspendisse mauris sed semper dolor malesuada accumsan."
              status="pending"
            />
            <Chapter
              title="Chapter 1: Lorem ipsum dolor sit amet consectetur."
              description="Sagittis scelerisque leo suspendisse mauris sed semper dolor malesuada accumsan."
              status="l-pending"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
