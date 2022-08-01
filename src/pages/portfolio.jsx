import React from "react";
import DarkTheme from "../layouts/Dark";
import addParlx from "../common/addParlx";
import Navbar from "../components/Navbar";
import SmallFooter from "../components/Small-footer";
import PortfolioCustomColumn from "../components/Portfolio-custom-column";
import Head from "next/head";

const Works3Dark = () => {
  const fixedHeader = React.useRef(null);
  const MainContent = React.useRef(null);
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  const [pageLoaded, setPageLoaded] = React.useState(false);
  React.useEffect(() => {
    setPageLoaded(true);
    if (pageLoaded) {
      addParlx();
    }
  }, [pageLoaded]);
  React.useEffect(() => {
    setInterval(() => {
      if (fixedHeader.current) {
        var slidHeight = fixedHeader.current.offsetHeight;
      }
      if (MainContent.current) {
        MainContent.current.style.marginTop = slidHeight + "px";
      }
    }, 1000);
    var navbar = navbarRef.current;
    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
  }, [fixedHeader, MainContent, navbarRef]);

  return (
    <DarkTheme>
      <Head>
    <title>Portfolio - Zentaweb</title>
    <meta name="description" content="Take a look at our real Estate websites." />
    <meta property="og:title" content="What projects have we worked with? Take a look →" />
    </Head>
      <Navbar nr={navbarRef} lr={logoRef} />
      <header
        ref={fixedHeader}
        className="works-header fixed-slider hfixd valign"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9 col-md-11 static">
              <div className="capt mt-50">
                <div className="parlx">
                  <h2 className="custom-font">Web development and marketing is our passion</h2>
                  <p>
                    Take a look at our portfolio and see what projects we have worked with. Diverse in styles and verticals, our websites reflect each brands&apos;	 disctinct personality.
                  </p>
                </div>

                <div className="bactxt custom-font valign">
                  <span className="full-width">Works</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div ref={MainContent} className="main-content">
        <PortfolioCustomColumn column={2} hideFilter hideSectionTitle />
        <SmallFooter />
      </div>
    </DarkTheme>
  );
};

export default Works3Dark;
