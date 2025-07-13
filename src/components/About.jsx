import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiAward, FiBookOpen, FiUsers, FiTrendingUp } = FiIcons;

const About = () => {
  const achievements = [
    {
      icon: FiAward,
      number: '500+',
      label: 'Casos Exitosos'
    },
    {
      icon: FiUsers,
      number: '300+',
      label: 'Clientes Satisfechos'
    },
    {
      icon: FiBookOpen,
      number: '10+',
      label: 'Años de Experiencia'
    },
    {
      icon: FiTrendingUp,
      number: '95%',
      label: 'Tasa de Éxito'
    }
  ];

  return (
    <section id="sobre-mi" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Oficina legal"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-blue-600/20 rounded-2xl"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Sobre Mí
            </h2>
            
            <div className="space-y-4 text-gray-600 leading-relaxed mb-8">
              <p>
                Soy la Dra. María González, abogada titulada de la Universidad Nacional de Colombia 
                con más de 10 años de experiencia en el ejercicio del derecho. Mi pasión por la 
                justicia y el compromiso con mis clientes me han llevado a especializarme en 
                múltiples áreas del derecho.
              </p>
              
              <p>
                A lo largo de mi carrera, he representado exitosamente a cientos de clientes 
                en casos complejos, siempre con un enfoque personalizado y resultados efectivos. 
                Mi objetivo es brindar asesoría legal de la más alta calidad, defendiendo los 
                derechos de mis clientes con dedicación y profesionalismo.
              </p>
              
              <p>
                Cuento con especializaciones en Derecho Civil y Penal, así como certificaciones 
                en mediación y resolución de conflictos. Mi compromiso es estar siempre actualizada 
                con las últimas reformas legales para ofrecer el mejor servicio posible.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <SafeIcon icon={achievement.icon} className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="text-2xl font-bold text-blue-600 mb-1">
                    {achievement.number}
                  </div>
                  <div className="text-sm text-gray-600">
                    {achievement.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;