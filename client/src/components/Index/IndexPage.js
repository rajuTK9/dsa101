import React, { useState, useEffect } from "react";
import CardSM from "./CardSM/CardSM";
import Chapter from "./Chapter/Chapter";
import "./IndexPage.css";
import { useParams } from "react-router";
import NavItem from "./NavItem/NavItem";
import GetCourse from "../../data/GetCourse";
import GetUser from "../../data/GetUser";
import HeroSection from "./HeroSection/HeroSection";
import Welcome from "./Welcome/Welcome";
import Loading from "../Loading/Loading";
import { useNavigate } from "react-router";

export default function IndexPage() {
  const [navbarCollapse, setNavbarCollapse] = useState(false);
  const [courseData, setCourseData] = useState();
  const params = useParams();
  const navigate = useNavigate();

  let topics = [];

  useEffect(() => {
    if (
      !(
        params.id === "Basics" ||
        params.id === "DSA Starter" ||
        params.id === "Adv. DSA"
      )
    ) {
      navigate("/404");
    }
  }, [navigate, params.id]);

  const courseTopics = GetCourse(`/categories/${params.id}`);
  const user = GetUser();
  if (courseTopics)
    courseTopics.forEach((e) => {
      topics.push(e.topic);
    });

  function removeDuplicates(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
  }

  topics = removeDuplicates(topics);

  return (
    <div key={params.id} className="index-container">
      <HeroSection />
      <div className="index-main">
        <div
          className={navbarCollapse ? "index-navbar expand" : "index-navbar"}
        >
          {topics.length > 0 ? (
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
            })
          ) : (
            <Loading />
          )}
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
            {courseData ? (
              courseData.map((e, i) => {
                if (i === courseData.length - 1)
                  return (
                    <Chapter
                      title={e.chapter}
                      description={e.chapter_description}
                      status={
                        user && user.completed_chapters.includes(e.chapter)
                          ? "l-done"
                          : "l-pending"
                      }
                      key={i}
                    />
                  );
                return (
                  <Chapter
                    title={e.chapter}
                    description={e.chapter_description}
                    status={
                      user && user.completed_chapters.includes(e.chapter)
                        ? "done"
                        : "pending"
                    }
                    key={i}
                  />
                );
              })
            ) : (
              <Welcome />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
