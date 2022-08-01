import React from "react";
import Link from "next/link";
import Split from "../Split";

const BlcSec = () => {
  return (
    <section className="blc-sec section-padding pb-0 mb-50">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="intro md-mb30">
              <div className="sub-title">
                <h6>Know Us Better</h6>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <Split>
                <h2
                  className="extra-title wow words chars splitting"
                  data-splitting
                >
                  We help with web development <br></br> & effective marketing.
                </h2>
              </Split>
            </div>
          </div>
          <div className="col-lg-5 valign">
            <div className="full-width">
              <Split>
                <p className="wow txt words chars splitting" data-splitting>
                We do everything to make the process easy and straightforward - that&apos;s why we help with the task from A-Z, so you can focus on your core business.
                Diverse in styles and verticals, our websites reflect each brands&apos; disctinct personality.
                </p>
              </Split>
                
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlcSec;
