"use client";
/* eslint-disable tailwindcss/no-contradicting-classname */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable tailwindcss/no-custom-classname */
// import Image from "next/image";
// import Link from "next/link";

// import { PatientForm } from "@/components/forms/PatientForm";
// import { PasskeyModal } from "@/components/PasskeyModal";

// const Home = ({ searchParams }: SearchParamProps) => {
//   const isAdmin = searchParams?.admin === "true";

//   return (

//     <div className="flex h-screen max-h-screen">
//       {isAdmin && <PasskeyModal />}

//       <section className="remove-scrollbar container my-auto">
//         <div className="sub-container max-w-[496px]">
//           <Image
//             src="/assets/icons/logo-full.png"
//             height={128}
//             width={128}
//             alt="patient"
            
//           />
          

//           <PatientForm />

//           <div className="text-14-regular mt-20 flex justify-between">
//             <p className="justify-items-end text-dark-600 xl:text-left">
//               © 2024 CareConnect
//             </p>
//             <Link href="/?admin=true" className="text-green-500">
//               Admin
//             </Link>
//           </div>
//         </div>
//       </section>

//       <Image
//         src="/assets/images/onboarding-img.png"
//         height={1000}
//         width={1000}
//         alt="patient"
//         className="side-img max-w-[50%]"
//       />
//     </div>
//   );
// };

// export default Home;



// import Image from "next/image";
// import Link from "next/link";

// import { PatientForm } from "@/components/forms/PatientForm";
// import { PasskeyModal } from "@/components/PasskeyModal";

// const Home = ({ searchParams }: SearchParamProps) => {
//   const isAdmin = searchParams?.admin === "true";

//   return (

//     <div className="flex h-screen max-h-screen">
//       {isAdmin && <PasskeyModal />}

//       <section className="remove-scrollbar container my-auto">
//         <div className="sub-container max-w-[496px]">
//           <Image
//             src="/assets/icons/logo-full.png"
//             height={128}
//             width={128}
//             alt="patient"
            
//           />
          

//           <PatientForm />

//           <div className="text-14-regular mt-20 flex justify-between">
//             <p className="justify-items-end text-dark-600 xl:text-left">
//               © 2024 CareConnect
//             </p>
//             <Link href="/?admin=true" className="text-green-500">
//               Admin
//             </Link>
//           </div>
//         </div>
//       </section>

//       <Image
//         src="/assets/images/onboarding-img.png"
//         height={1000}
//         width={1000}
//         alt="patient"
//         className="side-img max-w-[50%]"
//       />
//     </div>
//   );
// };

// export default Home;



// import Image from "next/image";
import Link from "next/link";

import Navbar from "@/components/Navbar";
import { PasskeyModal } from "@/components/PasskeyModal";
// import { LayoutGrid } from "lucide-react";
import { LayoutGrid } from "@/components/ui/layout-grid";

