import { motion } from 'framer-motion';
import { portfolioData } from '../Data/PortfolioData';
import { Code, Server, Database, Shield, Cloud, GitBranch, Cpu, Key, Terminal, Zap, Cog, Layers, Workflow } from 'lucide-react';

export const About = ({ isMobile = false }) => {
  const skillCategories = [
    {
      title: "Backend Development",
      icon: <Server className="w-5 h-5" />,
      color: "from-purple-500 to-pink-400",
      borderColor: "border-purple-500/30",
      bgColor: "from-purple-900/20 to-pink-900/10",
      skills: [
        { name: "Node.js", level: 92 },
        { name: "Express.js", level: 90 },
        { name: "REST APIs & Microservices", level: 88 },
        { name: "MongoDB", level: 88 },
      ]
    },
    {
      title: "DevOps & Infrastructure",
      icon: <Cloud className="w-5 h-5" />,
      color: "from-fuchsia-500 to-pink-400",
      borderColor: "border-fuchsia-500/30",
      bgColor: "from-fuchsia-900/20 to-pink-900/10",
      skills: [
        { name: "Docker", level: 85 },
        { name: "CI/CD (GitHub Actions)", level: 82 },
        { name: "Linux", level: 80 },
        { name: "Nginx", level: 78 },
      ]
    },
    {
      title: "Security & Tools",
      icon: <Shield className="w-5 h-5" />,
      color: "from-violet-500 to-purple-400",
      borderColor: "border-violet-500/30",
      bgColor: "from-violet-900/20 to-purple-900/10",
      skills: [
        { name: "JWT / Authentication", level: 85 },
        { name: "Git & GitHub", level: 90 },
        { name: "API Security", level: 83 },
        { name: "WebSockets", level: 75 },
      ]
    }
  ];

  const expertiseHighlights = [
    {
      icon: <Layers className="w-5 h-5" />,
      title: "Scalable Architecture",
      description: "Building systems that grow with your needs"
    },
    {
      icon: <Workflow className="w-5 h-5" />,
      title: "CI/CD Pipeline",
      description: "Automated deployments & testing workflows"
    },
    {
      icon: <Cpu className="w-5 h-5" />,
      title: "Performance",
      description: "High-throughput, low-latency solutions"
    },
    {
      icon: <Key className="w-5 h-5" />,
      title: "Security First",
      description: "Robust authentication & authorization"
    }
  ];

  return (
    <section id="about" className="min-h-screen py-12 md:py-24 px-4 sm:px-6 relative overflow-hidden">
      {/* Background elements - Updated colors to match theme */}
      <div className="absolute top-0 left-0 w-32 h-32 md:w-64 md:h-64 bg-purple-900/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-48 h-48 md:w-96 md:h-96 bg-pink-900/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/4 w-24 h-24 md:w-48 md:h-48 bg-violet-900/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative px-4">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 md:gap-3 mb-4 px-4 py-2 md:px-6 md:py-3 bg-gradient-to-r from-purple-900/20 via-fuchsia-900/20 to-pink-900/20 rounded-full border border-purple-500/20">
            <Cog className="w-4 h-4 md:w-5 md:h-5 text-purple-400" />
            <span className="text-sm md:text-lg font-semibold bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
              Backend Developer & DevOps Engineer
            </span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 px-2">
            <span className="bg-gradient-to-r from-purple-300 via-fuchsia-300 to-pink-300 bg-clip-text text-transparent">
              {portfolioData.about.title}
            </span>
          </h1>
          
          <p className="text-base md:text-xl text-gray-300 max-w-3xl mx-auto mb-6 md:mb-8 px-2">
            Building robust server-side applications and scalable infrastructure
          </p>
          
          <div className="w-32 md:w-48 h-1 bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500 mx-auto rounded-full" />
        </motion.div>

        {/* Technical Philosophy Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16"
        >
          <div className="bg-gray-900/40 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-4 sm:p-6 md:p-8">
            <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
              <div className="p-2 md:p-3 bg-gradient-to-br from-purple-700/30 to-pink-700/30 rounded-xl">
                <Code className="w-6 h-6 md:w-7 md:h-7 text-purple-400" />
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-white">Technical Philosophy</h2>
            </div>
            
            <p className="text-gray-300 leading-relaxed text-base md:text-lg mb-6 md:mb-8">
              {portfolioData.about.description}
            </p>
            
            {/* Expertise Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
              {expertiseHighlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800/40 to-gray-900/20 border border-purple-500/20 rounded-xl p-4 md:p-5 hover:border-pink-500/30 transition-all duration-300"
                >
                  <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                    <div className="p-2 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-lg">
                      <div className="text-purple-400">{item.icon}</div>
                    </div>
                    <h3 className="text-white font-semibold text-sm md:text-base">{item.title}</h3>
                  </div>
                  <p className="text-xs md:text-sm text-gray-400">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Technical Skills */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16"
        >
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 md:mb-4">
              <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
                Technical Mastery
              </span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-sm md:text-base px-2">
              Specialized expertise across backend development, infrastructure, and security
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
            {skillCategories.map((category, catIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: catIndex * 0.2 }}
                className={`bg-gradient-to-br ${category.bgColor} backdrop-blur-sm border ${category.borderColor} rounded-2xl p-4 sm:p-5 md:p-6 hover:shadow-xl hover:shadow-purple-900/20 transition-all duration-300`}
              >
                <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                  <div className={`p-2 bg-gradient-to-br ${category.color.replace('from-', 'from-').replace('to-', 'to-')}/20 rounded-lg`}>
                    <div className={`bg-gradient-to-br ${category.color} bg-clip-text text-transparent`}>
                      {category.icon}
                    </div>
                  </div>
                  <h3 className={`text-lg md:text-xl font-bold bg-gradient-to-br ${category.color} bg-clip-text text-transparent`}>
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-3 md:space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: skillIndex * 0.1 + catIndex * 0.1 }}
                    >
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-gray-300 font-medium text-xs md:text-sm">{skill.name}</span>
                        <span className={`font-bold text-xs px-2 py-1 rounded-full bg-gradient-to-r ${category.color}/20 text-white`}>
                          {skill.level}%
                        </span>
                      </div>
                      
                      <div className="h-1.5 md:h-2 bg-gray-800/50 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, delay: skillIndex * 0.1 }}
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <div className="mt-4 md:mt-6 pt-3 md:pt-4 border-t border-gray-700/30">
                  <div className="flex items-center gap-1 md:gap-2 text-xs text-gray-500">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-current rounded-full" />
                    <span>Proficiency Level</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Methodology Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-gray-900/50 to-purple-900/30 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-4 sm:p-6 md:p-8 mb-8 md:mb-12"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 md:gap-4 mb-4 md:mb-6">
            <div className="p-2 md:p-3 bg-gradient-to-br from-purple-700/40 to-pink-700/40 rounded-xl">
              <Terminal className="w-5 h-5 md:w-6 md:h-6 text-purple-300" />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-1 md:mb-2">Development Approach</h3>
              <p className="text-gray-300 text-sm md:text-base">Clean code, scalable architecture, and automation-first mindset</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
            <div className="p-3 md:p-4 bg-gradient-to-br from-purple-900/30 to-pink-900/20 rounded-xl border border-purple-500/20">
              <h4 className="text-white font-semibold mb-1 md:mb-2 flex items-center gap-2 text-sm md:text-base">
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-purple-500 rounded-full flex-shrink-0" />
                Code Quality
              </h4>
              <p className="text-xs md:text-sm text-gray-300">Maintainable, documented, and test-driven development</p>
            </div>
            
            <div className="p-3 md:p-4 bg-gradient-to-br from-fuchsia-900/30 to-pink-900/20 rounded-xl border border-fuchsia-500/20">
              <h4 className="text-white font-semibold mb-1 md:mb-2 flex items-center gap-2 text-sm md:text-base">
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-fuchsia-500 rounded-full flex-shrink-0" />
                Infrastructure
              </h4>
              <p className="text-xs md:text-sm text-gray-300">Containerized, scalable, and automated deployments</p>
            </div>
            
            <div className="p-3 md:p-4 bg-gradient-to-br from-violet-900/30 to-purple-900/20 rounded-xl border border-violet-500/20">
              <h4 className="text-white font-semibold mb-1 md:mb-2 flex items-center gap-2 text-sm md:text-base">
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-violet-500 rounded-full flex-shrink-0" />
                Security
              </h4>
              <p className="text-xs md:text-sm text-gray-300">Built-in authentication, authorization, and data protection</p>
            </div>
          </div>
        </motion.div>

        {/* Availability Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-8 md:mt-12"
        >
          <div className="text-center p-4 sm:p-6 md:p-8 bg-gradient-to-r from-purple-900/30 via-fuchsia-900/30 to-pink-900/30 backdrop-blur-md border border-purple-500/30 rounded-2xl">
            <div className="inline-flex flex-col sm:flex-row items-center gap-3 px-4 py-3 sm:px-6 sm:py-3 bg-gradient-to-r from-purple-900/40 to-pink-900/40 rounded-full border border-purple-500/30">
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full animate-pulse" />
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full animate-pulse delay-150" />
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full animate-pulse delay-300" />
              </div>
              <span className="text-sm sm:text-base md:text-lg font-semibold text-white text-center">
                Currently Available for Backend & DevOps Projects
              </span>
              <div className="text-xs sm:text-sm text-gray-300 px-2 py-1 sm:px-3 sm:py-1 bg-gray-800/50 rounded-full whitespace-nowrap">
                Full-time • Contract • Remote
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};