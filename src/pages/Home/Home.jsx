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
import About from "../../components/home/About";
import Footer from "../../components/layout/Footer";



function Home() {
  return (
    <>
    
      <Hero />
      <Info />
      <Statistics />
      <Features />
      <About />
      <HowItWorks />
      <Security />
      <Benefits />
      <FAQ />
       <Footer /> 
    </>
  );
}

export default Home;