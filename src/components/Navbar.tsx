"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import HamburgerMenu from "@/components/ui/HamburgerMenu";

function Navbar() {
  const scrollToFooter = () => {
    const footer = document.getElementById("footer");
    footer?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 bg-white">
      <nav className="flex w-full items-center justify-between gap-6 px-15 py-4 lg:justify-around">
        <Link href="/" className="relative h-20 w-75 max-w-75 cursor-pointer">
          <Image
            alt="Company Logo"
            id="logo"
            src="/images/BRITS-Logo.png"
            fill
            className="object-contain"
          />
        </Link>
        <div className="flex items-center gap-2">
          <Link href="/" className="nav-item">
            Our Services
          </Link>
          <Link href="/why-choose-us" className="nav-item">
            Why Choose Us
          </Link>
          <Link href="/industries" className="nav-item">
            Industries
          </Link>
          <Link href="/tools-and-tips" className="nav-item">
            Tools & Tips
          </Link>
          <a
            className="text-BRITS-blue-dark hover:text-BRITS-blue-navbar hidden items-center rounded-3xl px-3 py-2 font-semibold text-nowrap transition-colors duration-300 hover:bg-gray-200 lg:inline-flex"
            href="/images/BRITSCapabilitiesStatement.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Capabilities Statement
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="ml-1 size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </a>

          <div className="group relative">
            <button className="text-BRITS-blue-dark hover:text-BRITS-blue-navbar hidden items-center rounded-3xl px-3 py-2 font-semibold text-nowrap transition-colors duration-300 hover:cursor-pointer hover:bg-gray-200 lg:flex">
              <span>Contact Us </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="ml-2 size-3 transition-all duration-200 group-hover:rotate-180"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </button>
            <div className="absolute hidden shadow-lg group-hover:block">
              <div className="mt-2 rounded-md bg-white p-5">
                <button
                  className="nav-item mb-2 block hover:cursor-pointer"
                  onClick={scrollToFooter}
                >
                  General/Job Inquiries
                </button>
                <Link
                  href="https://outlook.office.com/book/BRITSConnectWithUs@blueribbonitservices.llc/?ismsaljsauthenabled"
                  className="nav-item"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Bookings: Request Consultation
                </Link>
              </div>
            </div>
          </div>

          <HamburgerMenu />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
