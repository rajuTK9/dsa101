import React from "react";
import PayMeButton from "../PayMe/PayMeButton/PayMeButton";
import Card from "./Card/Card";
import "./Home.css";
import ProgressBar from "../ProgressBar/ProgressBar";

export default function Home() {
  return (
    <div className="home-container">
      <div className="cards-container">
        <div className="card-box">
          <Card title={"Basics"} img={"/assets/illustrations/basic-dsa.svg"} />
          <br />
          <ProgressBar category="Basics" />
        </div>
        <div className="card-box">
          <Card
            title={"DSA Starter"}
            img={"/assets/illustrations/starter-dsa.svg"}
          />
          <br />
          <ProgressBar category="DSA Starter" />
        </div>
        <div className="card-box">
          <Card
            title={"Adv. DSA"}
            img={"/assets/illustrations/advanced-dsa.svg"}
          />
          <br />
          <ProgressBar category="Adv. DSA" />
        </div>
      </div>
      <PayMeButton />
    </div>
  );
}
