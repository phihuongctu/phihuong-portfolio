import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyle } from "./component/theme/theme.js";
import { FiSun, FiMoon } from "react-icons/fi";

import logo from "./asset/img/logo.png";
import "./asset/sass/App.scss";
import "./asset/main.css";
import Sidebar from "./component/sidebar/Sidebar";
import Intro from "./component/Hero";
import About from "./component/About";
import Service from "./component/Project";
import Experience from "./component/Experience";
import Reloader from "./component/Reploader";
import SoftSkill from "./component/softSkill";

// var Anynomous = function () {
//   return <h1>anynomous function</h1>;
// };

// var Arrow = () => <h1>Arrow function</h1>;

function App() {
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const icon =
    theme === "light" ? (
      <FiSun size="40"></FiSun>
    ) : (
      <FiMoon size="40" color="purple"></FiMoon>
    );

  return (
    <>
      <Reloader></Reloader>
      <div id="contents" className="App flex">
        <Sidebar></Sidebar>
        <section className="main w-full lg:ml-auto lg:mr-0 lg:px-8">
          {/* theme */}
          <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <GlobalStyle></GlobalStyle>
            <div className="btn-theme flex items-center px-4 pt-12 justify-end">
              {/* <div className="site-logo lg:hidden">
                <a href="">
                  <img src={logo} alt="PhiHuong" className=" w-24" />
                </a>
              </div> */}

              <button className="" onClick={() => themeToggler()}>
                {icon}
              </button>
            </div>
          </ThemeProvider>
          {/* end theme */}
          <Intro name="Phi Hướng Từ" work="Front-End developer"></Intro>
          <About></About>
          <Service img=""></Service>
          <Experience></Experience>
          <SoftSkill></SoftSkill>
        </section>
      </div>
    </>
  );
}

export default App;
// Some random colors
