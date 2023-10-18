"use client";
import { useState } from "react";
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link className="z-50" href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map(({ href, label, key }) => (
          <Link
            href={href}
            key={key}
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {label}
          </Link>
        ))}
      </ul>

      {/* Mobile menu */}
      <div className={`lg:hidden  ${isMobileMenuOpen ? "block" : "hidden"} `}>
        <div
          className={`bg-white p-4 shadow-md absolute top-0 left-0 w-full pt-16`}
        >
          {/* Your mobile navigation links */}
          {NAV_LINKS.map(({ href, label, key }) => (
            <Link
              href={href}
              key={key}
              className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
            >
              {label}
            </Link>
          ))}
          <p className="font-bold border-t-2 text-center pt-2">
            Putuk Truno Camp Area
          </p>
        </div>
      </div>

      <div className="lg:flexCenter hidden">
        <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>

      <Image
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden z-50"
        onClick={toggleMobileMenu}
      />
    </nav>
  );
};

export default Navbar;
