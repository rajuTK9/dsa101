import React from "react";
import "./HeroSection.css";

export default function HeroSection() {
  return (
    <div className="index-hero">
      <div className="hero-text">
        <h1 className="hero-title">#101Challenge</h1>
        <h4 className="hero-description">Become a coding PRO in 101 days</h4>
      </div>
      <div className="hero-img">
        <img src="/assets/illustrations/hero-img.svg" alt="" />
      </div>
    </div>
  );
}
