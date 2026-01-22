/**
 * Project Card Component
 * Reusable component for displaying individual project information
 */

import Link from "next/link";

interface ProjectCardProps {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  githubLink?: string;
  liveLink?: string | null;
  highlights: string[];
  status?: string;
}

export default function ProjectCard({
  id,
  title,
  subtitle,
  description,
  technologies,
  githubLink,
  liveLink,
  highlights,
  status,
}: ProjectCardProps) {
  return (
    <div className="group relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl overflow-hidden border border-slate-700/50 hover:border-indigo-500/50 transition-smooth hover:shadow-xl hover:shadow-indigo-500/20 h-full flex flex-col">
      {/* Decorative gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/0 to-cyan-600/0 group-hover:from-indigo-600/10 group-hover:to-cyan-600/10 transition-smooth" />

      <div className="relative p-6 md:p-8 flex flex-col h-full">
        {/* Badge and Status */}
        <div className="flex justify-between items-start mb-4">
          <span className="px-3 py-1 bg-indigo-500/20 border border-indigo-500/30 rounded-full text-indigo-300 text-xs font-semibold">
            {subtitle}
          </span>
          {status && (
            <span className="px-3 py-1 bg-cyan-500/20 border border-cyan-500/30 rounded-full text-cyan-300 text-xs font-semibold">
              {status}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
          {title}
        </h3>

        {/* Description */}
        <p className="text-slate-300 mb-6 flex-grow">{description}</p>

        {/* Highlights */}
        <div className="mb-6">
          <p className="text-sm text-slate-400 mb-3 font-semibold">Key Features:</p>
          <ul className="space-y-2">
            {highlights.map((highlight, idx) => (
              <li key={idx} className="text-sm text-slate-300 flex items-start gap-2">
                <span className="text-cyan-400 font-bold mt-1">→</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies */}
        <div className="mb-6">
          <p className="text-sm text-slate-400 mb-3 font-semibold">Technologies:</p>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-lg border border-slate-600/50 hover:border-indigo-500/50 transition-smooth"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="flex gap-4 mt-auto">
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-4 py-2 bg-slate-700/50 text-slate-300 rounded-lg hover:bg-indigo-600 hover:text-white transition-smooth font-medium text-center text-sm"
            >
              View Code
            </a>
          )}
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-4 py-2 bg-gradient-to-r from-indigo-600 to-cyan-600 text-white rounded-lg hover:shadow-lg hover:shadow-indigo-500/50 transition-smooth font-medium text-center text-sm"
            >
              Live Demo
            </a>
          )}
          {!liveLink && !githubLink && (
            <span className="flex-1 px-4 py-2 bg-slate-700/50 text-slate-400 rounded-lg text-center text-sm italic">
              Coming Soon
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
