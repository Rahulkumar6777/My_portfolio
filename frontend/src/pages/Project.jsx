import { useState } from "react";
import { portfolioData } from "../Data/PortfolioData";
import { ProjectCard } from "../components/Projectcard";
import { motion, AnimatePresence } from "framer-motion";


export const Project = () => {
  const [filter, setFilter] = useState('all');
  
  const filteredProjects = filter === 'all' 
    ? portfolioData.projects 
    : portfolioData.projects.filter(p => p.type === filter);

  return (
    <section className="min-h-screen py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-bold bg-gradient-to-r from-pink-300 via-purple-300 to-fuchsia-300 bg-clip-text text-transparent mb-4">
            My Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-600 mx-auto rounded-full mb-8" />
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Explore my latest work in full-stack development and DevOps
          </p>
        </motion.div>

        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {['all', 'fullstack', 'devops'].map((type) => (
            <motion.button
              key={type}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(type)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                filter === type
                  ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg shadow-pink-500/50'
                  : 'bg-white/10 backdrop-blur-md border border-pink-400/30 text-pink-300 hover:border-pink-400/60'
              }`}
            >
              {type === 'all' ? 'All Projects' : type === 'fullstack' ? 'Full Stack' : 'DevOps'}
            </motion.button>
          ))}
        </div>

        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};