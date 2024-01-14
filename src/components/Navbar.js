import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <nav className="bg-grey h-[96px] w-[97%] m-auto flex items-center justify-between text-white rounded-[56px] px-8 my-5">
      <div className="flex flex-row items-center justify-start gap-8">
        <img src={logo} alt="Logo" className="md:h-[64px] md:w-[64px]" />
        <div className="hidden flex-row items-center justify-between gap-5 font-semibold md:flex">
          <Link to={"/creators"}>Creators</Link>
          <Link to={"/copiers"}>Copiers</Link>
          <Link to={"/live-chart"}>Live Chart</Link>
          <Link to={"/marketplace"}>Marketplace</Link>
          <Link to={"/pricing"}>Pricing</Link>
          <Link to={"/content-hub"}>Content Hub</Link>
          <Link to={"/docs"}>Documentation</Link>
        </div>
      </div>
      <button className="btn bg-black text-white">Login</button>
    </nav>
  );
};

export default Navbar;
