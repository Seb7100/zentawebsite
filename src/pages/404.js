// 404.js
import React from 'react';
import Link from 'next/link';
import Navbar from "../components/Navbar";
import ShowcasesFullScreen from "../components/Showcases-full-screen";
import DarkTheme from "../layouts/Dark";
import NotFound from '../components/404';


const FourohFour = () => {
    return (
      <DarkTheme>
        <Navbar />
       <NotFound />
       
      </DarkTheme>
    );
  };

  export default FourohFour;