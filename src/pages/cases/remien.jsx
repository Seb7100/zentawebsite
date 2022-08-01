import React from 'react'
import DarkTheme from "../../layouts/Dark";
import Navbar from "../../components/Navbar";
import ProjectDetails4Header from "../../components/Cases/remien-case-header";
import ProjectDetails4Introduction from "../../components/Cases/remien-case-description";
import ProjectDetails4Images from "../../components/Cases/remien-case-images";
import SmallFooter from "../../components/Small-footer";

const ProjectDetails4Dark = () => {
    const navbarRef = React.useRef(null);
    const logoRef = React.useRef(null);
    React.useEffect(() => {
      var navbar = navbarRef.current,
        logo = logoRef.current;
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
        <Navbar nr={navbarRef} lr={logoRef} />
        <ProjectDetails4Header />
        <ProjectDetails4Introduction />
        <ProjectDetails4Images />
        <SmallFooter />
      </DarkTheme>
    );
}

export default ProjectDetails4Dark
