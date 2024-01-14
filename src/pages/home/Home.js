import React from "react";
import { useState } from "react";
import landingPageHumanSVG from "../../assets/human-thinking.svg";
import cryptoMiningBot from "../../assets/mining-bot-img.svg";

import Creator from "./components/Creator";
import Copier from "./components/Copier";

const Home = () => {
  const [activeState, setActiveState] = useState("creators");

  const changeBackgroundColor = () => {
    const coloredSections = document.querySelectorAll(".colored-section");
    coloredSections.forEach((section) => {
      if (section.getBoundingClientRect().top <= window.innerHeight) {
        document.body.style.backgroundColor = section.dataset.color;
      }
    });
  };
  window.addEventListener("load", () => {
    changeBackgroundColor();
    window.addEventListener("scroll", changeBackgroundColor);
    window.addEventListener("touchmove", changeBackgroundColor);
  });

  window.addEventListener("beforeunload", () => {
    window.removeEventListener("scroll", changeBackgroundColor);
  });
  return (
    <>
      <main className="w-full relative" onTouchMove={changeBackgroundColor}>
        <section
          data-color="black"
          className="colored-section relative w-[90%] lg:w-[70%] pt-10 md:pt-20 pb-10 m-auto text-center flex flex-col items-center justify-between gap-8 md:gap-14"
        >
          {activeState === "creators" ? (
            <div className="flex flex-col items-center justify-between gap-8 md:gap-14">
              <h1>Build Your Crypto Bot Market It At Scale</h1>
              <p className="w-full md:w-[45%]">
                The no-code builder that supports complex strategies. Build,
                test, automate and share with the community.
              </p>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-between gap-8 md:gap-14">
              <h1>Trade Crypto Like A Pro Through Automation</h1>
              <p className="w-full md:w-[45%]">
                The marketplace for crypto trading bots crafted by the community
                to help you unleash your potential.
              </p>
            </div>
          )}
          <button className="btn bg-yellow text-black">Join Us</button>
          <div className=" flex flex-row items-center justify-center">
            <button
              className={`outline-none text-start bg-transparent border-b px-3 ${
                activeState === "creators" ? "border-b-[#fff] text-yellow" : ""
              }`}
              onClick={() => setActiveState("creators")}
            >
              For Bot Creators
            </button>
            <button
              className={`outline-none text-start bg-transparent border-b px-3 ${
                activeState === "copier" ? "border-b-[#ffeb92] text-yellow" : ""
              }`}
              onClick={() => setActiveState("copier")}
            >
              For Bot Copiers
            </button>
          </div>
          <img
            src={landingPageHumanSVG}
            width={400}
            alt="svg of a human thinking something"
            className="absolute lg:bottom-[0%] lg:-left-[20%] hidden lg:block"
          />
          <img
            src={cryptoMiningBot}
            alt="crypto mining bot svg"
            className="absolute lg:top-[20%] lg:-right-[20%] hidden lg:block"
          />
        </section>
        {activeState === "creators" ? (
          <Creator />
        ) : activeState === "copier" ? (
          <Copier />
        ) : (
          ""
        )}
      </main>
    </>
  );
};

export default Home;
