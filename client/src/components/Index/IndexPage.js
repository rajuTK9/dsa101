import React, { useState } from "react";
import CardSM from "./CardSM/CardSM";
import Chapter from "./Chapter/Chapter";
import "./IndexPage.css";
import { useParams } from "react-router";
import NavItem from "./NavItem/NavItem";
import GetCourse from "../../data/GetCourse";
import GetUser from "../../data/GetUser";

export default function IndexPage() {
  const [navbarCollapse, setNavbarCollapse] = useState(false);
  const [courseData, setCourseData] = useState();
  const params = useParams();

  let topics = [];

  const courseTopics = GetCourse(`/categories/${params.id}`);
  const user = GetUser();
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
                      status={
                        user.completed_chapters.includes(e.chapter)
                          ? "l-done"
                          : "l-pending"
                      }
                      key={i}
                    />
                  );
                return (
                  <Chapter
                    title={e.chapter}
                    description="Sagittis scelerisque leo suspendisse mauris sed semper dolor malesuada accumsan."
                    status={
                      user.completed_chapters.includes(e.chapter)
                        ? "done"
                        : "pending"
                    }
                    key={i}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
