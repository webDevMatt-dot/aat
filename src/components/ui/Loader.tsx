"use client";
import React from "react";

const logo = [
  { src: "/logo.png", alt: "AAT logo" }
];

export function Loader() {
  return (
    <div className="fixed inset-0 bg-white z-[9999] flex items-center justify-center">
      {logo.map((logo, index) => (
        <img
          key={index}
          src={logo.src}
          alt={logo.alt}
          className="w-48 md:w-64 object-contain opacity-90 animate-pulse"
        />
      ))}
    </div>
  );
}
