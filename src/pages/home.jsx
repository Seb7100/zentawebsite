import React from "react";
import BlcSec from "../components/Blc-sec";
import AboutUs1 from "../components/About-us1";
import CallToAction from "../components/Call-to-action";
import Footer from "../components/Footer";
import Numbers1 from "../components/Numbers";
import Navbar from "../components/Navbar";
import Works2Slider from "../components/Works2-slider";
import DarkTheme from "../layouts/Dark";
import IntroWithSlider2 from "../components/Intro-with-slider2";
import AboutUs3 from "../components/About-us3";
import Works1Slider from "../components/Works1-slider";
import Head from "next/head";

const Homepage3 = () => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
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
  }, [navbarRef]);

  return (
    <DarkTheme>
      <Head>
    <title>Digital Solutions for the Real Estate industry</title>
    <meta name="description" content="We create growth for the real estate industry through web development and online marketing." />
    <meta property="og:title" content="We cultivate web development and digital marketing for the real estate industry. Read more →" />
    <meta property="og:image" content=".../og.png" />
    </Head>
      <Navbar nr={navbarRef} lr={logoRef} />
      <IntroWithSlider2 />
      <BlcSec />
      <AboutUs1 skillsTheme="dark" />
      <Works1Slider />
      <AboutUs3 skillsTheme="dark" />
      <Numbers1 />
      <Works2Slider subBG />
      <CallToAction />
      <Footer />
    </DarkTheme>
  );
};

export default Homepage3;
