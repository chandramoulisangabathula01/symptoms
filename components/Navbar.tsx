/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable tailwindcss/no-custom-classname */
import Link from "next/link";
import React from "react";



const Navbar = () => {

  return (
    <nav className="bg-green-500 p-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="/assets/icons/logo-full.png"
              height={60}
              width={60}
              alt="CareConnect Logo"
            />
            <div className="ml-1">
              <h1 className="text-xl font-bold text-white">CareConnect</h1>
              {/* <h2 className="text-xl text-white">Symptom Checker</h2> */}
            </div>
          </div>
          <div className="space-x-4">
            <Link href="/" className="text-white hover:text-dark-300">Home</Link>
            <Link href="/login" className="text-white hover:text-dark-300">Login</Link>
            <Link href="/aboutus" className="text-white hover:text-dark-300">About</Link>
            <Link href="/contact" className="text-white hover:text-dark-300">Contact</Link>
            <Link href="/admin" className="text-white hover:text-dark-300">Admin</Link>
          </div>
        </div>
      </nav>
  );
};

export default Navbar;
