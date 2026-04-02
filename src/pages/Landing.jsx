import Home from "../Components/Home";
import About from "../Components/About";
import Navbar from "../Components/Navbar";
import Product from "../Components/Product";
import Strength from "../Components/Strength";
import Benefits from "../Components/Benefits";
import Footer from "../Components/Footer";
import Frame3 from "../Components/Frame3";

const Landing = () => {
  return (
    <div className="flex flex-col w-[1440px] items-start bg-white">
      <Navbar />
      <Home />
      <Strength />
      <About />
      <Product />
      <Benefits />
      <Frame3/>
      <Footer/>
    </div>
  );
};

export default Landing;
