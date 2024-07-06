import React from "react";
import "./right01.css";
import images from "../components/images";
// import CardContainer from "./CardContainer";

const Right01 = () => {
  return (
    <div className="right01">
      <div className="Right01-left">
        <img src={images.me} alt="" />
        {/* <img src="" alt="" /> */}
      </div>
      <div className="Right01-right">
        <div className="r01-r-01">
          <h2>aditya.26.z</h2>
          <button>Edit profile</button>
          <button>View archive</button>
          <button>Ad tools</button>
          <img src={images.setting} alt="" />
        </div>
        <div class="r01-r-02">
          <div class="profile-stats">
            <span>2 posts</span>
            <span>64 followers</span>
            <span>143 following</span>
          </div>
          <div class="profile-username">
            <h2>aditya_95_z</h2>
            <span class="profile-handle">
              <img src={images.thread} alt="" />aditya.26.z 
            </span>
          </div>
          <div class="profile-bio">
            <h3>Education</h3>
            <p>“Exploring the depths of anime’s emotional rollercoaster. 🎢”</p>
            <p>Wanna live in one piece 🌏</p>
            <p>Ø && R</p>
            <p>Death. && RRuler</p>
          </div>
          <div class="profile-insights">
            <p>
              122 accounts reached in the last 30 days.{" "}
              <a href="#">View insights</a>
            </p>
          </div>
        </div>
      </div>
      {/* <div className="right02">
        <CardContainer />
      </div> */}
    </div>
  );
};

export default Right01;
