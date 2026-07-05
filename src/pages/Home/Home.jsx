import "../../styles/Home.css";
import Info from "../../components/home/Info";
import Navbar from "../../components/layout/Navbar";
import Hero from "../../components/home/Hero";
import Statistics from "../../components/home/Statistics";
import Features from "../../components/home/Features";
import HowItWorks from "../../components/home/HowItWorks";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Info />
      <Statistics />
      <Features />
      <HowItWorks />
    </>
  );
}

export default Home;