// src/app/page.js
'use client';

import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../components/Navrbar'; // update path as needed

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-white">
      {/* Navbar */}

      {/* <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-md sticky top-0 z-50">
      <Image src="/logofst.png" alt="Smart Campus Logo" width={115} height={1} />
      <span className="sr-only">Smart Campus</span>
        <div className="space-x-6">
          <Link href="chatbot" className="text-gray-700 hover:text-blue-600 font-medium">
            Campus Navigation
          </Link>
          <Link href="lostfound" className="text-gray-700 hover:text-blue-600 font-medium">
            Lost & Found
          </Link>
        </div>
      </nav> */}
       <Navbar />

      {/* Hero Section */}
      <div className="w-full">

      {/* Hero Image Section */}
     
  <section className="relative w-full h-[60vh]">
  <div className="absolute inset-0">
  <Image
    src="/landing.jpg"
    alt="Campus"
    fill
    priority
    className="object-cover w-full h-full"
  />
  </div>
  <div className="absolute inset-0 bg-[#0000004a] px-7 py-7 rounded-lg shadow-lg w-full mx-auto flex flex-col items-center justify-center">
    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#f5f5dc] whitespace-nowrap">
      Welcome to Smart Campus Assistant 🎓
    </h1>
    <p className="text-lg max-w-2xl text-[#f5f5dc]">
      Navigate your university and find your lost items easily.
    </p>
  </div>
</section>




      {/* Main Action Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 ">
          
          {/* Chatbot Block */}
          <div className="bg-white rounded-2xl shadow-lg p-4 flex flex-col items-center text-center hover:scale-105 transition duration-300 ease-in-out">
            <Image src="/bot.png" alt="Lost and Found"      className="w-full h-auto"  width={1000} height={200} />
            <h3 className="text-2xl font-semibold text-blue-700 mt-6 mb-4 ">Chat Bot</h3>
            <p className="text-gray-600 mb-6">
            Chat with our assistant to locate services, buildings, or anything you need on campus.
            </p>
            <Link
              href="/chatbot"
              className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
            >
              Chat Bot
            </Link>
          </div>
          



          {/* Lost & Found Block */}
          <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:scale-105 transition duration-300 ease-in-out">
            <Image src="/lost.png" alt="Lost and Found" width={200} height={200} />
            <h3 className="text-2xl font-semibold text-blue-700 mt-6 mb-4">Lost & Found</h3>
            <p className="text-gray-600 mb-6">
              Report or search for lost items. Help others by sharing what you found!
            </p>
            <Link
              href="/lostfound"
              className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
            >
              Lost & Found
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t mt-10 py-6 text-center text-gray-500">
        &copy; 2025 Smart Campus. All rights reserved.
      </footer>
    </div>
    </div>
  );
}