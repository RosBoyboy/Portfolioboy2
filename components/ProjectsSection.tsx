/**
 * Projects Section Component
 * Displays the "Big Three" projects showcasing past, present, and future
 */

import { portfolioContent } from "@/data/content";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 md:py-32 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured Projects
          </h2>
          <p className="text-lg text-slate-300">
            A curated selection of three projects that represent my journey as a developer:
            what I know, what I've recently learned, and what I aspire to build.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {portfolioContent.projects.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              subtitle={project.subtitle}
              description={project.description}
              technologies={project.technologies}
              githubLink={project.githubLink}
              liveLink={project.liveLink}
              highlights={project.highlights}
              status={project.status}
            />
          ))}
        </div>

        {/* Additional context */}
        <div className="mt-20 bg-gradient-to-r from-indigo-600/10 to-cyan-600/10 border border-indigo-500/20 rounded-xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-white mb-4">Why These Three?</h3>
          <ul className="space-y-4 text-slate-300">
            <li className="flex gap-4">
              <span className="text-indigo-400 font-bold text-2xl">1</span>
              <div>
                <p className="font-semibold text-white mb-1">What I Already Know</p>
                <p>
                  Demonstrates my solid foundation in full-stack development with established
                  technologies and best practices.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="text-cyan-400 font-bold text-2xl">2</span>
              <div>
                <p className="font-semibold text-white mb-1">What I Recently Learned</p>
                <p>
                  Shows my commitment to continuous learning and ability to quickly master new
                  technologies like AI/ML integration.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="text-indigo-400 font-bold text-2xl">3</span>
              <div>
                <p className="font-semibold text-white mb-1">What I Aspire to Build</p>
                <p>
                  Reflects my ambition and growth mindset. This represents the cutting-edge
                  challenges I'm preparing myself for.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
