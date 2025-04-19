// src/app/page.js
'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-md sticky top-0 z-50">
        <h1 className="text-2xl font-bold text-blue-700">Smart Campus</h1>
        <div className="space-x-6">
          <Link href="chatbot" className="text-gray-700 hover:text-blue-600 font-medium">
            Campus Navigation
          </Link>
          <Link href="lostfound" className="text-gray-700 hover:text-blue-600 font-medium">
            Lost & Found
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-800 mb-6">Welcome to Smart Campus Assistant 🎓</h2>
        <p className="text-lg text-gray-600 max-w-2xl">
          Navigate your campus effortlessly and never lose track of your belongings again.
        </p>
      </section>

      {/* Campus Navigation Section */}
      <section id="campus-nav" className="bg-white py-16 px-8">
        <h3 className="text-3xl font-semibold text-blue-700 mb-6 text-center">Campus Navigation</h3>
        <div className="flex flex-col items-center">
          <p className="text-gray-600 mb-4 text-center max-w-xl">
            Chat with our smart assistant to find locations, services, and more.
          </p>
          <Link
            href="http://localhost:3000/chatbot"
            className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
          >
            Go to Chatbot
          </Link>
        </div>
      </section>

      {/* Lost and Found Section */}
      <section id="lost-found" className="bg-blue-50 py-16 px-8">
        <h3 className="text-3xl font-semibold text-blue-700 mb-6 text-center">Lost & Found Assistant</h3>
        <div className="flex flex-col items-center">
          <p className="text-gray-600 mb-4 text-center max-w-xl">
            Report lost items and browse found objects to reclaim what's yours.
          </p>
          <Link
            href="/lostfound"
            className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
          >
            Lost & Found
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t mt-10 py-6 text-center text-gray-500">
        &copy; 2025 Smart Campus. All rights reserved.
      </footer>
    </div>
  );
}
