/**
 * Learning Section Component
 * Displays technologies and concepts currently being learned
 * Emphasizes growth mindset for recruiters
 */

"use client";

import { portfolioContent } from "@/data/content";
import { useState } from "react";

export default function LearningSection() {
  const { technologies, mindset } = portfolioContent.learning;
  const [selectedCategory, setSelectedCategory] = useState(0);

  return (
    <section
      id="learning"
      className="py-20 md:py-32 bg-gradient-to-b from-slate-900 to-slate-950"
    >
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Currently Learning
          </h2>
          <p className="text-lg text-slate-300 mb-8">
            Expanding my skills and staying ahead of the curve in web development
          </p>
          <div className="p-6 bg-gradient-to-r from-indigo-600/20 to-cyan-600/20 border border-indigo-500/30 rounded-xl">
            <p className="text-slate-200 italic">{mindset}</p>
          </div>
        </div>

        {/* Learning Categories */}
        <div className="mt-16">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-3 mb-8 justify-center">
            {technologies.map((tech, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedCategory(idx)}
                className={`px-4 py-2 rounded-lg font-semibold transition-smooth ${
                  selectedCategory === idx
                    ? "bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-lg shadow-indigo-500/50"
                    : "bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700"
                }`}
              >
                {tech.category}
              </button>
            ))}
          </div>

          {/* Category Content */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-8 md:p-12 border border-slate-700/50">
            <div className="animate-fade-in-up">
              <h3 className="text-2xl font-bold text-white mb-6">
                {technologies[selectedCategory].category}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {technologies[selectedCategory].items.map((item, idx) => (
                  <div
                    key={idx}
                    className="group relative p-4 bg-slate-700/30 hover:bg-indigo-600/20 rounded-lg border border-slate-600/50 hover:border-indigo-500/50 transition-smooth cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-indigo-400 to-cyan-400 rounded-full group-hover:scale-150 transition-transform" />
                      <span className="text-slate-300 group-hover:text-white transition-smooth font-medium">
                        {item}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Learning Journey Info */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-gradient-to-br from-indigo-600/10 to-slate-800 rounded-xl border border-indigo-500/20">
            <div className="w-12 h-12 bg-indigo-600/20 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-indigo-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-9h10v2H7z" />
              </svg>
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Continuous Growth</h4>
            <p className="text-sm text-slate-300">
              Learning new technologies every month to stay current with industry trends
            </p>
          </div>

          <div className="p-6 bg-gradient-to-br from-cyan-600/10 to-slate-800 rounded-xl border border-cyan-500/20">
            <div className="w-12 h-12 bg-cyan-600/20 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-cyan-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Practical Application</h4>
            <p className="text-sm text-slate-300">
              Applying new skills immediately in projects to reinforce learning
            </p>
          </div>

          <div className="p-6 bg-gradient-to-br from-indigo-600/10 to-slate-800 rounded-xl border border-indigo-500/20">
            <div className="w-12 h-12 bg-indigo-600/20 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-indigo-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
              </svg>
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Always Improving</h4>
            <p className="text-sm text-slate-300">
              Seeking feedback and iterating on my skills to reach mastery
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
