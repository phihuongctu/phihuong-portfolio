import React, { useState } from "react";
import { DataSidebar } from "./DataSidebar";
import logo from "../../asset/img/logo.png";
import { FaBars } from "react-icons/fa";

function Sidebar() {
  //sidebar
  const [sideBar, setSideBar] = useState(false);
  function toggleSidebar() {
    setSideBar(!sideBar);
    console.log(sideBar);
  }
  return (
    <>
      <button
        className={sideBar ? "   fixed block mt-12  left-4 " : "  hidden "}
        onClick={toggleSidebar}
      >
        <FaBars size="32"></FaBars>
      </button>

      <section
        className={
          sideBar
            ? "   sidebar border-gray-300 transition-all w-80 px-4 pb-4 fixed border-r h-screen flex  flex-col items-center justify-between lg:flex lg:translate-x-0  lg:hidden none "
            : "    sidebar border-gray-300 transition-all w-80 px-4 pb-4 fixed border-r h-screen flex  flex-col items-center justify-between lg:flex lg:translate-x-0 "
        }
      >
        {/* logo image */}
        <div className="site-logo w-full">
          <div
            className={
              sideBar ? "menu-mobile mt-12 show" : "menu-mobile mt-12 show"
            }
          >
            <button className="  " onClick={toggleSidebar}>
              <FaBars size="32"></FaBars>
            </button>
            <div className="site-logo lg:hidden">
              <a>
                <img src={logo} alt="PhiHuong" className=" w-24" />
              </a>
            </div>
          </div>

          <a className="">
            <img src={logo} alt="PhiHuong" className="m-auto" />
          </a>
        </div>
        {/* main menu */}
        <nav>
          <ul className="">
            {DataSidebar.map(function (item, index) {
              return (
                <li className={item.cName} key={index}>
                  <a
                    href={item.path}
                    className=" font-bold py-2 block text-base "
                  >
                    {item.icon}
                    <span className="ml-4 text-text">{item.title}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
        {/* site footer */}
        <div className="footer">
          {/* copyright text */}
          <span className="copyright">© 2020 By PhiHuong</span>
        </div>
      </section>
    </>
  );
}

export default Sidebar;
