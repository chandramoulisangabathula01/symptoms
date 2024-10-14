/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable tailwindcss/no-custom-classname */
import Link from "next/link";
import React from "react";

// import DHIlab from "./DHIlab/DHIlab";

const Navbar = () => {

  return (
    // <div id="Navbar">
    //   <div class="usa-overlay"></div>
    //   <header class="usa-header usa-header--basic usa-header--megamenu padding-bottom-4 padding-top-6">
    //     <div class="usa-nav-container">
    //       <div class="usa-navbar">
    //         <div class="usa-logo margin-0" id="basic-mega-logo">
    //           <em class="usa-logo__text">
    //             <div className="display-flex align-items-center flex-row">
    //               <DHIlab />
    //               <h3 className="display-inline-block padding-left-1">Symptom Checker</h3>
    //             </div>
    //           </em>
    //         </div>
    //       </div>
    //     </div>
    //   </header>
    // </div>
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
