import { useState } from "react";
import { portfolioData } from "../Data/PortfolioData";
import { motion, AnimatePresence } from "framer-motion";

export const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (data.success) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitted(false), 3000);
      } else {
        alert(data.msg);
      }
    } catch (error) {
      alert("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="min-h-screen py-16 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-300 via-purple-300 to-fuchsia-300 bg-clip-text text-transparent mb-3 sm:mb-4">
            Get In Touch
          </h2>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-600 mx-auto rounded-full mb-4 sm:mb-6" />
          <p className="text-gray-300 text-base sm:text-lg md:text-xl px-4">
            Let's create something amazing together
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-purple-900/40 to-fuchsia-900/40 backdrop-blur-sm border border-pink-500/20 rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:border-pink-400/50 transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-bold text-pink-300 mb-4 sm:mb-6">
                Contact Information
              </h3>

              <div className="space-y-4 sm:space-y-6">
                <motion.div 
                  whileHover={{ x: 5 }} 
                  className="flex items-start sm:items-center gap-3 sm:gap-4 text-gray-300"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-pink-500/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs sm:text-sm text-gray-400">Email</p>
                    <p className="font-semibold text-sm sm:text-base truncate">
                      {portfolioData.personal.email}
                    </p>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ x: 5 }} 
                  className="flex items-start sm:items-center gap-3 sm:gap-4 text-gray-300"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs sm:text-sm text-gray-400">Phone</p>
                    <p className="font-semibold text-sm sm:text-base">
                      {portfolioData.personal.phone}
                    </p>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ x: 5 }} 
                  className="flex items-start sm:items-center gap-3 sm:gap-4 text-gray-300"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-fuchsia-500/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-fuchsia-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs sm:text-sm text-gray-400">Location</p>
                    <p className="font-semibold text-sm sm:text-base">
                      {portfolioData.personal.location}
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-purple-900/40 to-fuchsia-900/40 backdrop-blur-sm border border-pink-500/20 rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:border-pink-400/50 transition-all duration-300">
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <label className="block text-pink-300 font-semibold mb-2 text-sm sm:text-base">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-purple-900/50 border border-pink-500/30 rounded-lg sm:rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-pink-400 transition-colors text-sm sm:text-base"
                    placeholder="Your name"
                    disabled={isLoading}
                  />
                </div>

                <div>
                  <label className="block text-pink-300 font-semibold mb-2 text-sm sm:text-base">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-purple-900/50 border border-pink-500/30 rounded-lg sm:rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-pink-400 transition-colors text-sm sm:text-base"
                    placeholder="your@email.com"
                    disabled={isLoading}
                  />
                </div>

                <div>
                  <label className="block text-pink-300 font-semibold mb-2 text-sm sm:text-base">
                    Message
                  </label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-purple-900/50 border border-pink-500/30 rounded-lg sm:rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-pink-400 transition-colors resize-none text-sm sm:text-base"
                    placeholder="Your message..."
                    disabled={isLoading}
                  />
                </div>

                <motion.button
                  whileHover={{ scale: isLoading ? 1 : 1.02 }}
                  whileTap={{ scale: isLoading ? 1 : 0.98 }}
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3 sm:py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold rounded-lg sm:rounded-xl shadow-lg shadow-pink-500/50 hover:shadow-pink-500/70 transition-all disabled:opacity-70 disabled:cursor-not-allowed relative"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <svg className="animate-spin h-5 w-5 mr-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Sending...</span>
                    </div>
                  ) : submitted ? (
                    '✓ Message Sent!'
                  ) : (
                    'Send Message'
                  )}
                </motion.button>
              </form>
              
              {/* Success Message */}
              <AnimatePresence>
                {submitted && !isLoading && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mt-4 p-3 bg-green-500/20 border border-green-500/50 rounded-lg text-center"
                  >
                    <p className="text-green-400 text-sm font-medium">
                      Your message has been sent successfully! 🎉
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};