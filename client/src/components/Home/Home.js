import React from "react";
import Card from "./Card/Card";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <div className="cards-container">
        <Card title={"Basics"} img={"/assets/illustrations/basic-dsa.svg"} />
        <Card
          title={"DSA Starter"}
          img={"/assets/illustrations/starter-dsa.svg"}
        />
        <Card
          title={"Adv. DSA"}
          img={"/assets/illustrations/advanced-dsa.svg"}
        />
      </div>
    </div>
  );
}
