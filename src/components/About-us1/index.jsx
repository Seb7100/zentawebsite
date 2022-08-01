/* eslint-disable @next/next/no-img-element */
import React from "react";
import Split from "../Split";
import AboutUs1Date from "../../data/sections/about-us1.json";

const AboutUs1 = () => {
  return (
    <div className="about section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="img-mons">
              <div className="row">
                
                <div className="col-md-15 cmd-padding">
                  <div className="img2 wow imago" data-wow-delay=".3s">
                    <img src={AboutUs1Date.image2} alt="" />
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-1 valign">
            <div className="content">
              <div className="sub-title">
                <h6>{AboutUs1Date.smallTitle}</h6>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <Split>
                <h2
                  className="extra-title words chars splitting main-title wow"
                  data-splitting
                >
                  {AboutUs1Date.title.first} <br /> {AboutUs1Date.title.second}
                </h2>
              </Split>
              <Split>
                <p className="words chars splitting wow txt" data-splitting>
                  {AboutUs1Date.content}
                </p>
              </Split>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs1;
