import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMenu, FiX, FiScale } = FiIcons;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-lg z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <SafeIcon icon={FiScale} className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">Dr. María González</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('inicio')} className="text-gray-700 hover:text-blue-600 transition-colors">
              Inicio
            </button>
            <button onClick={() => scrollToSection('servicios')} className="text-gray-700 hover:text-blue-600 transition-colors">
              Servicios
            </button>
            <button onClick={() => scrollToSection('sobre-mi')} className="text-gray-700 hover:text-blue-600 transition-colors">
              Sobre Mí
            </button>
            <button onClick={() => scrollToSection('testimonios')} className="text-gray-700 hover:text-blue-600 transition-colors">
              Testimonios
            </button>
            <button onClick={() => scrollToSection('contacto')} className="text-gray-700 hover:text-blue-600 transition-colors">
              Contacto
            </button>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden"
          >
            <SafeIcon icon={isMenuOpen ? FiX : FiMenu} className="h-6 w-6" />
          </button>
        </div>

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white border-t"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button onClick={() => scrollToSection('inicio')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600">
                Inicio
              </button>
              <button onClick={() => scrollToSection('servicios')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600">
                Servicios
              </button>
              <button onClick={() => scrollToSection('sobre-mi')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600">
                Sobre Mí
              </button>
              <button onClick={() => scrollToSection('testimonios')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600">
                Testimonios
              </button>
              <button onClick={() => scrollToSection('contacto')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600">
                Contacto
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;