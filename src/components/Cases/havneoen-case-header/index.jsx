import React from "react";
import Link from "next/link";

const ProjectDetails3Header = () => {
  return (
    <section
      className="page-header proj-det bg-img parallaxie valign"
      style={{ backgroundImage: "url(/img/portfolio/project2/Havneoen.jpg)", backgroundPosition: "center" }}
      data-overlay-dark="4"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-md-9">
            <div className="cont">
              <h6>Web development </h6>
              <h1>Havneoen, Vejle</h1>
              <h5>
              <img className ="dkicon" src="/img/portfolio/curs/denmark.png"></img>
              &nbsp;
              Denmark
              </h5>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3">
            <div className="item mt-30">
              <h6>Client</h6>
              <p>
                <a href="https://danbolig.dk/">danbolig Vejle</a>
              </p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="item mt-30">
              <h6>Categories</h6>
              <p>
                Webdesign, Wordpress
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails3Header;
