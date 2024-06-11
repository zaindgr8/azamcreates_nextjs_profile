"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { PiFacebookLogoFill } from "react-icons/pi";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { AiFillYoutube } from "react-icons/ai";
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
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div className="d-none d-lg-block topbar-bg bg-gray-800 text-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4 col-lg-3 col-xl-4">
              <Link href="/" className="headerLogo">
                <img
                  className="h-[20vh] mb-4"
                  src="assets/img/a5a.png"
                  alt=""
                />
              </Link>
            </div>
            <div className="col-md-8 col-lg-9 col-xl-8 d-flex justify-content-end align-items-center">
              <PiFacebookLogoFill className="w-[4vh] h-[4vh] ms-4" />
              <BiLogoInstagramAlt className="w-[4vh] h-[4vh] ms-4" />
              <AiFillYoutube className="w-[4vh] h-[4vh] ms-4" />
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          hasLogo
            ? "has-logo navbar-wrap sticky-top"
            : "no-logo navbar-wrap sticky-top"
        }
      >
        <div className="container-lg nav-container position-relative">
          <nav className="custom-navbar navbar navbar-expand-lg">
            <Link
              className=" border-end navbar-brand pe-3 pe-sm-4 py-0"
              href="/"
            >
              <img className="logo-dark" src="assets/img/a5a.png" alt="" />
              <img className="logo-white" src="assets/img/a5a.png" alt="" />
            </Link>
            <div className="d-flex gap-1 ms-lg-5">
              <Link
                href="/"
                data-bs-toggle="modal"
                data-bs-target="#cartEmpty"
                className="align-items-center btn cart-button d-none d-xl-flex ms-2 ms-lg-0"
              >
                <span className="ms-2 text-gray-800 text-md">
                  Premium Real Estate Consultant
                </span>
              </Link>
              <Link
                href="/"
                className="btn btn-primary d-none d-sm-inline-block d-xl-none"
              >
              </Link>         
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
