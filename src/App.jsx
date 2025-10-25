import { ToastContainer } from "react-toastify";
import Navbar from "./Components/Navbar";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import LogoShowcase from "./sections/LogoShowcase";
import Showcase from "./sections/Showcase";
import TechStack from "./sections/TechStack";

const App = () => {
  return (
    <>
      <ToastContainer />
      <Navbar />
      <Hero />
      <Showcase />
      <LogoShowcase />
      <TechStack />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
