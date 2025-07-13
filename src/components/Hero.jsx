import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiPhone, FiMail, FiMapPin } = FiIcons;

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="pt-16 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Asesoría Legal
              <span className="text-blue-600 block">Profesional</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Más de 10 años de experiencia defendiendo sus derechos en Colombia. 
              Especializada en derecho civil, penal y laboral con un enfoque personalizado 
              para cada caso.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <motion.button
                onClick={scrollToContact}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Consulta Gratuita
              </motion.button>
              <motion.a
                href="https://wa.me/573001234567?text=Hola, necesito asesoría legal"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors text-center"
              >
                WhatsApp
              </motion.a>
            </div>

            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-600">
                <SafeIcon icon={FiPhone} className="h-5 w-5 text-blue-600" />
                <span>+57 300 123 4567</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <SafeIcon icon={FiMail} className="h-5 w-5 text-blue-600" />
                <span>maria.gonzalez@abogado.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <SafeIcon icon={FiMapPin} className="h-5 w-5 text-blue-600" />
                <span>Bogotá, Colombia</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-blue-100 rounded-3xl p-8 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Abogada María González"
                className="w-full h-96 object-cover rounded-2xl"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">10+</div>
                <div className="text-sm text-gray-600">Años de Experiencia</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;