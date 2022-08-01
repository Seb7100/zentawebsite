import React from "react";
import NavbarFullMenu from "../components/Navbar-full-menu/navbar-full-menu";
import ShowcasesFullScreen from "../components/Showcases-full-screen";
import DarkTheme from "../layouts/Dark";
import Head from "next/head";

const ShowcaseDark = () => {
  return (
    <DarkTheme>
      <Head>
    <title>Cases - Zentaweb</title>
    <meta name="description" content="See our showcases of real estate websites." />
    <meta property="og:title" content="We have collected a selection of our projects that you can explore →" />
    </Head>
      <NavbarFullMenu />
      <ShowcasesFullScreen />
    </DarkTheme>
  );
};

export default ShowcaseDark;
