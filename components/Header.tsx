/**
 * Header component with navigation
 * Provides smooth scrolling navigation to all sections
 */

"use client";

import Link from "next/link";
import { portfolioContent } from "@/data/content";
import { useState } from "react";
import ContactModal from "./ContactModal";
import ContactOptionsModal from "./ContactOptionsModal";
import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isContactOptionsOpen, setIsContactOptionsOpen] = useState(false);
  const { theme, toggleTheme, mounted } = useTheme();

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-b from-slate-900 to-slate-900/80 backdrop-blur-md border-b border-slate-700/50">
      <nav className="container mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
        {/* Logo/Brand */}
        <div className="flex items-center gap-3">
          <Image
            src="/profile.jpg"
            alt="Profile"
            width={45}
            height={45}
            className="rounded-lg object-cover"
          />
          <span className="hidden sm:inline font-bold text-lg text-white">
            Portfolio
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8">
          {portfolioContent.navigation.map((nav) => (
            <button
              key={nav.label}
              onClick={() => {
                if (nav.label === "Contact") {
                  setIsContactOptionsOpen(true);
                } else {
                  window.location.href = nav.href;
                }
              }}
              className="text-slate-300 hover:text-white transition-smooth font-medium bg-none border-none cursor-pointer"
            >
              {nav.label}
            </button>
          ))}
        </div>

        {/* CTA Button */}
        <button
          onClick={() => setIsContactOpen(true)}
          className="hidden sm:inline-block px-6 py-2 bg-gradient-to-r from-indigo-600 to-cyan-600 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-indigo-500/50 transition-smooth"
        >
          Get in Touch
        </button>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="hidden sm:inline-flex items-center justify-center w-10 h-10 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors text-slate-300 hover:text-white"
          title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          disabled={!mounted}
        >
          {theme === "dark" ? (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 18a6 6 0 100-12 6 6 0 000 12zm0 2a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12z" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          )}
        </button>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-slate-300 hover:text-white"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-800 border-t border-slate-700">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {portfolioContent.navigation.map((nav) => (
              <button
                key={nav.label}
                onClick={() => {
                  if (nav.label === "Contact") {
                    setIsContactOptionsOpen(true);
                  } else {
                    window.location.href = nav.href;
                  }
                  setIsMenuOpen(false);
                }}
                className="text-slate-300 hover:text-white transition-smooth font-medium text-left bg-none border-none cursor-pointer"
              >
                {nav.label}
              </button>
            ))}
            <button
              onClick={() => {
                setIsContactOpen(true);
                setIsMenuOpen(false);
              }}
              className="w-full px-4 py-2 bg-gradient-to-r from-indigo-600 to-cyan-600 text-white rounded-lg font-medium text-center"
            >
              Get in Touch
            </button>
          </div>
        </div>
      )}

      {/* Contact Modals */}
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      <ContactOptionsModal isOpen={isContactOptionsOpen} onClose={() => setIsContactOptionsOpen(false)} />
    </header>
  );
}
