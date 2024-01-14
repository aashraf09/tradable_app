import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faSquareFacebook,
  faSquareXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import logo from "../assets/logo.svg";

const Footer = () => {
  return (
    <>
      <footer className="w-[90%] m-auto flex flex-col md:flex-row items-center md:items-start justify-between py-10 md:py-20 gap-20 px-10 border-t border-t-slate-400">
        {/* logo section */}
        <section className="flex flex-col items-center gap-5 justify-center">
          <img src={logo} alt="logo" />
          <h4 className="text-center">Trade Effortlessly Simplify Life</h4>
        </section>
        {/* links section */}
        <section className="w-full flex flex-col md:flex-row items-center text-center md:items-start justify-between gap-10 md:gap-5">
          {/* column 1 */}
          <div className="flex flex-col items-center md:items-start justify-between gap-5">
            <Link to={"/"}>About Us</Link>
            <Link to={"/"}>Blog</Link>
            <Link to={"/"}>FAQ</Link>
            <Link to={"/"}>Media Kit</Link>
          </div>
          {/* column 2 */}
          <div className="flex flex-col items-center md:items-start justify-between gap-5">
            <Link to={"/"}>Support</Link>
            <Link to={"/"}>T&Cs</Link>
            <Link to={"/"}>Privacy Policy</Link>
            <Link to={"/"}>Disclaimer</Link>
          </div>
          {/* column 3, social icons */}
          <div className="flex flex-col items-center md:items-start justify-between gap-5">
            <Link to={"/"}>
              <FontAwesomeIcon className="w-8 h-8" icon={faSquareFacebook} />
            </Link>
            <Link to={"/"}>
              <FontAwesomeIcon className="w-8 h-8" icon={faSquareXTwitter} />
            </Link>
            <Link to={"/"}>
              <FontAwesomeIcon className="w-8 h-8" icon={faLinkedin} />
            </Link>
          </div>
        </section>
      </footer>
    </>
  );
};

export default Footer;
