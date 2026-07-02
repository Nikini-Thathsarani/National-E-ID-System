import "../../styles/Home.css";
import Info from "../../components/home/Info";
import Navbar from "../../components/layout/Navbar";
import Hero from "../../components/home/Hero";
import Statistics from "../../components/home/Statistics";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Info />
      <Statistics />
    </>
  );
}

export default Home;