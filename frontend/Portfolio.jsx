import { useState } from "react";
import { portfolioData } from "./src/Data/PortfolioData";
import { About } from "./src/pages/About";
import { Contact } from "./src/pages/Contact";
import { Home } from "./src/pages/Home";
import { Project } from "./src/pages/Project";
import { Navbar } from "./src/pages/Navbar";
import { motion, AnimatePresence } from 'framer-motion';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-fuchsia-950 to-pink-950 pt-16">
      <div className="fixed inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDE2YzAtMy4zMTQgMi42ODYtNiA2LTZzNiAyLjY4NiA2IDYtMi42ODYgNi02IDYtNi0yLjY4Ni02LTZ6TTIwIDUwYzAtMy4zMTQgMi42ODYtNiA2LTZzNiAyLjY4NiA2IDYtMi42ODYgNi02IDYtNi0yLjY4Ni02LTZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30" />
      
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <AnimatePresence mode="wait">
        {activeSection === 'home' && <Home key="home" setActiveSection={setActiveSection} />}
        {activeSection === 'about' && <About key="about" />}
        {activeSection === 'projects' && <Project key="projects" />}
        {activeSection === 'contact' && <Contact key="contact" />}
      </AnimatePresence>

      <footer className="relative py-8 border-t border-pink-500/20 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2026 {portfolioData.personal.name}. Built with ❤️ using React & Framer Motion
          </p>
        </div>
      </footer>
    </div>
  );
}