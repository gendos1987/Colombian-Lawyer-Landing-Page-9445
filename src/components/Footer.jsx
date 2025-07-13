import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiScale, FiPhone, FiMail, FiMapPin, FiHeart } = FiIcons;

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <SafeIcon icon={FiScale} className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">Dr. María González</span>
            </div>
            <p className="text-gray-400 mb-4">
              Abogada especialista en derecho civil, penal y laboral. 
              Más de 10 años defendiendo tus derechos en Colombia.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://wa.me/573001234567"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:text-green-300 transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('inicio')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('servicios')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Servicios
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('sobre-mi')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Sobre Mí
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contacto')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contacto
                </button>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Derecho Civil</li>
              <li>Derecho Penal</li>
              <li>Derecho Laboral</li>
              <li>Derecho Inmobiliario</li>
              <li>Derecho Comercial</li>
              <li>Derecho Administrativo</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiPhone} className="h-5 w-5 text-blue-400" />
                <span className="text-gray-400">+57 300 123 4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiMail} className="h-5 w-5 text-blue-400" />
                <span className="text-gray-400">maria.gonzalez@abogado.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <SafeIcon icon={FiMapPin} className="h-5 w-5 text-blue-400 mt-1" />
                <span className="text-gray-400">
                  Carrera 15 #93-47, Oficina 501<br />
                  Bogotá, Colombia
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Dr. María González - Todos los derechos reservados
            </p>
            <div className="flex items-center space-x-1 text-gray-400 text-sm mt-4 md:mt-0">
              <span>Hecho con</span>
              <SafeIcon icon={FiHeart} className="h-4 w-4 text-red-400" />
              <span>en Colombia</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;