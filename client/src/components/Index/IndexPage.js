import React, { useState } from "react";
import CardSM from "./CardSM/CardSM";
import Chapter from "./Chapter/Chapter";
import "./IndexPage.css";
import { useParams } from "react-router";
import NavItem from "./NavItem/NavItem";
import GetCourse from "../../data/GetCourse";

export default function IndexPage() {
  const [navbarCollapse, setNavbarCollapse] = useState(false);
  const [courseData, setCourseData] = useState();
  const params = useParams();

  let topics = [];

  const courseTopics = GetCourse(`/categories/${params.id}`);
  console.log(params.id);
  if (courseTopics) console.log(courseTopics);
  if (courseTopics)
    courseTopics.forEach((e) => {
      topics.push(e.topic);
    });

  function removeDuplicates(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
  }

  topics = removeDuplicates(topics);
  console.log(topics);

  return (
    <div key={params.id} className="index-container">
      <div className="index-hero"></div>
      <div className="index-main">
        <div
          className={navbarCollapse ? "index-navbar expand" : "index-navbar"}
        >
          {/* <NavItem title="Basics of C++" isActive="true" />
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
          <NavItem title="D.P." /> */}
          {topics &&
            topics.map((e, i) => {
              if (courseData && courseData[0].topic === e)
                return (
                  <NavItem
                    title={e}
                    key={i}
                    isActive="true"
                    setCourseData={setCourseData}
                  />
                );
              return (
                <NavItem title={e} key={i} setCourseData={setCourseData} />
              );
            })}
          <div
            className="navbar-collapse-icon"
            onClick={() => setNavbarCollapse(!navbarCollapse)}
          >
            {navbarCollapse ? (
              <img src="/assets/icons/arrow-left-black.svg" alt="" />
            ) : (
              <img src="/assets/icons/arrow-right-white.svg" alt="" />
            )}
          </div>
        </div>
        <div className="index-content">
          <div className="index-cards-container">
            <CardSM
              title={"Basics"}
              img={"./assets/illustrations/basic-dsa.svg"}
              // setParams={setParams}
            />
            <CardSM
              title={"DSA Starter"}
              img={"./assets/illustrations/starter-dsa.svg"}
              // setParams={setParams}
            />
            <CardSM
              title={"Adv. DSA"}
              img={"./assets/illustrations/advanced-dsa.svg"}
              // setParams={setParams}
            />
          </div>
          <div className="index-chapters-container">
            {courseData &&
              courseData.map((e, i) => {
                if (i === courseData.length - 1)
                  return (
                    <Chapter
                      title={e.chapter}
                      description="Sagittis scelerisque leo suspendisse mauris sed semper dolor malesuada accumsan."
                      status="l-done"
                      key={i}
                    />
                  );
                return (
                  <Chapter
                    title={e.chapter}
                    description="Sagittis scelerisque leo suspendisse mauris sed semper dolor malesuada accumsan."
                    status="done"
                    key={i}
                  />
                );
              })}
            {/* <Chapter
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
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
