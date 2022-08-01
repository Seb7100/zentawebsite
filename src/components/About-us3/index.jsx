/* eslint-disable @next/next/no-img-element */
import React from "react";
import Split from "../Split";
import AboutUs3Date from "../../data/sections/about-us3.json";

const AboutUs3 = () => {
  return (
    <div className="about pb-100">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-5 valign">
            <div className="content">
              <div className="sub-title">
                <h6>{AboutUs3Date.smallTitle}</h6>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <Split>
                <h2
                  className="extra-title words chars splitting main-title wow"
                  data-splitting
                >
                  {AboutUs3Date.title.first} <br /> {AboutUs3Date.title.second}
                </h2>
              </Split>
              <Split>
                <p className="words chars splitting wow txt" data-splitting>
                  {AboutUs3Date.content}
                </p>
              </Split>
             
            </div>
          </div>
          <div className="col-lg-6 offset-lg-1">
            <div className="img-mons">
              <div className="row">
                
                <div className="col-md-15 cmd-padding">
                  <div className="img4 wow imago" data-wow-delay=".3s">
                    <img src={AboutUs3Date.image2} alt="" />
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs3;