const Home = ({ searchParams }: SearchParamProps) => {
  const isAdmin = searchParams?.admin === "true";
  return (
    
      <div className="min-h-screen bg-white text-dark-300">
              {isAdmin && <PasskeyModal />}

      <Navbar />
      <section className="hero bg-gradient-to-br from-gray-100 to-white pb-10">
      <style jsx>{`
        {
          background-color: #E5D9F2;
        }
      `}</style>
      <div className="container mx-auto ">
        <div className="flex flex-col lg:flex-row">
          <div className="mb-10 mt-12 flex flex-col items-start rounded-3xl bg-gradient-to-br  sm:px-6 lg:mb-0 lg:w-1/2 ">
            <p className="sm:text-md mb-4 text-left text-sm font-semibold uppercase leading-tight text-green-700 lg:text-lg">Simplified Living, Elevated Experiences</p>
            <h1 className="text-brand-primary mb-6 text-left text-3xl font-bold sm:text-4xl lg:text-5xl lg:leading-tight xl:text-6xl">Get Care at Your Fingertips</h1>
            <p className="sm:text-md mb-8 text-left text-sm text-gray-400 lg:py-4 lg:text-xl">Simplified, reliable, and professional {'->'} just a Click away.</p>

            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Link href="/login" className="inline-flex items-center justify-center rounded-md border border-transparent bg-black px-6 py-3 text-base font-medium text-white shadow-md transition-all duration-300 hover:scale-105 hover:bg-gray-800 sm:px-8 sm:py-4 sm:text-lg">
                Book Appointment
              </Link>
              <Link href="/symptomchecker" className="inline-flex items-center justify-center rounded-md border-2 border-black bg-transparent bg-white px-6 py-3 text-base font-medium text-black transition-all duration-200 ease-in-out hover:scale-105 hover:border-green-500 sm:px-8 sm:py-4 sm:text-lg">
                Symptom Checker
              </Link>
            </div>
          
            {/* <div className="mt-12 flex justify-center items-center w-full">
              <Link href="/demo" className="inline-flex items-center px-8 sm:px-16 lg:px-44 py-3 border border-transparent text-sm sm:text-base font-medium rounded-full shadow-sm text-white bg-black hover:bg-gray-300 transition-all duration-300 transform hover:scale-105">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Watch our demo video
              </Link>
            </div> */}
          </div>
          <div className="hidden lg:block lg:w-1/2">
            <LayoutGridDemo />
          </div>
          <div className="w-full sm:w-1/2 lg:hidden">
            <video className="h-auto w-full" autoPlay loop muted playsInline>
              <source src="/videos/ProChefClip.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
      {/* Navigation */}
      {/* <nav className="bg-green-500 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Image
          src="/assets/icons/logo-full.png"
          height={40}
          width={40}
          alt="CareConnect Logo"
        />
        <div className="space-x-4">
          <Link href="/login" className="text-white hover:text-dark-300">Login</Link>
          <Link href="/about" className="text-white hover:text-dark-300">About</Link>
          <Link href="/contact" className="text-white hover:text-dark-300">Contact</Link>
          <Link href="/?admin=true" className="text-white hover:text-dark-300">Admin</Link>
        
        </div>
      </div>
    </nav> */}

    {/* Hero Section */}
    <header className="bg-green-100 py-20">
      <div className=" flex  h-fit flex-col items-center justify-center">
        <h1 className="mb-4 text-4xl font-bold">Welcome to CareConnect</h1>
        <p className="mb-8 text-xl">Your Health, Our Priority</p>
        <div className="space-x-4">
          <Link href="/login" className="rounded-full bg-green-500 px-6 py-3 text-white transition duration-300 hover:bg-green-600">Book Appointment</Link>
          <Link href="/symptomchecker" className="rounded-full bg-blue-500 px-6 py-3 text-white transition duration-300 hover:bg-blue-600">Symptom Checker</Link>
        </div>
      </div>
    </header>

    {/* Features Section */}
    <section className="py-16">
      <div className="container mx-auto">
        <h2 className="mb-12 text-center text-3xl font-bold">Our Services</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="text-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto mb-4 size-16 text-green-500" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <h3 className="mb-2 text-xl font-semibold">Expert Doctors</h3>
            <p>Consult with our experienced medical professionals</p>
          </div>
          <div className="text-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto mb-4 size-16 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z" clipRule="evenodd" />
            </svg>
            <h3 className="mb-2 text-xl font-semibold">Modern Facilities</h3>
            <p>State-of-the-art equipment for accurate diagnosis</p>
          </div>
          <div className="text-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto mb-4 size-16 text-red-500" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
            </svg>
            <h3 className="mb-2 text-xl font-semibold">Patient Care</h3>
            <p>Personalized care and support for every patient</p>
          </div>
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="bg-green-500 py-16">
      <div className=" text-center">
        <h2 className="mb-4 text-3xl font-bold text-white">Ready to Take Control of Your Health?</h2>
        <p className="mb-8 text-white">Book an appointment today and start your journey to better health.</p>
        <Link href="/book-appointment" className="rounded-full bg-white px-8 py-3 text-green-500 transition duration-300 hover:bg-gray-100">Book Now</Link>
      </div>
    </section>

    {/* Footer */}
    <footer className="bg-dark-300 py-8 text-white">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 CareConnect. All rights reserved.</p>
      </div>
    </footer>
  </div>

  
    
  );
}

export default Home;


function LayoutGridDemo() {
  return (
    <div className="mt-6 h-[50vh] w-full sm:h-[60vh] lg:h-[80vh] lg:w-[90vh]">
      <LayoutGrid cards={cards} />
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div>
     
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      
    </div>
  );
};

const SkeletonThree = () => {
  return (
    <div>
      
    </div>
  );
};

const SkeletonFour = () => {
  return (
    <div>
      
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    video: "/assets/videos/greenVideo.mp4",
    thumbnail: "",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    // video: "",
    thumbnail: "/assets/images/4.png",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail: "/assets/images/3.png",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    video: "/assets/videos/blueVideo.mp4",    thumbnail: "",
  },
];
