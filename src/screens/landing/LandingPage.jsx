import React, { useState } from "react";
import Hero from "../../components/Screen/Landing/Hero";
import DocSlideFinal from "../../components/Screen/Landing/DocSlideFinal";
import School from "../../components/Screen/Landing/School";
import Convenient from "../../components/Screen/Landing/Convenient";
import Partners1 from "../../components/Screen/Landing/Partners1";
import Technology1 from "../../components/Screen/Landing/Technology1";
import Faq1 from "../../components/Screen/Landing/Faq1";
import AIPotentialSection from "../../components/Screen/Landing/AIPotentialSection";
import BlockchainAISection from "../../components/Screen/Landing/BlockchainAISection";
import AnalyticsAISection from "../../components/Screen/Landing/AnalyticsAISection";

const LandingPage = () => {
  return (
    <>
      <div className="min-h-screen bg-[#0C0C0C] text-white">
        {/* <Header /> */}
        <div className="pt-20 lg:pt-[60px]">
          <Hero />
          <div className="lg:px-0">
            <BlockchainAISection/>
            <AnalyticsAISection/>
            <DocSlideFinal />
            <School />
            <Partners1 />
            <Technology1 />
            <Convenient />
            <AIPotentialSection/>
            <Faq1 />
          </div>
        </div>
        {/* <Footer /> */}
      </div>
      {/* {isClicked && <Login handleClick={handleClick} />} */}
    </>
  );
};

export default LandingPage;
