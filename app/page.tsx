/**
 * Home Page Component
 * Main landing page that assembles all sections of the portfolio
 */

import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import LearningSection from "@/components/LearningSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <HeroSection />
        <ProjectsSection />
        <LearningSection />
      </main>
      <Footer />
    </>
  );
}
