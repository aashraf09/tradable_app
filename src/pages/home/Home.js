import React from "react";
import { useState } from "react";
import parse from "html-react-parser";
import landingPageHumanSVG from "../../assets/human-thinking.svg";
import cryptoMiningBot from "../../assets/mining-bot-img.svg";
import laptopWithCryptoMiningScreen from "../../assets/laptop-with-crypto-mining-screen.svg";
import convert_your_strategy from "../../assets/convert_your_strategy.svg";
import rent_and_earn from "../../assets/rent_and_earn.svg";
import trading_cockpit from "../../assets/trading_cockpit.svg";
import sheild_in_circle from "../../assets/sheild_in_a_circle.svg";
import tick_for_approval_right_side_img from "../../assets/tick_for_approval_right_side_img.svg";
import elevate_your_expertise_right_side_img from "../../assets/elevate_your_expertise_right_side_img.svg";
import flower_in_circle from "../../assets/flower_in_circle.svg";
import elevate_reach_card_img from "../../assets/elevate-reach-card-img.svg";
import consistent_returns_card_img from "../../assets/consistent-returns-card-img.svg";
import superior_bot_card_img from "../../assets/superior-bot-card-img.svg";
import beginner_friendly_card_img from "../../assets/beginner-friendly-card-img.svg";
import precision_tool_card_img from "../../assets/precision-tool-card-img.svg";
import all_in_one_trading_card_img from "../../assets/all-in-one-trading-card-img.svg";
import first_mover_advantage_robot_banner_img from "../../assets/first-mover-advantage-robot-banner-img.svg";
import first_mover_advantage_mobile_banner_img from "../../assets/first-mover-advantage-mobile-banner-img.svg";
import Banner from "../../components/Banner";
import Card from "../../components/Card";

