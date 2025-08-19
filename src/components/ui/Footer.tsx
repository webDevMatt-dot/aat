import React from "react";
import Link from "next/link";

export const Footer: React.FC = () => {
  return (
    <>
      {/* Main Footer */}
      <footer className="bg-gray-50 text-gray-700 border-t border-gray-200 pt-10 pb-6">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h4 className="text-xl font-semibold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-teal-600">
              AAT Business Solutions
            </h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              Your trusted partner for cutting-edge technology solutions. Specializing in AI,
              Data Engineering, SAP Solutions, and Cybersecurity.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-semibold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-teal-600">
              Our Services
            </h4>
            <ul className="text-sm space-y-2">
              <li>
                <Link href="/components/AIML" className="hover:text-green-600 transition">
                  AI & Machine Learning Training
                </Link>
              </li>
              <li>
                <Link href="/services/data-engineering" className="hover:text-green-600 transition">
                  Data Engineering & Science
                </Link>
              </li>
              <li>
                <Link href="/services/sap-solutions" className="hover:text-green-600 transition">
                  SAP Solutions
                </Link>
              </li>
              <li>
                <Link href="/services/cybersecurity" className="hover:text-green-600 transition">
                  Anti-Virus & Security Packages
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-teal-600">
              Contact Us
            </h4>
            <ul className="text-sm space-y-2 text-gray-600">
              <li>
                <a
                  href="https://www.google.com/maps?q=8+Fred+Verseput+Road,+Halfway+Gardens+1686,+Midrand"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-600 transition block"
                >
                  📍 8 Fred Verseput Rd, Halfway Gardens, Midrand
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/27816515179?text=Hello, I'm contacting you regarding AAT Solutions"
                  className="hover:text-green-600 transition block"
                >
                  📱 +27 81 651 5179
                </a>
              </li>
              <li>
                <a
                  href="mailto:admin@aatsolutions.co.za"
                  className="hover:text-green-600 transition block"
                >
                  📧 admin@aatsolutions.co.za
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>

      {/* Copyright */}
      <footer className="bg-gray-50 border-t border-gray-200 text-center text-sm text-gray-500 py-4 mt-2">
        &copy; {new Date().getFullYear()} AAT Business Solutions. All rights reserved.
      </footer>
    </>
  );
};
