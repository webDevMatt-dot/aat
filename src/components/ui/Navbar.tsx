"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const logo = [
  { src: "/logo.png", alt: "AAT logo" }
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-green-600 to-yellow-400 border-b border-gray-200 transition-all duration-300 ease-in-out shadow-sm ${
        scrolled ? "py-1 shadow-md" : "py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between transition-all duration-300">
        <Link
          href="/"
          aria-label="Home"
          className="flex items-center gap-2"
          onClick={() => setMenuOpen(false)}
        >
      <div className="flex absolute left-4 top-1/2 -translate-y-1/2">
        {[...logo].map((logo, index) => (
          <img
            key={index}
            src={logo.src}
            alt={logo.alt}
            width={80} 
            height={20}
            className="object-contain opacity-90 hover:opacity-100 transition-opacity"
            style={{ maxHeight: "60px" }}
          />
        ))}
      </div>
        </Link>

        <nav className="hidden md:flex space-x-8 text-white font-medium">
          <Link href="/" className="hover:text-green-200 transition-colors duration-200">Home</Link>
          <Link href="/#services" className="hover:text-green-200 transition-colors duration-200">Services</Link>
          <Link href="/header-pages/about-us" className="hover:text-green-200 transition-colors duration-200">About</Link>
          <Link href="/contact-pages" className="hover:text-green-200 transition-colors duration-200">Contact</Link>
        </nav>

        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-gradient-to-r from-green-600 to-yellow-400 border-t border-gray-200 px-6 pb-4">
          <nav className="flex flex-col gap-4 text-white font-medium">
            <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link href="/#services" onClick={() => setMenuOpen(false)}>Services</Link>
            <Link href="/header-pages/about-us" onClick={() => setMenuOpen(false)}>About</Link>
            <Link href="/contact-pages" onClick={() => setMenuOpen(false)}>Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
