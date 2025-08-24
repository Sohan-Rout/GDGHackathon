"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaWhatsapp, FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa6";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md px-4 py-3 md:px-8 sticky rounded-full top-0 z-50">
      <div className="flex items-center justify-between">
        {/* Left - Hamburger (mobile only) */}
        <div className="md:hidden">
          <button
            className="inline-flex items-center justify-center p-2 rounded-md border bg-black"
            aria-controls="mobile-menu"
            aria-expanded={open ? "true" : "false"}
            onClick={() => setOpen((prev) => !prev)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Center - Logo */}
        <div className="flex justify-center md:justify-start flex-1">
          <Image
            width={160}
            height={60}
            src="/gdg.svg"
            alt="Logo"
            className="h-auto w-32 md:w-40"
          />
        </div>

        {/* Right - Social Links (desktop only) */}
        <div className="hidden md:flex gap-3 text-white bg-black px-5 py-2 rounded-full shadow-lg">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            <FaWhatsapp size={20} />
          </a>
          <a
            href="https://www.instagram.com/gdg.dce?igsh=MXNmaHdrYjRlc3k1aQ%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="https://www.youtube.com/@gdgdce"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500"
          >
            <FaYoutube size={20} />
          </a>
          <a
            href="https://discord.com/invite/KzGhr4whKn"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400"
          >
            <FaDiscord size={20} />
          </a>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div
          id="mobile-menu"
          className="md:hidden mt-3 bg-black text-white rounded-lg p-4 flex flex-col gap-3"
        >
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-blue-400"
          >
            <FaWhatsapp /> Whatsapp
          </a>
          <a
            href="https://www.instagram.com/gdg.dce?igsh=MXNmaHdrYjRlc3k1aQ%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-pink-400"
          >
            <FaInstagram /> Instagram
          </a>
          <a
            href="https://www.youtube.com/@gdgdce"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-red-500"
          >
            <FaYoutube /> YouTube
          </a>
          <a
            href="https://discord.com/invite/KzGhr4whKn"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-indigo-400"
          >
            <FaDiscord /> Discord
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
