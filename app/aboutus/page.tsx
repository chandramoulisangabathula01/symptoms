/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

import Navbar from "@/components/Navbar";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white text-dark-300">
      <Navbar />
      
      <main className="container mx-auto px-4 py-12">
        <h1 className="mb-8 text-center text-4xl font-bold text-green-600">About CareConnect</h1>
        
        <div className="mb-12 flex flex-col items-center justify-center md:flex-row">
          <div className="md:w-1/2">
            <h2 className="mb-4 text-2xl font-semibold text-green-500">Our Mission</h2>
            <p className="mb-4 text-lg">
              At CareConnect, we are dedicated to providing exceptional healthcare services with compassion and innovation. Our mission is to improve the health and well-being of our community through personalized care, cutting-edge technology, and a patient-centered approach.
            </p>
          </div>
          <div className="flex justify-center md:w-1/2">
            <img src="/assets/images/doctor.png" alt="Mission" width={500} height={500} />
          </div>
        </div>
        
        <div className="mb-12 flex flex-col items-center justify-center md:flex-row-reverse">
          <div className="md:w-1/2">
            <h2 className="mb-4 text-2xl font-semibold text-green-500">Our Values</h2>
            <ul className="list-inside list-disc space-y-2 text-lg">
              <li>Patient-Centered Care</li>
              <li>Excellence in Medical Practice</li>
              <li>Integrity and Transparency</li>
              <li>Continuous Innovation</li>
              <li>Compassion and Empathy</li>
            </ul>
          </div>
          <div className="flex justify-center md:w-1/2">
            <img src="/assets/images/values.png" alt="Mission" width={500} height={500} />
          </div>
        </div>
        
        <div className="mb-12">
          <h2 className="mb-6 text-center text-3xl font-semibold text-green-500">Our Specialties</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {specialties.map((specialty, index) => (
              <div key={index} className="rounded-lg bg-green-50 p-6 shadow-md transition-all duration-300 hover:shadow-lg">
                {specialty.icon}
                <h3 className="mb-2 text-xl font-semibold">{specialty.name}</h3>
                <p>{specialty.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center">
          <Link href="/contact" className="rounded-full bg-green-500 px-8 py-3 text-white transition duration-300 hover:bg-green-600">
            Contact Us
          </Link>
        </div>
      </main>
      
      <footer className="bg-green-600 py-8 text-white">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 CareConnect. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

const specialties = [
  {
    name: "Cardiology",
    description: "Expert care for heart health and cardiovascular diseases.",
    icon: (
      <svg className="mb-4 size-12 text-green-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.5 12.5719L12 19.9999L4.5 12.5719C2.7676 10.8661 2.7676 8.13778 4.5 6.43198C6.2324 4.72618 9.0196 4.72618 10.752 6.43198L12 7.66398L13.248 6.43198C14.9804 4.72618 17.7676 4.72618 19.5 6.43198C21.2324 8.13778 21.2324 10.8661 19.5 12.5719Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: "Neurology",
    description: "Comprehensive care for neurological disorders and conditions.",
    icon: (
      <svg className="mb-4 size-12 text-green-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 18V22M8 22H16M12 6V2M12 6C14.2091 6 16 7.79086 16 10V14C16 16.2091 14.2091 18 12 18C9.79086 18 8 16.2091 8 14V10C8 7.79086 9.79086 6 12 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: "Oncology",
    description: "Advanced cancer treatments and compassionate care.",
    icon: (
      <svg className="mb-4 size-12 text-green-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

export default AboutUs;
