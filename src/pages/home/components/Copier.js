import React from "react";
import parse from "html-react-parser";
import rent_and_earn from "../../../assets/rent_and_earn.svg";
import trading_cockpit from "../../../assets/trading_cockpit.svg";
import reliable_card_yellow_sheild from "../../../assets/reliable_card_yellow_sheild.svg";
import flower_in_circle from "../../../assets/flower_in_circle.svg";
import precision_tool_card_img from "../../../assets/precision-tool-card-img.svg";
import all_in_one_trading_card_img from "../../../assets/all-in-one-trading-card-img.svg";
import first_mover_advantage_robot_banner_img from "../../../assets/first-mover-advantage-robot-banner-img.svg";
import first_mover_advantage_mobile_banner_img from "../../../assets/first-mover-advantage-mobile-banner-img.svg";
import copier_section_mobile_stack from "../../../assets/copier_section_mobile_stack.svg";
import yoga_emoji from "../../../assets/yoga_emoji.svg";
import person_doing_yoga from "../../../assets/person_doing_yoga.svg";
import open_market_card_img from "../../../assets/open_marketplace_card_img.svg";
import person_holding_laptop from "../../../assets/person_holding_laptop.svg";
import financial_freedom_banner_img from "../../../assets/financial_freedom_banner_img.svg";
import Banner from "../../../components/Banner";
import Card from "../../../components/Card";

