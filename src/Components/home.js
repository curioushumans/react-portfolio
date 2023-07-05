import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Typed from "typed.js";
import TechSVG from "../Components/techsvg";
import Intros from "../design/intro-svg/introsvg";
import { motion } from "framer-motion";

const Home = () => {

  const autoTypeRef = useRef(null);

  useEffect(() => {
    var typed = new Typed(autoTypeRef.current, {
      strings: [
        "React Front-End Development, Designing, Agile Project Management, Customer Success.",
      ],
      typeSpeed: 30,
      backSpeed: 0,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen fixed">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 flex flex-col p-8 mt-10 lg:mt-20 bg-[#001129] text-teal-600">
            <h1 className="text-4xl font-bold place-content-center text-[#8d286f]">
              Hello! I'm Chaitanya,
            </h1>
            <h2 className="text-xl py-4 h-6 font-extrabold z-20">
              Expertise in: <br />
              <span style={{height: '100%', width: '100%', display: 'inline-block'}} ref={autoTypeRef}></span>
            </h2>
            <div className="flex flex-col">
              <Link
                to="/about"
                className="relative inline-block px-2 py-2 mt-32 font-medium group"
                style={{ zIndex: "20" }}
              >
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-teal-600 border-2 border-black group-hover:bg-black"></span>
                <span className="flex relative justify-center text-white  group-hover:text-white">
                  &lt;GET STARTED /&gt;
                </span>
              </Link>
              <TechSVG />
            </div>
          </div>
          <div className="md:w-1/2">
            <img
              src={require("../design/chaitanya.jpg")}
              className="object-contain"
              alt="chaitanya"
            />
          </div>
        </div>
      </motion.div>
      <Intros />
    </div>
  );
};

export default Home;
