"use client";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoYoutube } from "react-icons/io";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
const links = [
  { href: "/", text: "Home 1" },
  { href: "/home-2", text: "Home 2" },
  { href: "/home-3", text: "Home 3" },
  { href: "/home-3-header-dark", text: "Home 3 (Header dark)" },
  { href: "/properties-list", text: "Properties List" },
  { href: "/properties-grid", text: "Properties Grid" },
  { href: "/property-details", text: "Property Details 1" },
  { href: "/property-details-2", text: "Property Details 2" },
  { href: "/about", text: "About Us" },
  { href: "/agent-list", text: "Agents List" },
  { href: "/agent-grid", text: "Agents Grid" },
  { href: "/agent-details", text: "Agent Details" },
  { href: "/post-property", text: "Post Property" },
  { href: "/locations", text: "Locations" },
  { href: "/contact", text: "Contact Us" },
  { href: "/blog-1", text: "Blog 1" },
  { href: "/blog-2", text: "Blog 2" },
  { href: "/blog-details", text: "Blog Details" },
  { href: "/signin", text: "Sign In" },
  { href: "/signup", text: "Sign Up" },
  { href: "/forgot-password", text: "Forgot Password" },
  { href: "/two-factor-auth", text: "Two factor authentication" },
  { href: "/terms-conditions", text: "Terms & Conditions" },
  { href: "/not_found", text: "404 Page" },
  { href: "/505", text: "505 Page" },
  { href: "/style-guide", text: "Style Guide" },
];

export default function Header() {
  const [hasLogo, setHasLogo] = useState(false);
  const path = usePathname();
  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;
      if (scroll >= 81) {
        setHasLogo(true);
      } else {
        setHasLogo(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Start Topbar */}
      <div className="mb-4 d-none d-lg-block topbar-bg bg-blue-900 text-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4 col-lg-3 col-xl-4">
              <Link href="/" className="headerLogo ">
                <img src="assets/img/a2.png" className="w-[15vh]" alt="" />
              </Link>
            </div>
            <div className="col-md-8 col-lg-9 col-xl-8 d-none d-md-block">
              <div className="d-flex justify-content-end ">
                <div className="d-flex align-items-center help-info">
                  <div className="flex-shrink-0  icon"></div>
                  <Link href="https://www.facebook.com/">
                    <img src="assets/img/fb.png" className="w-[10vh]" />
                  </Link>
                </div>
                <div className="d-flex align-items-center help-info ms-4 ">
                  <Link href="https://www.instagram.com/">
                    <img src="assets/img/insta.png" className="w-[10vh]" />
                  </Link>
                </div>
                <div className="d-flex align-items-center help-info ms-4 ">
                  <Link href="https://www.youtube.com/">
                    <img src="assets/img/yt.png" className="w-[10vh]" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /.End Topbar */}

      {/* Start Navbar */}
      <div
        className={
          hasLogo
            ? "has-logo navbar-wrap sticky-top"
            : "no-logo navbar-wrap sticky-top"
        }
      >
        <div className="container-lg nav-container position-relative">
          <nav className="custom-navbar navbar navbar-expand-lg">
            {/* Start Navbar Brand */}
            <Link
              className="border-end navbar-brand pe-3 pe-sm-4 py-0"
              href="/"
            >
              {/* <img
                  className="logo-dark"
                  src="assets/img/a1.png"
                  alt=""
                /> */}
              {/* <img className="logo-white" src="assets/img/a2.png" alt="" /> */}
            </Link>
            {/* End Navbar Brand */}
            {/* Start Navbar Collapse */}

            {/*  /. End Navbar Collapse */}
            <div className="d-flex justify-between py-3 items-center  w-full">
              {/* Left-aligned ul */}
              <div>
                <ul className="text-gray-400 md:text-md text-sm  font-bold flex gap-x-5">
                  <Link href="">
                    <li>HOME</li>
                  </Link>
                  <Link href="">
                    <li>CONTACT</li>
                  </Link>
                  <Link href="">
                    <li>ABOUT</li>
                  </Link>
                  <Link href="">
                    <li>REAL ESTATE</li>
                  </Link>
                </ul>
              </div>

              {/* Right-aligned div */}
              <div className=" md:text-gray-400 text-white items-center mr-4 md:text-sm md:flex hidden">
                TOP TIER | REAL ESTATE EXPERT
              </div>
            </div>
          </nav>
        </div>
        {/* /.End of navbar */}
      </div>

      {/* /.End of navbar */}
      {/* Start Cart Empty Modal */}

      {/* /.End Cart Empty Modal */}
    </>
  );
}
