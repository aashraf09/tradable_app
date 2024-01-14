import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import close_btn_cross_sign from "../assets/close-btn-cross.svg";
import responsive_nav_toggle_btn from "../assets/responsive-nav-toggle-btn.svg";

const Navbar = () => {
  const toggleNavbar = () => {
    document.getElementById("mobileNav").classList.toggle("hidden");
    document.getElementById("mobileNav").classList.toggle("slide-right");
  };

  var prevScrollpos = window.scrollY;
  window.onscroll = function () {
    var currentScrollPos = window.scrollY;
    if (currentScrollPos === 0) {
      document.getElementById("navContent").classList.remove("fixed");
    }
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navContent").style.top = "0";
      document.getElementById("navContent").classList.add("slide-up");
    } else {
      document.getElementById("navContent").style.top = "-150px";
      document.getElementById("navContent").classList.remove("slide-up");
    }
    prevScrollpos = currentScrollPos;
  };

  return (
    <nav className="relative">
      <div
        id="navContent"
        className="left-[1.5%] bg-grey h-[80px] md:h-[96px] w-[97%] m-auto flex items-center justify-between text-white rounded-[56px] px-8 my-5 z-50"
      >
        <div className="flex flex-row items-center justify-start gap-8">
          <img src={logo} alt="Logo" className="md:h-[64px] md:w-[64px]" />
          <div className="hidden flex-row items-center justify-between gap-5 font-semibold lg:flex">
            <Link to={"/creators"}>Creators</Link>
            <Link to={"/copiers"}>Copiers</Link>
            <Link to={"/live-chart"}>Live Chart</Link>
            <Link to={"/marketplace"}>Marketplace</Link>
            <Link to={"/pricing"}>Pricing</Link>
            <Link to={"/content-hub"}>Content Hub</Link>
            <Link to={"/docs"}>Documentation</Link>
          </div>
        </div>
        <button className="btn bg-black text-white hidden lg:flex">
          Login
        </button>
        <button className=" text-white flex lg:hidden">
          <img src={responsive_nav_toggle_btn} alt="" onClick={toggleNavbar} />
        </button>
        {/* mobile navbar */}
        <div
          id="mobileNav"
          className="hidden flex-col gap-5 items-center justify-between w-full min-h-screen rounded-[40px] px-10 py-20 border border-yellow-100 absolute top-0 left-0 lg:hidden z-50 bg-black text-white tracking-wider text-lato"
        >
          <button
            className="bg-white rounded-full p-3 absolute right-8 top-16"
            onClick={toggleNavbar}
          >
            <img
              src={close_btn_cross_sign}
              alt=""
              className="h-[24px] w-[24px]"
            />
          </button>
          <div className="flex flex-col items-start justify-between gap-8 font-bold w-full">
            <Link to={"/creators"}>Creators</Link>
            <Link to={"/copiers"}>Copiers</Link>
            <Link to={"/live-chart"}>Live Chart</Link>
            <Link to={"/marketplace"}>Marketplace</Link>
            <Link to={"/pricing"}>Pricing</Link>
            <Link to={"/content-hub"}>Content Hub</Link>
            <Link to={"/docs"}>Documentation</Link>
            <Link to={"/docs"} className="w-full py-4 border-t border-b">
              Documentation
            </Link>
            <button className="bg-yellow w-full px-5 py-3 rounded-[40px] font-bold text-black">
              Join Beta
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
