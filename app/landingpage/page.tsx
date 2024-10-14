// /* eslint-disable tailwindcss/classnames-order */
// import Image from "next/image";
// import Link from "next/link";

// const LandingPage = () => {
//   return (
//     <div className="min-h-screen bg-white text-dark-300">
//       {/* Navigation */}
//       <nav className="bg-green-500 p-4">
//         <div className="container mx-auto flex items-center justify-between">
//           <Image
//             src="/assets/icons/logo-full.png"
//             height={40}
//             width={40}
//             alt="CareConnect Logo"
//           />
//           <div className="space-x-4">
//             <Link href="/login" className="text-white hover:text-dark-300">Login</Link>
//             <Link href="/about" className="text-white hover:text-dark-300">About</Link>
//             <Link href="/contact" className="text-white hover:text-dark-300">Contact</Link>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <header className="bg-green-100 py-20">
//         <div className=" items-center  flex flex-col justify-center h-fit">
//           <h1 className="text-4xl font-bold mb-4">Welcome to CareConnect</h1>
//           <p className="text-xl mb-8">Your Health, Our Priority</p>
//           <div className="space-x-4">
//             <Link href="/login" className="bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition duration-300">Book Appointment</Link>
//             <Link href="/symptomchecker" className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition duration-300">Symptom Checker</Link>
//           </div>
//         </div>
//       </header>

//       {/* Features Section */}
//       <section className="py-16">
//         <div className="container mx-auto">
//           <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="text-center">
//               <Image src="/assets/icons/doctor.svg" width={64} height={64} alt="Expert Doctors" className="mx-auto mb-4" />
//               <h3 className="text-xl font-semibold mb-2">Expert Doctors</h3>
//               <p>Consult with our experienced medical professionals</p>
//             </div>
//             <div className="text-center">
//               <Image src="/assets/icons/lab.svg" width={64} height={64} alt="Modern Facilities" className="mx-auto mb-4" />
//               <h3 className="text-xl font-semibold mb-2">Modern Facilities</h3>
//               <p>State-of-the-art equipment for accurate diagnosis</p>
//             </div>
//             <div className="text-center">
//               <Image src="/assets/icons/care.svg" width={64} height={64} alt="Patient Care" className="mx-auto mb-4" />
//               <h3 className="text-xl font-semibold mb-2">Patient Care</h3>
//               <p>Personalized care and support for every patient</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="bg-green-500 py-16">
//         <div className=" text-center">
//           <h2 className="text-3xl font-bold text-white mb-4">Ready to Take Control of Your Health?</h2>
//           <p className="text-white mb-8">Book an appointment today and start your journey to better health.</p>
//           <Link href="/book-appointment" className="bg-white text-green-500 px-8 py-3 rounded-full hover:bg-gray-100 transition duration-300">Book Now</Link>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-dark-300 text-white py-8">
//         <div className="container mx-auto text-center">
//           <p>&copy; 2024 CareConnect. All rights reserved.</p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default LandingPage;