const Home = () => {
  const [activeState, setActiveState] = useState("creators");
  const coloredSections = document.querySelectorAll(".colored-section");

  const changeBackgroundColor = () => {
    coloredSections.forEach((section) => {
      if (
        section.getBoundingClientRect().top <=
        window.innerHeight - document.body.scrollTop
      ) {
        coloredSections.forEach((prevSection) => {
          prevSection.style.backgroundColor = "";
        });
        section.style.backgroundColor = section.dataset.color;
        document.body.style.backgroundColor = section.dataset.color;
      }
    });
  };

  window.addEventListener("scroll", changeBackgroundColor);

  return (
    <>
      <main className="w-full relative">
        <section
          data-color="black"
          className="colored-section relative w-[90%] md:w-[70%] pt-10 md:pt-20 pb-10 m-auto text-center flex flex-col items-center justify-between gap-8 md:gap-14"
        >
          <h1>Build Your Crypto Bot Market It At Scale</h1>
          <p className="w-full md:w-[45%]">
            The no-code builder that supports complex strategies. Build, test,
            automate and share with the community.
          </p>
          <button className="btn bg-yellow text-black">Join Us</button>
          <div className=" flex flex-row items-center justify-center">
            <button
              className={`outline-none text-start bg-transparent border-b px-3 ${
                activeState === "creators" ? "border-b-[#fff] text-yellow" : ""
              }`}
            >
              For Bot Creators
            </button>
            <button
              className={`outline-none text-start bg-transparent border-b px-3 ${
                activeState === "copier" ? "border-b-[#ffeb92] text-yellow" : ""
              }`}
            >
              For Bot Copiers
            </button>
          </div>
          <img
            src={landingPageHumanSVG}
            width={400}
            alt="svg of a human thinking something"
            className="absolute bottom-[0%] -left-[20%] hidden md:block"
          />
          <img
            src={cryptoMiningBot}
            alt="crypto mining bot svg"
            className="absolute top-[20%] -right-[20%] hidden md:block"
          />
        </section>
        <section className="my-10 px-5 md:px-10 py-10 md:py-20 w-[90%] m-auto bg-purple flex flex-col md:flex-row items-center justify-start rounded-[56px] text-black ">
          <div className="w-full md:basis-[50%] flex flex-col items-start justify-between gap-5">
            <h3>
              Taking <br />
              <span className="text-purple">100 Beta Testers</span>
            </h3>
            <p>Register For Exclusive Trader Perks!</p>
            <div className="flex flex-row items-center justify-start w-full">
              <input
                type="email"
                name="email_for_beta_testing_registration"
                id="email_for_beta_testing_registration"
                className="w-[60%] md:w-[70%] py-3 px-6 my-3 rounded-l-[40px] placeholder:text-black"
                placeholder="Enter your email"
              />
              <button className="bg-yellow px-5 md:px-8 py-3 rounded-r-[40px]">
                Join Beta
              </button>
            </div>
            <h3 className="flex flex-row flex-wrap item-center justify-between gap-3 md:gap-8">
              <span className="text-purple">363</span>
              <span className="text-[40px] text-left leading-[48px]">
                Users <br /> Waitlisted
              </span>
            </h3>
          </div>
          <img
            src={laptopWithCryptoMiningScreen}
            className="md:absolute md:right-0"
            alt=""
          />
        </section>
        <section className="w-full">
          <div className="w-[90%] px-12 pt-6 md:pt-12 rounded-t-[56px] bg-light-blue m-auto">
            <h3 className="text-blue">Craft Bots,</h3>
            <h3 className="text-black">Not Code</h3>
          </div>
          <div
            data-color="#bfe8ff"
            className="colored-section w-full py-10 md:py-20 flex flex-col items-center justify-between gap-10"
          >
            <Banner
              bannerBackgroundColor="bg-blue"
              bannerContentColor="white"
              bannerMainImagePosition="left"
              bannerMainImage={convert_your_strategy}
              bannerHeading="Convert Your Strategy Into a Bot"
              bannerBulletPointIconType="check"
              bannerBulletPoints={[
                parse("<span><b>No-code</b> hassle-free bot creation </span>"),
                parse(
                  "<span><b>Over 100</b> indicators & chart patters</span>"
                ),
                parse(
                  "<span><span>Analyse & build</span>across multiple-timeframes</span>"
                ),
                parse(
                  "<span><b>Integration prioritisation.</b> Request your specific needs!</span>"
                ),
              ]}
              bannerContent={parse(
                `Want to learn more about what's in it for you if you publish your system? <br/> Check out <a href='/blog' className='underline underline-offset-4'>this</a> article in our Blog section.`
              )}
            />
            <Banner
              bannerBackgroundColor="bg-black"
              bannerContentColor="white"
              bannerMainImagePosition="right"
              bannerMainImage={rent_and_earn}
              bannerHeading="Rent and Earn"
              bannerBulletPointIconType="check"
              bannerBulletPoints={[
                parse(
                  "<span><b>Determine</b> the flat fee + earn 0.1% of the users capital</span>"
                ),
                parse(
                  "<span><b>Reach</b> subscribers at launch with early access</span>"
                ),
                parse(
                  "<span><b>Frictionless</b> for subscribers. Subscribe - Allocated - Automate</span>"
                ),
                parse(
                  "<span><b>Protection</b> of your strategy through encryption</span>"
                ),
              ]}
            />
            <Banner
              bannerBackgroundColor="bg-white"
              bannerContentColor="black"
              bannerMainImagePosition="left"
              bannerMainImage={trading_cockpit}
              bannerHeading="Your Trading Cockpit"
              bannerSubHeading="All-in-one crypto trading."
              bannerBulletPointIconType="check"
              bannerBulletPoints={[
                parse(
                  "<span><b>Connect</b> your exchange for full trading features</span>"
                ),
                parse(
                  "<span><b>Trade</b> however you'd like. Automation or manually with alerts</span>"
                ),
                parse(
                  "<span><b>Portfolio aggregation</b> for your exchanges and crypto wallets</span>"
                ),
                parse(
                  "<span><b>Non-custodial</b> so your funds remain on your exchanges</span>"
                ),
                parse(
                  "<span><b>Affiliate Program</b> to share with your network and earn</span>"
                ),
              ]}
            />
          </div>
        </section>
        <section className="w-full">
          <div className="w-[90%] px-12 pt-6 md:pt-12 rounded-t-[56px] bg-peach m-auto">
            <h3 className="text-peach">The Publisher</h3>
            <h3 className="text-black">Edge</h3>
          </div>
          <div data-color="#ffd5c4" className="colored-section w-full ">
            <div className="w-[90%] m-auto py-10 md:py-20 gap-5 md:gap-0 flex flex-col md:flex-row items-center justify-center">
              <Card
                cardBackgroundColor="bg-white"
                cardContentColor="text-black"
                cardMainImage={elevate_reach_card_img}
                cardHeading="Elevate Reach"
                cardContent="Tap into thousands of potential subscribers. Marketing is on us, ensuring a consistent influx of crypto investors ready for a bot like yours."
              />
              <Card
                cardBackgroundColor="bg-white"
                cardContentColor="text-black"
                cardMainImage={consistent_returns_card_img}
                cardHeading="Consistent Returns"
                cardContent="With subscriptions, experience steady and predictable earnings compared to the uncertainties and fluctuations inherent in trading."
              />
            </div>
            <Banner
              bannerBackgroundColor="bg-black"
              bannerContentColor="white"
              bannerMainImagePosition="right"
              bannerMainImage={tick_for_approval_right_side_img}
              bannerPrimaryImage={sheild_in_circle}
              bannerHeading="Tick for Approval"
              bannerPrimaryContent="Having your system on Tradable is a stamp of quality, elevating your reputation and trustworthiness in the crypto community!"
            />
          </div>
        </section>
        <section className="w-full">
          <div className="w-[90%] m-auto rounded-t-[56px] bg-green pt-12 px-12">
            <h3 className="text-green">The Tradable </h3>
            <h3 className="text-black">Platform Edge</h3>
          </div>
          <div data-color="#c9fff7" className="colored-section w-full">
            <div className="w-[90%] m-auto pt-10 md:pt-20 flex flex-row gap-y-10 flex-wrap items-center justify-center">
              <Card
                cardBackgroundColor="bg-dark-green"
                cardContentColor="text-white"
                cardMainImage={beginner_friendly_card_img}
                cardHeading="Beginner Friendly Automation"
                cardContent="Crafted for beginners, perfected for experts. With Tradable, even crypto newbies can effortlessly subscribe and start automating!"
              />
              <Card
                cardBackgroundColor="bg-black"
                cardContentColor="text-white"
                cardMainImage={superior_bot_card_img}
                cardHeading="Superior Bot Builder"
                cardContent="No-code builder surpasses simple DCA or GRID options. Craft sophisticated bots, turning strategies into actionable, automated systems."
              />
              <Card
                cardBackgroundColor="bg-white"
                cardContentColor="text-black"
                cardMainImage={precision_tool_card_img}
                cardHeading="Precision Tools"
                cardContent="Combat over-optimization with in-built curve fitting tools, including Monte Carlo analysis and out-of-sample testing, ensuring robustness and reliability."
              />
              <Card
                cardBackgroundColor="bg-dark-green"
                cardContentColor="text-white"
                cardMainImage={all_in_one_trading_card_img}
                cardHeading="All-in-one Trading"
                cardContent="A true all-rounder: from backtesting to automation, manual trading, and portfolio aggregation. Tailored to cater to both automated enthusiasts and manual traders."
              />
            </div>
          </div>
        </section>
        <section
          data-color="black"
          className="colored-section py-10 flex flex-col items-center justify-between gap-10 my-20"
        >
          <Banner
            bannerBackgroundColor="bg-white"
            bannerContentColor="black"
            bannerMainImagePosition="right"
            bannerMainImage={elevate_your_expertise_right_side_img}
            bannerPrimaryImage={flower_in_circle}
            bannerHeading="Elevate Your Expertise"
            bannerPrimaryContent="Our platform aims to bring your expertise to the forefront, allowing others to benefit, and in turn reward you."
            bannerBulletPointIconType="heart"
            bannerBulletPoints={[
              "Showcase your prowess",
              "Amplify your expertise",
              "Earn from your craft",
            ]}
          />
          <section className="relative w-[90%] bg-purple rounded-[56px] py-14 m-auto flex flex-col md:items-center items-start justify-center gap-5 text-left md:text-center text-black mb-20 px-5">
            <h3>
              First-mover <span className="text-purple">Advantage</span>
            </h3>
            <h4 className="w-full md:w-[50%]">
              Get in early, list your bot, and ensure it stands out when we
              unleash our marketing force!
            </h4>
            <div className="flex flex-row items-center justify-center w-full md:w-[50%] m-auto">
              <input
                type="email"
                name="email_for_beta_testing_registration"
                id="email_for_beta_testing_registration"
                className="w-[70%] py-3 px-6 my-3 rounded-l-[40px] placeholder:text-black"
                placeholder="Enter your email"
              />
              <button className="bg-yellow px-8 py-3 rounded-r-[40px]">
                Join Beta
              </button>
            </div>
            <h3 className="flex flex-row item-center justify-between gap-8">
              <span className="text-purple">363</span>
              <span className="text-[40px] text-left leading-[48px]">
                Users <br /> Waitlisted
              </span>
            </h3>
            <img
              className="absolute -right-10 -bottom-[100px] hidden md:block"
              src={first_mover_advantage_mobile_banner_img}
              alt=""
            />
            <img
              className="absolute left-4 bottom-0 hidden md:block"
              src={first_mover_advantage_robot_banner_img}
              alt=""
            />
          </section>
        </section>
      </main>
    </>
  );
};

export default Home;
