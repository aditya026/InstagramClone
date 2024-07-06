import React from "react";
import "./Home.css";
import Section from "../components/Section";
// import logo01 from "./imgs/logo.png";
// import home from './imgs/home.png'
import images from "../components/images";
import Right01 from "../components/Right01";
import CardContainer from "../components/CardContainer";
import LowerSectin from "../components/LowerSectin";

const Homee = () => {
  return (
    <div className="homee">
      <div className="left">
        <div className="upper">
          <div className="upper-01">
            <img src={images.logo} alt="" />
          </div>
          <div className="upper-02">
            <div className="section">
              {/* <Section name="Home" home="home" /> */}
              <Section name="Home" img={images.home} />
              <Section name="Search" img={images.search} />
              <Section name="Explore" img={images.explore} />
              <Section name="Reel" img={images.reel} />
              <Section name="Messages" img={images.message} />
              <Section name="Notification" img={images.notification} />
              <Section name="Create" img={images.create} />
            </div>
            <div className="section-02">
              <Section name="Threads" img={images.threads} />
              <Section name="Menu" img={images.menu} />
            </div>
          </div>
        </div>
      </div>
      <div className="right">
        <Right01 />
        <div className="right-02">
          <CardContainer />
        </div>
        <div className="right-03">
          <LowerSectin />
          </div>
      </div>
    </div>
  );
};

export default Homee;
