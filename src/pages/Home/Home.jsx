import "../../styles/Home.css";
import Info from "../../components/home/Info";
import Navbar from "../../components/layout/Navbar";
import Hero from "../../components/home/Hero";
import Statistics from "../../components/home/Statistics";
import Features from "../../components/home/Features";
import HowItWorks from "../../components/home/HowItWorks";
import Security from "../../components/home/Security";
import Benefits from "../../components/home/Benefits";
import FAQ from "../../components/home/FAQ";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Info />
      <Statistics />
      <Features />
      <HowItWorks />
      <Security />
      <Benefits />
      <FAQ />
    </>
  );
}

export default Home;