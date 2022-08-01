import React from "react";
import Head from "next/head";
import Split from "./Split";
import Link from "next/link";

const NotFound = ({theme}) => {
  return (
    <header
    className="pages-header2 bg-img valign parallaxie"
    style={{ backgroundImage: "url(/img/slid/10.jpg)", backgroundPosition: "center" }}
    data-overlay-dark="5"
  >
    <Head>
    <title>Page not found - Zentaweb</title>
    <meta name="description" content="Page not found" />
    <meta property="og:title" content="bla bla bla" />
    </Head>
    <div className="container ">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="cont text-center parlx">
            <h1>OOOPS! &#9995;	
</h1>
            <span className="pb-50 pt-30">The page you are looking for might have been removed, had its name changed or is temporarily unavailable.</span>
            <br />
            <Link href="/">
              <a
                className={`btn-curve ${
                  theme == "light" ? "btn-blc" : "btn-lit"
                } wow fadeInUp`}
                data-wow-delay=".5s"
              >
                <span>Go to homepage</span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </header>
  );
};

export default NotFound;