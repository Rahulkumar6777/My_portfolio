import { useState, useEffect } from "react";
import { portfolioData } from "../Data/PortfolioData";
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation, useNavigate } from "react-router-dom";

// export const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeTab, setActiveTab] = useState("home");

//   const location = useLocation();
//   const navigate = useNavigate();

//   const navLinks = [
//     { id: "home", label: "Home", path: "/" },
//     { id: "about", label: "About", path: "/about" },
//     { id: "projects", label: "Projects", path: "/projects" },
//     { id: "contact", label: "Contact", path: "/contact" },
//   ];

//   // 🔥 Sync active tab with URL (fix refresh issue)
//   useEffect(() => {
//     if (location.pathname === "/") {
//       setActiveTab("home");
//     } else {
//       setActiveTab(location.pathname.replace("/", ""));
//     }
//   }, [location.pathname]);

//   const handleClick = (link) => {
//     setActiveTab(link.id);
//     navigate(link.path);
//   };

//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-purple-900/95 via-fuchsia-900/95 to-pink-900/95 backdrop-blur-xl border-b border-pink-500/30 shadow-2xl">
//       <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
//         <div className="flex justify-between items-center h-20">

//           {/* Logo */}
//           <motion.div
//             whileHover={{ scale: 1.05 }}
//             className="flex items-center gap-3 cursor-pointer"
//             onClick={() => handleClick(navLinks[0])}
//           >
//             <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-400 to-purple-600 flex items-center justify-center shadow-lg shadow-pink-500/50">
//               <span className="text-white font-bold text-xl">
//                 {portfolioData.personal.name.charAt(0)}
//               </span>
//             </div>
//             <span className="text-2xl font-bold bg-gradient-to-r from-pink-300 via-purple-300 to-fuchsia-300 bg-clip-text text-transparent">
//               {portfolioData.personal.name.split(" ")[0]}.dev
//             </span>
//           </motion.div>

//           {/* Desktop Nav */}
//           <div className="hidden md:flex items-center gap-1 bg-white/10 backdrop-blur-md rounded-2xl p-1.5 border border-white/20">
//             {navLinks.map((link) => (
//               <motion.button
//                 key={link.id}
//                 onClick={() => handleClick(link)}
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//                 className="relative px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300"
//               >
//                 {activeTab === link.id && (
//                   <motion.div
//                     layoutId="activeTab"
//                     className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl shadow-lg shadow-pink-500/50"
//                     transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
//                   />
//                 )}

//                 <span
//                   className={`relative z-10 ${
//                     activeTab === link.id
//                       ? "text-white font-bold"
//                       : "text-pink-200 hover:text-white"
//                   }`}
//                 >
//                   {link.label}
//                 </span>
//               </motion.button>
//             ))}
//           </div>

//           {/* Hire Me */}
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={() => handleClick({ id: "contact", path: "/contact" })}
//             className="hidden md:flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-xl shadow-lg shadow-pink-500/50 hover:shadow-pink-500/70 transition-shadow"
//           >
//             <span>Hire Me</span>
//           </motion.button>

//           {/* Mobile Toggle */}
//           <motion.button
//             whileTap={{ scale: 0.9 }}
//             onClick={() => setIsOpen(!isOpen)}
//             className="md:hidden p-3 rounded-xl bg-white/10 border border-white/20 text-pink-200 hover:text-white transition-colors"
//           >
//             {isOpen ? "X" : "≡"}
//           </motion.button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             className="md:hidden bg-gradient-to-b from-purple-900/98 to-fuchsia-900/98 backdrop-blur-xl border-t border-pink-500/30"
//           >
//             <div className="px-6 py-6 space-y-3">
//               {navLinks.map((link) => (
//                 <motion.button
//                   key={link.id}
//                   onClick={() => {
//                     handleClick(link);
//                     setIsOpen(false);
//                   }}
//                   className={`w-full text-left px-6 py-4 rounded-xl font-semibold transition-all duration-300 ${
//                     activeTab === link.id
//                       ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg shadow-pink-500/50"
//                       : "text-pink-200 hover:text-white hover:bg-white/10"
//                   }`}
//                 >
//                   {link.label}
//                 </motion.button>
//               ))}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// };


export const Navbar = ({ activeSection, setActiveSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-purple-900/95 via-fuchsia-900/95 to-pink-900/95 backdrop-blur-xl border-b border-pink-500/30 shadow-2xl">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex justify-between items-center h-20">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => setActiveSection('home')}
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-400 to-purple-600 flex items-center justify-center shadow-lg shadow-pink-500/50">
              <span className="text-white font-bold text-xl">{portfolioData.personal.name.charAt(0)}</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-pink-300 via-purple-300 to-fuchsia-300 bg-clip-text text-transparent">
              {portfolioData.personal.name.split(' ')[0]}.dev
            </span>
          </motion.div>

          <div className="hidden md:flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-2xl p-2 border border-white/20">
            {navLinks.map((link) => (
              <motion.button
                key={link.id}
                onClick={() => setActiveSection(link.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`relative px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  activeSection === link.id ? 'text-white' : 'text-pink-200 hover:text-white'
                }`}
              >
                {activeSection === link.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl shadow-lg shadow-pink-500/50"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </motion.button>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveSection('contact')}
            className="hidden md:flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-xl shadow-lg shadow-pink-500/50 hover:shadow-pink-500/70 transition-shadow"
          >
            <span>Hire Me</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-3 rounded-xl bg-white/10 border border-white/20 text-pink-200 hover:text-white transition-colors"
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-gradient-to-b from-purple-900/98 to-fuchsia-900/98 backdrop-blur-xl border-t border-pink-500/30"
          >
            <div className="px-6 py-6 space-y-3">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => {
                    setActiveSection(link.id);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left px-6 py-4 rounded-xl font-semibold transition-all duration-300 ${
                    activeSection === link.id
                      ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg shadow-pink-500/50'
                      : 'text-pink-200 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
