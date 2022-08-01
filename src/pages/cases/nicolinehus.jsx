import React from 'react'
import DarkTheme from "../../layouts/Dark";
import Navbar from "../../components/Navbar";
import ProjectDetails2Header from "../../components/Cases/nicolinehus-case-header";
import ProjectDetails2Introduction from "../../components/Cases/nicolinehus-case-description";
import ProjectDetails2Images from "../../components/Cases/nicolinehus-case-images";
import SmallFooter from "../../components/Small-footer";

const ProjectDetails2Dark = () => {
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
        <ProjectDetails2Header />
        <ProjectDetails2Introduction />
        <ProjectDetails2Images />
        <SmallFooter />
      </DarkTheme>
    );
}

export default ProjectDetails2Dark
