import { motion, AnimatePresence } from "framer-motion";

export const ProjectCard = ({ project, index }) => {
    if (!project) return null;
    const isFullStack = project.type === 'fullstack';

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="group relative bg-gradient-to-br from-purple-900/40 to-fuchsia-900/40 backdrop-blur-sm border border-pink-500/20 rounded-2xl overflow-hidden hover:border-pink-400/60 hover:shadow-2xl hover:shadow-pink-500/30 transition-all duration-500"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 via-purple-500/5 to-fuchsia-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute top-0 -left-4 w-32 h-32 bg-pink-500/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-0 -right-4 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }} />
            </div>

            <div className="relative h-52 overflow-hidden bg-gradient-to-br from-purple-800/50 to-fuchsia-800/50">
                <motion.img
                    whileHover={{ scale: 1.15, rotate: 2 }}
                    transition={{ duration: 0.7 }}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 via-purple-900/40 to-transparent" />

                <div className="absolute top-4 right-4 flex gap-2">
                    <motion.span
                        whileHover={{ scale: 1.1 }}
                        className={`px-4 py-1.5 text-xs font-bold rounded-full backdrop-blur-md shadow-lg ${isFullStack
                                ? 'bg-gradient-to-r from-pink-500/80 to-purple-500/80 border border-pink-300/50 text-white'
                                : 'bg-gradient-to-r from-purple-500/80 to-indigo-500/80 border border-purple-300/50 text-white'
                            }`}
                    >
                        {isFullStack ? ' Full Stack' : ' DevOps'}
                    </motion.span>
                </div>
            </div>

            <div className="relative p-6 space-y-4">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-pink-200 bg-clip-text text-transparent group-hover:from-pink-300 group-hover:to-purple-300 transition-all">
                    {project.title}
                </h3>

                <p className="text-gray-300 leading-relaxed line-clamp-3 group-hover:text-gray-200 transition-colors">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                        <motion.span
                            key={i}
                            whileHover={{ scale: 1.1, y: -2 }}
                            className="px-3 py-1.5 text-xs font-medium bg-purple-800/60 border border-pink-500/30 text-pink-300 rounded-lg hover:bg-purple-700/80 hover:border-pink-400/50 transition-all backdrop-blur-sm"
                        >
                            {tech}
                        </motion.span>
                    ))}
                </div>

                <div className="flex gap-3 pt-4">
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-purple-800/80 to-fuchsia-800/80 border border-pink-500/40 text-pink-300 rounded-xl hover:from-purple-700 hover:to-fuchsia-700 hover:border-pink-400/60 hover:shadow-lg hover:shadow-pink-500/30 transition-all duration-300 backdrop-blur-sm group/btn"
                    >
                        <svg className="w-5 h-5 group-hover/btn:rotate-12 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        <span className="font-semibold">Code</span>
                    </motion.a>

                    {project.live && (
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-xl hover:from-pink-600 hover:to-purple-700 hover:shadow-xl hover:shadow-pink-500/50 transition-all duration-300 group/btn"
                        >
                            <svg className="w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                            <span className="font-semibold">Live Demo</span>
                        </motion.a>
                    )}
                </div>
            </div>

            <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        </motion.div>
    );
};