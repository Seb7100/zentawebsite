import React from "react";
import Link from "next/link";

const AboutHeader = () => {
  return (
    <header
      className="pages-header bg-img valign parallaxie"
      style={{ backgroundImage: "url(/img/slid/11.jpg)", backgroundPosition: "center" }}
      data-overlay-dark="5"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="cont text-center parlx">
              <h1>Get to know about us</h1>
              <div className="path">
                <Link href="/">Home</Link>
                <span>/</span>
                <a className="active">
                  About Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AboutHeader;
