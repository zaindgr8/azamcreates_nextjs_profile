import Dropdown from "@/components/form-control-two";
import Image from "next/image";
import React, { useEffect } from "react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const slides = [
  {
    image: "/azm_b2.jpeg",
  
  },
  // {
  //   image: "/senior2.jpg",
    
  // },
  // {
  //   image: "/senior3.jpg",

  // },s
];


const FSection = () => {

   const [slideIndex, setSlideIndex] = useState(0);

   useEffect(() => {
     const intervalId = setInterval(() => {
       setSlideIndex((prevSlideIndex) => (prevSlideIndex + 1) % slides.length);
     }, 5000);

     return () => clearInterval(intervalId);
   }, []);


  return (
    <>
      <div className="align-items-center d-flex hero-header hero-header__two overflow-hidden position-relative">
        <AnimatePresence mode="wait">
          {slides.map((slide, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{
                opacity: slideIndex === index ? 1 : 0,
                transition: { duration: 0.5, ease: "easeInOut" },
              }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 object-cover"
            >
              {/* <Image src={slide.image} className="object-cover" layout="fill" alt={slide.text} /> */}
              <Image
                src="/azm.jpeg"
                className="object-cover"
                layout="fill"
                alt={slide.text}
              />
            </motion.div>
          ))}
        </AnimatePresence>
        {/* Start Oblique */}
        <div className="">
          {/* <img
            src="assets/img/senior1.jpeg"
            alt=""
            className="h-100 object-fit-cover position-absolute w-100 oblique-image top-0"
          /> */}
          {/* <video
            autoPlay
            muted
            loop
            src="assets/img/Website.mp4"
            className="h-100 object-fit-cover position-absolute w-100 oblique-image top-0"
          /> */}
          {/* <Slideshow className="h-100 object-fit-cover position-absolute w-100 oblique-image top-0" /> */}
        </div>

        {/* /.End Oblique */}
        <div className="container text-center flex items-center justify-center position-relative">
          <div>
            <div>
              {/* <p class="title-sm">BEAT TRAFFIC JAMS AND CLINIC QUEUES.</p> */}
              {/* <div className=" #DAB852 w-[35vh] font-bold text-white d-inline-block fw-medium mb-5 text-lg rounded-pill section-header__subtitle text-capitalize">
                Cresco Real Estate
              </div> */}
              <h1 className=" hero-header_title text-white fw-bold mb-5 text-5xl leading-[8vh]"></h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FSection;
