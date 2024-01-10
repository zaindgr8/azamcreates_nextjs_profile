"use client";
import Header from "@/components/Header";
import FirstSection from "./azam/firstsection"
import Carousel from "@/components/corousel";
import FeaturesProperties from "@/components/feature-properties";
import FooterWhite from "@/components/footer-white";
import Dropdown from "@/components/form-control-two";
import Link from "next/link";
import AzamProjects from "./azam/azamprojects"
import Azamvideo from "./azam/azamvideo";
import Firstsection from "./azam/firstsection";
import Azamvision from "./azam/azamvision";
import Azamteam from "./azam/azamteam";
import Azammessage from "./azam/azammessage";
import Footer from "@/components/Footer";

export default function HomeTwo() {
  return (
    <>
      <Header />
      <FirstSection />
      <Azamvision />
      <Azamvideo />
      <AzamProjects />
      <Azamteam />
      <Azammessage />
      <Footer />
    </>
  );
}
