'use client';
import React, { useState } from 'react';
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { RainEffect } from '../components/RainEffect';
import { Map } from '../components/Map';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-gray-100 dark:from-gray-900 dark:to-blue-900">
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center space-y-6"
        >
          <div 
            className="relative inline-flex items-start"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <h1 className="text-6xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300 tracking-tight">
              ıslanmasak
            </h1>
            <AnimatePresence>
              <RainEffect isActive={isHovered} />
            </AnimatePresence>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-light"
          >
            yağmurdan korunma sanatı
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-8"
          >
            <div className="animate-bounce">
              <svg 
                className="w-6 h-6 mx-auto text-gray-600 dark:text-gray-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M19 14l-7 7m0 0l-7-7m7 7V3" 
                />
              </svg>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="min-h-screen py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100">
                Proje Hakkında
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed">
                Yağmurlu havalarda insanların şemsiye ve yağmurluk ihtiyaçlarını anında karşılamak için 
                şehrin çeşitli noktalarına yerleştirdiğimiz akıllı otomatlar ile hizmet veriyoruz. 
                Haritada gösterilen noktalarda yer alan otomatlarımızdan 7/24 yağmurluk temin edebilirsiniz.
              </p>
            </motion.div>
            <Map />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-6 px-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4 text-sm">
              <span className="text-xs text-gray-400 dark:text-gray-500">
                powered by <a href="https://maoco.dev" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors">maoco</a>
              </span>
              <div className="h-4 w-px bg-gray-300 dark:bg-gray-600" />
              <span className="text-gray-600 dark:text-gray-300">
                © 2024 ıslanmasak. Tüm hakları saklıdır.
              </span>
            </div>
            <div className="flex items-center space-x-6">
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                >
                  <FaLinkedin size={20} />
                </a>
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                >
                  <FaGithub size={20} />
                </a>
              </div>
              <div className="h-4 w-px bg-gray-300 dark:bg-gray-600" />
              <div className="flex space-x-6">
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                  Hakkımızda
                </a>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                  İletişim
                </a>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                  Gizlilik
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
