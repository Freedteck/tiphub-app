import type { NextPage } from "next";
import Benefit from "~~/components/Benefit";
import CallToAction from "~~/components/Cta";
import Features from "~~/components/Features";
import Hero from "~~/components/Hero";
import HowItWorks from "~~/components/HowItWorks";

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <Benefit />
      <CallToAction />
    </>
  );
};

export default Home;
