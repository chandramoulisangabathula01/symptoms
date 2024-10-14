/* eslint-disable react/no-unescaped-entities */
/* eslint-disable tailwindcss/no-custom-classname */
// import Link from "next/link";

import Navbar from "@/components/Navbar";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white text-dark-300">
      <Navbar />
      
      <main className="container mx-auto px-4 py-12">
        <h1 className="mb-8 text-center text-4xl font-bold text-green-600">Contact Us</h1>
        
        <div className="mb-12 flex flex-col items-center justify-center md:flex-row">
          <div className="pr-8 md:w-1/2">
            <h2 className="mb-4 text-2xl font-semibold text-green-500">Get in Touch</h2>
            <p className="mb-4 text-lg">
              We're here to help and answer any question you might have. We look forward to hearing from you.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <svg className="mr-3 size-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Malla reddy hospital , hyderabad , telangana , india</span>
              </div>
              <div className="flex items-center">
                <svg className="mr-3 size-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+91 9999999999</span>
              </div>
              <div className="flex items-center">
                <svg className="mr-3 size-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>info@careconnect.com</span>
              </div>
            </div>
          </div>
          <div className="mt-8 md:mt-0 md:w-1/2">
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input type="text" id="name" name="name" className="border-dark-100  mt-2 block w-full rounded-md bg-gray-200 text-white shadow-sm focus:border-green-500 focus:ring-green-500" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" id="email" name="email" className="border-dark-100  mt-2 block w-full rounded-md bg-gray-200 text-white shadow-sm focus:border-green-500 focus:ring-green-500" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea id="message" name="message" rows={4} className="border-dark-100  mt-2 block w-full rounded-md bg-gray-200 text-white shadow-sm focus:border-green-500 focus:ring-green-500"></textarea>
              </div>
              <div>
                <button type="submit" className="inline-flex justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
        
        {/* <div className="mt-12">
          <h2 className="mb-4 text-center text-2xl font-semibold text-green-500">Our Location</h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2167934985!2d-73.98731668459473!3d40.74844097932847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1645518292727!5m2!1sen!2sus" 
              width="100%" 
              height="450" 
              style={{border:0}} 
              allowFullScreen="" 
              loading="lazy"
            ></iframe>
          </div>
        </div> */}
      </main>
      
      <footer className="mt-12 bg-green-600 py-8 text-white">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 CareConnect. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default ContactPage;
