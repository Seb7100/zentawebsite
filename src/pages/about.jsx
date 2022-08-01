import React from "react";
import AboutHeader from "../components/About-header";
import AboutIntro from "../components/About-intro";
import CallToAction from "../components/Call-to-action";
import Footer from "../components/Footer";
import MinimalArea from "../components/Minimal-area";
import Navbar from "../components/Navbar";
import Services4 from "../components/Services4";
import Team1 from "../components/Team1";
import DarkTheme from "../layouts/Dark";
import Head from "next/head";

const AboutDark = () => {
  const navbarRef = React.useRef(null);
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
    <title>About - Zentaweb</title>
    <meta name="description" content="We create growth for the real estate industry through web development and online marketing." />
    <meta property="og:title" content="We cultivate web development, smart ideas and digital marketing for the real estate industry. Read more →" />
    </Head>
      <Navbar nr={navbarRef} />
      <AboutHeader />
      <AboutIntro />
      <Services4 withPadding withOutTitle />
      <Team1 />
      <MinimalArea />
      <CallToAction subBG />
      <Footer />
    </DarkTheme>
  );
};

export default AboutDark;
