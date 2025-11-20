// src/components/Footer.jsx
import React from "react";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaTiktok,
} from "react-icons/fa";
import { SiGooglemaps } from "react-icons/si";
const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Logo & Brand */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <img
            src="/zaiqa_logo.png"
            alt="Zaiqa Traders Logo"
            className="w-32 h-32 object-contain mb-4 ml-6.5"
          />
          <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
            Zaiqa Traders<sup className="text-lg text-purple-500">™</sup>
          </h2>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Quick Links</h3>
          <ul className="space-y-4 text-gray-600">
            <li><a href="#" className="hover:text-purple-600 transition">Contact Us</a></li>
            <li><a href="#" className="hover:text-purple-600 transition">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-purple-600 transition">Refund Policy</a></li>
            <li><a href="#" className="hover:text-purple-600 transition">Shipping Policy</a></li>
            <li><a href="#" className="hover:text-purple-600 transition">Terms of Service</a></li>
          </ul>
        </div>

        {/* Visit Our Outlet */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-2">
            <FaMapMarkerAlt className="w-6 h-6 text-purple-600" />
            Visit our Outlet
          </h3>

          {/* FREE MAP – NO API KEY, NO BILLING */}
          <div className="w-full h-64 rounded-xl overflow-hidden shadow-2xl border border-gray-200 mb-6">
            <iframe
              title="Zaiqa Traders - Gujranwala"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3395.997356789!2d74.183512!3d32.187345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391f1e9b5c5b5c5b%3A0x9c5b5c5b5c5b5c5b!2sMain%20Pasrur%20Rd%2C%20near%20Dar%20Emporium%2C%20Fareed%20Town%2C%20Gujranwala!5e0!3m2!1sen!2spk!4v1700000000000"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="text-sm text-gray-600 space-y-1">
            <p className="font-semibold text-gray-800">Outlet Address:</p>
            <p>Zaiqa Traders,Main Pasrur Rd, near Dar Emporium,Fareed Town, Gujranwala, 52250, Pakistan</p>
            <a
              href="https://maps.google.com/?q=Zaiqa+Traders,+Main+Pasrur+Road,+near+Dar+Emporium,+Fareed+Town,+Gujranwala"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-600 font-medium hover:underline flex items-center gap-1 mt-3"
            >
              <SiGooglemaps className="w-4 h-4" />
              Get Directions
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section - Social Icons + Copyright Centered */}
      <div className="mt-16 pt-10 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 text-center">
          {/* Social Icons - Centered */}
          <div className="flex justify-center items-center space-x-10 mb-6">
            <a href="#" className="text-gray-600 hover:text-[#1DA1F2] transition">
              <FaTwitter className="w-7 h-7" />
            </a>
            <a href="#" className="text-gray-600 hover:text-[#1877F2] transition">
              <FaFacebookF className="w-7 h-7" />
            </a>
            <a href="#" className="text-gray-600 hover:text-[#E4405F] transition">
              <FaInstagram className="w-7 h-7" />
            </a>
            <a href="#" className="text-gray-600 hover:text-red-600 transition">
              <FaYoutube className="w-7 h-7" />
            </a>
            <a href="#" className="text-gray-600 hover:text-black transition">
              <FaTiktok className="w-7 h-7" />
            </a>
            <a
              href="https://wa.me/923004539000"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-green-500 transition"
            >
              <FaWhatsapp className="w-8 h-8" />
            </a>
          </div>

          {/* Copyright - Directly under social icons */}
          <p className="text-sm text-purple-500 font-medium">
            © 2025 ZaiqaTraders.pk — All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;