const Copier = () => {
  return (
    <>
      <section className="my-5 lg:my-10 px-5 md:px-10 py-10 md:py-20 w-[90%] m-auto bg-purple flex flex-col gap-10 lg:flex-row items-center justify-start rounded-[56px] text-black ">
        <div className="w-full lg:basis-[50%] flex flex-col items-start justify-between gap-5">
          <h3>
            <span className="text-purple">Waitlist</span>
            <br />
            For Early Access
          </h3>
          <p>Be Among the First to Know When We Launch!</p>
          <div className="flex flex-row items-center justify-start w-full">
            <input
              type="email"
              name="email_for_beta_testing_registration"
              id="email_for_beta_testing_registration"
              className="w-[60%] md:w-[70%] py-3 px-6 my-3 rounded-l-[40px] placeholder:text-black"
              placeholder="Enter your email"
            />
            <button className="bg-yellow px-5 md:px-8 py-3 rounded-r-[40px]">
              Register
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
          src={copier_section_mobile_stack}
          className="lg:absolute lg:right-0"
          alt=""
        />
      </section>
      <section className="w-full">
        <div className="w-[90%] text-black px-12 pt-6 md:pt-12 rounded-t-[56px] bg-light-blue m-auto">
          <h3 className="text-blue">Profit</h3>
          <h3 className="text-black">While You Sleep</h3>
          <p>
            The crypto market is churning 24/7! <br /> Take advantage of trading
            bots created by the community <br /> and vetted by us.
          </p>
        </div>
        <div
          data-color="#bfe8ff"
          className="colored-section w-full py-10 md:py-20 flex flex-col items-center justify-between gap-10"
        >
          <Banner
            bannerBackgroundColor="bg-blue"
            bannerContentColor="white"
            bannerMainImagePosition="left"
            bannerMainImage={rent_and_earn}
            bannerHeading="Subscribe & Automate"
            bannerPrimaryContent="It's really that simple!"
            bannerBulletPointIconType="check"
            bannerBulletPoints={[
              parse(
                "<span><b>Plug</b> into your preferred exchange (your funds remain there) </span>"
              ),
              parse(
                "<span><b>Choose</b> your bot with the aid of transparent performance metrics</span>"
              ),
              parse(
                "<span><span>Select</span>the crypto asset you’d like to trade + an amount</span>"
              ),
              parse(
                "<span><b> Automation Complete!</b> Your bot will execute orders on your exchange</span>"
              ),
            ]}
            bannerContent={parse(
              `Interested in creating your own bot? <br/> Check out <a href='/blog' className='underline underline-offset-4'>Click Here</a>`
            )}
          />
          <Banner
            bannerBackgroundColor="bg-black"
            bannerContentColor="white"
            bannerMainImagePosition="right"
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
          <h3 className="text-peach">The Trading System</h3>
          <h3 className="text-black">Edge</h3>
        </div>
        <div data-color="#ffd5c4" className="colored-section w-full ">
          <div className="w-[90%] m-auto py-10 md:py-20 gap-5 lg:gap-0 flex flex-col lg:flex-row items-center justify-center">
            <Card
              cardBackgroundColor="bg-dark-peach"
              cardContentColor="text-black"
              cardMainImage={precision_tool_card_img}
              cardHeading="Automated"
              cardContent="Trade non-stop with fully automated systems, never miss a trade, and gain more leisure time."
            />
            <Card
              cardBackgroundColor="bg-black"
              cardContentColor="text-white"
              cardMainImage={reliable_card_yellow_sheild}
              cardHeading="Reliable"
              cardContent="Algorithms function like clockwork, ensuring consistent trade executions every time."
            />
          </div>
          <Banner
            bannerBackgroundColor="bg-white"
            bannerContentColor="black"
            bannerMainImagePosition="right"
            bannerMainImage={person_doing_yoga}
            bannerPrimaryImage={yoga_emoji}
            bannerHeading="Emotionless"
            bannerPrimaryContent="Cut out emotional errors and reduce market-monitoring stress. Almost as good as a stress-free experience!"
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
              cardBackgroundColor="bg-white"
              cardContentColor="text-black"
              cardMainImage={open_market_card_img}
              cardHeading="Open Marketplace"
              cardContent="Explore a wide array of trading bots created by the community and utilise advanced reports for informed decision making."
            />
            <Card
              cardBackgroundColor="bg-dark-green"
              cardContentColor="text-white"
              cardMainImage={person_holding_laptop}
              cardHeading="Quality & Complexity"
              cardContent="Move beyond typical DCA and Grid bots. No-code builder empowers traders to deploy complex strategies effortlessly for maximum advantage."
            />
            <Card
              cardBackgroundColor="bg-dark-green"
              cardContentColor="text-white"
              cardMainImage={precision_tool_card_img}
              cardHeading="Vetting"
              cardContent="Bots must pass Tradable's criteria to enter and remain within the marketplace. Receive alerts if your bots are underperforming."
            />
            <Card
              cardBackgroundColor="bg-black"
              cardContentColor="text-white"
              cardMainImage={all_in_one_trading_card_img}
              cardHeading="Transparent"
              cardContent="Unlike competitors, our bots are benchmarked against BTC/USD, 
ensuring genuine, fair performance comparisons."
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
          bannerMainImage={financial_freedom_banner_img}
          bannerPrimaryImage={flower_in_circle}
          bannerHeading="Financial Freedom"
          bannerPrimaryContent="It is our mission to help people find financial freedom through strategic automated crypto investing. Our desire is to get you back doing: "
          bannerBulletPointIconType="heart"
          bannerBulletPoints={[
            "What you're good at",
            "What you've always wanted to do",
            "What you love to do",
          ]}
        />
        <section className="relative w-[90%] bg-purple rounded-[56px] py-14 m-auto flex flex-col md:items-center items-start justify-center gap-5 text-left md:text-center text-black mb-20 px-5">
          <h3>
            Fancy Being an <br />
            <span className="text-purple">Early Adopter</span>
          </h3>
          <h4 className="w-full md:w-[50%]">
            Our beta testers get the opportunity of using the platform before
            everyone!
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
              Register
            </button>
          </div>
          <h3 className="flex flex-row flex-wrap gap-2 item-center justify-between md:gap-8">
            <span className="text-purple">363</span>
            <span className="text-[40px] text-left leading-[48px]">
              Users <br /> Waitlisted
            </span>
          </h3>
          <div className="flex flex-row items-center justify-between w-full m-auto">
            <img
              className="lg:absolute lg:left-4 lg:bottom-0 hidden md:block"
              src={first_mover_advantage_robot_banner_img}
              alt=""
            />
            <img
              className="lg:absolute lg:-right-10 lg:-bottom-[100px] hidden md:block"
              src={first_mover_advantage_mobile_banner_img}
              alt=""
            />
          </div>
        </section>
      </section>
    </>
  );
};

export default Copier;
