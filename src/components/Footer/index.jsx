/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Formik, Form, Field } from "formik";
import appData from "../../data/app.json";

const Footer = () => {
  return (
    <footer className="footer sub-bg section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-10">
            <p className="text-left">All Rights Reserved Zentaweb, 2022</p>
          </div>
          <div className="col-lg-10">
            <p className="text-left">Zentaweb is a part of Nem Digital, Denmark</p>
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
