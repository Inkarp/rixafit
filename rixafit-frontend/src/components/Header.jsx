import { useState } from "react";
import { FaFacebookF, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import Logo from "/src/assets/LogoRixa.svg";

export default function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="w-full fixed top-0 left-0 z-50 shadow">
      <div className="flex flex-col md:flex-row w-full bg-white">
        {/* Left Section (Logo) */}
        <div className="w-full md:w-[20%] flex items-center justify-center border-r-4 border-[#971b1e] bg-[#F5F5F5]">
          <div className="flex items-center justify-center h-full px-4">
            <img
              src={Logo}
              alt="logo"
              className="max-h-20 md:max-h-28 w-auto object-contain"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-[80%] flex flex-col">
          {/* Top Row */}
          <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-6 py-2 border-b text-xs md:text-sm text-gray-700 space-y-2 md:space-y-0">
            <div className="flex flex-wrap items-center gap-3 text-center md:text-left">
              <span className="flex items-center space-x-1 border-r pr-2 md:pr-4">
                <FaPhoneAlt className="text-[#971b1e]" />
                <span>+91 80966 69901</span>
              </span>

              <span className="flex items-center space-x-1 border-r pr-2 md:pr-4">
                <FiMail className="text-[#971b1e]" />
                <span>rixafit2024@gmail.com</span>
              </span>

              <span className="border-r pr-2 md:pr-4">Morning: 05:00 AM – 10:00 AM</span>
              <span className="border-r pr-2 md:pr-4">Evening: 05:00 PM – 10:00 PM</span>
              <span>Sunday: 05:00 AM – 10:00 AM</span>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-[#971b1e] flex items-center justify-center">
                <FaFacebookF className="text-white" size={14} />
              </div>
              <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-[#971b1e] flex items-center justify-center">
                <FaInstagram className="text-white" size={14} />
              </div>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-6 py-3 bg-[#1e2124] text-white space-y-3 md:space-y-0">
            {/* Menu */}
            <div className="hidden md:flex space-x-6 font-medium">
              <a href="#" className="hover:text-sky-400">Home</a>
              <a href="#" className="hover:text-sky-400">About Us</a>
              <a href="#" className="hover:text-sky-400">Service</a>
              <a href="#" className="hover:text-sky-400">Blog</a>
              <a href="#" className="hover:text-sky-400">Contact Us</a>
            </div>

            {/* Download Dropdown */}
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="bg-[#971b1e] hover:bg-black text-white font-semibold px-4 md:px-5 py-2 rounded flex items-center"
              >
                Download the App
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded shadow-lg overflow-hidden">
                  <a
                    href="https://play.google.com" // replace with actual Play Store link
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    Android
                  </a>
                  <a
                    href="https://apps.apple.com" // replace with actual App Store link
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    iOS
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
