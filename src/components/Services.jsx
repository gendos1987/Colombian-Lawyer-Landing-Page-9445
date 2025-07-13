import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiUsers, FiShield, FiBriefcase, FiHome, FiFileText, FiGavel } = FiIcons;

const Services = () => {
  const services = [
    {
      icon: FiUsers,
      title: 'Derecho Civil',
      description: 'Contratos, divorcios, sucesiones, responsabilidad civil y resolución de conflictos patrimoniales.',
      features: ['Contratos', 'Divorcios', 'Sucesiones', 'Responsabilidad Civil']
    },
    {
      icon: FiShield,
      title: 'Derecho Penal',
      description: 'Defensa en procesos penales, delitos económicos, violencia intrafamiliar y delitos informáticos.',
      features: ['Defensa Penal', 'Delitos Económicos', 'Violencia Intrafamiliar', 'Delitos Informáticos']
    },
    {
      icon: FiBriefcase,
      title: 'Derecho Laboral',
      description: 'Despidos injustificados, acoso laboral, liquidaciones, demandas laborales y asesoría empresarial.',
      features: ['Despidos', 'Acoso Laboral', 'Liquidaciones', 'Demandas Laborales']
    },
    {
      icon: FiHome,
      title: 'Derecho Inmobiliario',
      description: 'Compraventa de inmuebles, arrendamientos, propiedad horizontal y títulos de propiedad.',
      features: ['Compraventa', 'Arrendamientos', 'Propiedad Horizontal', 'Títulos']
    },
    {
      icon: FiFileText,
      title: 'Derecho Comercial',
      description: 'Constitución de empresas, contratos comerciales, fusiones, adquisiciones y derecho societario.',
      features: ['Constitución Empresas', 'Contratos', 'Fusiones', 'Derecho Societario']
    },
    {
      icon: FiGavel,
      title: 'Derecho Administrativo',
      description: 'Contratación estatal, sanciones administrativas, licencias y permisos gubernamentales.',
      features: ['Contratación Estatal', 'Sanciones', 'Licencias', 'Permisos']
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Servicios Legales
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrezco asesoría legal integral en las principales áreas del derecho, 
            con un enfoque personalizado y resultados efectivos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300"
            >
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <SafeIcon icon={service.icon} className="h-8 w-8 text-blue-600" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-sm text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;