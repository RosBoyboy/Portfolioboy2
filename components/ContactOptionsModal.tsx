/**
 * Contact Options Modal Component
 * Displays contact methods with icons and descriptions
 */

"use client";

import { portfolioContent } from "@/data/content";
import { useEffect } from "react";

interface ContactOptionsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactOptionsModal({
  isOpen,
  onClose,
}: ContactOptionsModalProps) {
  // Close modal on Escape key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleEscape);
    }

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const contactMethods = [
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
        </svg>
      ),
      label: "Phone",
      value: portfolioContent.social.phone,
      href: `tel:${portfolioContent.social.phone}`,
      color: "text-green-400",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
      ),
      label: "Email",
      value: portfolioContent.social.email,
      href: `mailto:${portfolioContent.social.email}`,
      color: "text-cyan-400",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
      label: "Facebook",
      value: "Facebook Page",
      href: portfolioContent.social.facebook,
      color: "text-blue-400",
    },
  ];

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl shadow-2xl max-w-md w-full border border-slate-700 animate-in fade-in zoom-in-95 duration-300 pointer-events-auto">
          {/* Header */}
          <div className="border-b border-slate-700 px-6 py-4 flex justify-between items-center">
            <h2 className="text-2xl font-bold text-white">Contact Me</h2>
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-red-400 transition-colors hover:scale-110"
              title="Close"
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Contact Methods */}
          <div className="p-6 space-y-4">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.href}
                target={method.label === "Facebook" ? "_blank" : undefined}
                rel={method.label === "Facebook" ? "noopener noreferrer" : undefined}
                className="flex items-start gap-4 p-4 bg-slate-700/30 hover:bg-slate-700/50 rounded-lg border border-slate-600/50 hover:border-indigo-500/50 transition-all cursor-pointer group"
              >
                <div className={`${method.color} flex-shrink-0 mt-1`}>
                  {method.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-white font-semibold mb-1 group-hover:text-indigo-300 transition-colors">
                    {method.label}
                  </h3>
                  <p className="text-slate-300 text-sm break-all">
                    {method.value}
                  </p>
                </div>
                <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </a>
            ))}
          </div>

          {/* Footer Note */}
          <div className="border-t border-slate-700 px-6 py-4 text-sm text-slate-400 text-center">
            <p>Click on any method to get in touch</p>
          </div>
        </div>
      </div>
    </>
  );
}
