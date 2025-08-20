import React from "react";
import Image from 'next/image'
import { FaWhatsapp, FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-white shadow-md mx-6 px-6 py-3 rounded-full">
      {/* Brand */}
      <div>
        <Image width={300} height={100} src="/gdg.svg" alt="Logo"/>
      </div>

      {/* Social Links */}
      <div className="flex gap-2 text-neutral-100 bg-black px-4 py-2 rounded-full shadow-xl">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
          <FaWhatsapp size={20} />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
          <FaInstagram size={20} />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
          <FaYoutube size={20} />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
          <FaDiscord size={20} />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;