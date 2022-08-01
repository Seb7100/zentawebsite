import React from "react";
import Split from "../Split";

const AboutIntro = () => {
  return (
    <section className="intro-section section-padding pb-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4">
            <div className="htit sm-mb30">
              <span className="small-title">Unlimited Possibilities</span>
              
              <h4>We are Zentaweb</h4>
            </div>
          </div>
          <div className="col-lg-8 offset-lg-1 col-md-8">
            <div className="text">
              <Split>
                <p className="wow txt words chars splitting" data-splitting>
                We create growth for the real estate industry through web development and online marketing.
                We provide your business with tailored digital solutions which includes listing websites for any type of property. 
                Our solutions grow and boost your business&apos; digital presence by increasing user engagement and leads through the website.

                We work together to design, create and produce digital solutions that we are proud of, for companies whose desire is a professional online presence.

                </p>
              </Split>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
