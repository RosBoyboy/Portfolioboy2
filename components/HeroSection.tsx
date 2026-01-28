/**
 * Hero Section Component
 * Displays the professional introduction and primary call-to-action
 */

"use client";

import { portfolioContent } from "@/data/content";
import Image from "next/image";
import { useState } from "react";
import ContactOptionsModal from "./ContactOptionsModal";

export default function HeroSection() {
  const { name, title, statement, ctaText, ctaLink } = portfolioContent.hero;
  const [isContactOptionsOpen, setIsContactOptionsOpen] = useState(false);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Background gradient decorations */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 -z-10" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Profile Picture - Left Side */}
          <div className="flex justify-center md:justify-start order-2 md:order-1">
            <Image
              src="/profile.jpg"
              alt="Profile"
              width={450}
              height={450}
              className="rounded-xl object-cover shadow-2xl border-4 border-indigo-500/30"
            />
          </div>

          {/* Content - Right Side */}
          <div className="text-center md:text-left order-1 md:order-2">
            {/* Animated badge */}
            <div className="mb-6 inline-block md:inline-block">
              <span className="px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-300 text-sm font-medium">
                Welcome to my portfolio
              </span>
            </div>

            {/* Name */}
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 animate-fade-in-up">
              {name}
            </h1>

            {/* Title */}
            <p className="text-xl md:text-2xl text-cyan-400 font-semibold mb-6">
              {title}
            </p>

            {/* Professional statement */}
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8">
              {statement}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-12">
              <a
                href={ctaLink}
                className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-cyan-600 text-white rounded-lg font-semibold hover:shadow-xl hover:shadow-indigo-500/50 transition-smooth"
              >
                {ctaText}
              </a>
              <button
                onClick={() => setIsContactOptionsOpen(true)}
                className="px-8 py-3 border-2 border-slate-400 text-slate-300 rounded-lg font-semibold hover:border-indigo-500 hover:text-indigo-400 transition-smooth"
              >
                Contact Me
              </button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center md:justify-start gap-6 text-slate-400">
          <a
            href={portfolioContent.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-smooth"
            aria-label="GitHub"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a
            href={portfolioContent.social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-smooth"
            aria-label="Facebook"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>
          <a
            href={`mailto:${portfolioContent.social.email}`}
            className="hover:text-white transition-smooth"
            aria-label="Email"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
          </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-indigo-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>

      {/* Contact Options Modal */}
      <ContactOptionsModal
        isOpen={isContactOptionsOpen}
        onClose={() => setIsContactOptionsOpen(false)}
      />
    </section>
  );
}
