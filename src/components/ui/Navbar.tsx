"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const logo = { src: "/logo.png", alt: "Unison logo" };

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/#services", label: "Services" },
    { href: "/header-pages/about-us", label: "About" },
    { href: "/contact-pages", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b border-gray-200 transition-all duration-300 ease-in-out ${
        scrolled
          ? "bg-gradient-to-r from-green-600/90 to-yellow-400/90 backdrop-blur-md py-1 shadow-md"
          : "bg-gradient-to-r from-green-600 to-yellow-400 py-2 shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          aria-label="Home"
          className="flex items-center"
          onClick={() => setMenuOpen(false)}
        >
          <img
            src={logo.src}
            alt={logo.alt}
            className="h-8 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-white font-medium text-sm">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="hover:text-green-200 transition-colors duration-200"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden bg-gradient-to-r from-green-600/95 to-yellow-400/95 border-t border-gray-200 px-6 pb-4 animate-fadeIn backdrop-blur-md">
          <nav className="flex flex-col gap-3 text-white font-medium text-sm">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
