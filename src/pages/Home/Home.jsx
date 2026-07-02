import "../../styles/Home.css";
import Info from "../../components/home/Info";
import Navbar from "../../components/layout/Navbar";
import Hero from "../../components/home/Hero";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Info />
    </>
  );
}

export default Home;