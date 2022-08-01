import React from 'react'
import DarkTheme from "../../layouts/Dark";
import Navbar from "../../components/Navbar";
import ProjectDetails3Header from "../../components/Cases/havneoen-case-header";
import ProjectDetails3Introduction from "../../components/Cases/havneoen-case-description";
import ProjectDetails3Images from "../../components/Cases/havneoen-case-images";
import SmallFooter from "../../components/Small-footer";

const ProjectDetails3Dark = () => {
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
        <ProjectDetails3Header />
        <ProjectDetails3Introduction />
        <ProjectDetails3Images />
        <SmallFooter />
      </DarkTheme>
    );
}

export default ProjectDetails3Dark
