"use client";
import React from "react";
import { useState } from 'react';
import Image from 'next/image'
import { FaWhatsapp, FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa6";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between bg-white shadow-md mx-6 px-6 py-3 rounded-full">
      <div className="flex items-center justify-between md:hidden">
        <button
          className="inline-flex items-center justify-center p-2 rounded-md border border-white/20"
          aria-controls="mobile-menu"
          aria-expanded={open ? "true" : "false"}
          onClick={() => setOpen(prev => !prev)}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Brand */}
      <div>
        <Image width={300} height={100} src="/gdg.svg" alt="Logo"/>
      </div>

      {/* Social Links */}
      <div className="flex gap-2 text-neutral-100 bg-black px-4 py-2 rounded-full shadow-xl">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
          <FaWhatsapp size={20} />
        </a>
        <a href="https://www.instagram.com/gdg.dce?igsh=MXNmaHdrYjRlc3k1aQ%3D%3D" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
          <FaInstagram size={20} />
        </a>
        <a href="https://www.youtube.com/@gdgdce" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
          <FaYoutube size={20} />
        </a>
        <a href="https://discord.com/invite/KzGhr4whKn" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
          <FaDiscord size={20} />
        </a>
      </div>
    
      <div id="mobile-menu" className={`${open ? "block" : "hidden"} md:hidden mt-2`}>
        {/* Duplicate your link list here for mobile if necessary */}
      </div>
</nav>
  );
};

export default Navbar;