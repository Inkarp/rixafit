import { FaFacebookF, FaTwitter, FaInstagram, FaPinterestP, FaPhoneAlt } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { FaBars } from "react-icons/fa";

export default function Header() {
  return (
    <div className="font-sans w-full h-auto">
      {/* Topbar */}
      <div className="bg-white text-gray-700 text-sm flex justify-between items-center px-6 py-2 border-b">
        <div className="flex items-center space-x-6">
          <span className="flex items-center space-x-2 border-r pr-4"><FaPhoneAlt className="text-sky-500" /><span>(+999) 123 98765</span></span>
          <span className="flex items-center space-x-2 border-r pr-4"><FiMail className="text-sky-500" /><span>info@techin.com</span></span>
          <span className="text-gray-600">Mon-Fri: 10:00Am-09:00Pm</span>
        </div>
        <div className="flex items-center space-x-3 text-sky-500">
          <div className="w-8 h-8 rounded-full bg-sky-400 flex items-center justify-center"><FaFacebookF className="text-white" /></div>
          <div className="w-8 h-8 rounded-full bg-sky-400 flex items-center justify-center"><FaTwitter className="text-white" /></div>
          <div className="w-8 h-8 rounded-full bg-sky-400 flex items-center justify-center"><FaInstagram className="text-white" /></div>
          <div className="w-8 h-8 rounded-full bg-sky-400 flex items-center justify-center"><FaPinterestP className="text-white" /></div>
        </div>
      </div>

      {/* Navbar */}
      <div className="bg-[#1e2124] text-white flex justify-between items-center px-6 py-3">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="relative">
            <div className="absolute -right-4 top-0 w-6 h-full rounded-r-3xl bg-blue-600"></div>
            <div className="absolute -right-8 top-0 w-6 h-full rounded-r-3xl bg-indigo-700"></div>
            <div className="flex items-center bg-[#1e2124] px-3 py-1 relative z-10">
              <img src="/logo192.png" alt="logo" className="w-8 h-8" />
              <h1 className="text-2xl font-bold ml-2"><span className="text-white">Tech</span><span className="text-sky-400">In</span></h1>
            </div>
          </div>
        </div>

        {/* Menu */}
        <div className="hidden md:flex space-x-8 font-medium">
          <a href="#" className="hover:text-sky-400">Demo</a>
          <a href="#" className="hover:text-sky-400">Pages</a>
          <a href="#" className="hover:text-sky-400">Service</a>
          <a href="#" className="hover:text-sky-400">Blog</a>
          <a href="#" className="hover:text-sky-400">Contact Us</a>
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          <button className="bg-white text-blue-600 p-2 rounded-full"><CiSearch size={20} /></button>
          <button className="bg-white text-blue-600 p-2 rounded-full"><FaBars size={20} /></button>
          <button className="bg-sky-400 hover:bg-sky-500 text-white font-semibold px-5 py-2 rounded">Get A Quote</button>
        </div>
      </div>
    </div>
  );
}
