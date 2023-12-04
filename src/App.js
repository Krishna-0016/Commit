import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Landing from "./sections/Landing";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Overview from "./sections/Overview";
import Leaders from "./sections/Leaders";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";
import Gallery from "./sections/Gallery";
import Jobs from "./sections/Jobs";
import Logo from "./assets/Logo.svg";
import Spinner from "./assets/Spinner.svg";
import "./App.css";

export default function App() {
  const [loading, setLoading] = useState(false);
  const [pulseOnce, setPulseOnce] = useState(false);
  const PreLoading = () => {
    return (
      <motion.div
        initial={{ opacity: 0  }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0}}
        className="w-full Center flex-col h-screen Light_Gradient_Background"
      >
        <img src={Logo} width={250} alt="Logo" />
      </motion.div>
    );
  };
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <PreLoading />
      ) : (
        <>
          <Navbar />
          <Landing />
          <Overview />
          <Leaders />
          <Testimonials />
          <Jobs />
          <Gallery />
          <Contact />
          <Footer />
        </>
      )}
    </>
  );
}
