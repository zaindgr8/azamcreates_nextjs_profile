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
import Azampersonal from "./azam/azampersonal";
import Corousal from "../components/corousel"
import Layout from "@/components/Layout";

export default function HomeTwo() {
  return (
    <Layout>
      <FirstSection />
      <Azamvision />
      <Azamvideo />
      <div className="px-5 mt-4">
        <Corousal />
      </div>
      <AzamProjects />
      <Azamteam />
      <Azammessage />
    </Layout>
  );
}
