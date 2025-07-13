import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiStar, FiQuote } = FiIcons;

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Carlos Rodríguez',
      role: 'Empresario',
      content: 'La Dra. González me ayudó con un caso laboral muy complejo. Su profesionalismo y dedicación fueron excepcionales. Recomiendo sus servicios sin dudarlo.',
      rating: 5
    },
    {
      name: 'Ana María López',
      role: 'Comerciante',
      content: 'Excelente abogada, muy preparada y comprometida. Me asesoró en la constitución de mi empresa y todo el proceso fue muy fluido y exitoso.',
      rating: 5
    },
    {
      name: 'Roberto Herrera',
      role: 'Ingeniero',
      content: 'Tuve un problema con un contrato inmobiliario y la Dra. González lo resolvió de manera rápida y eficiente. Muy agradecido por su ayuda.',
      rating: 5
    },
    {
      name: 'Patricia Silva',
      role: 'Médica',
      content: 'Me representó en un caso de responsabilidad civil y logró un resultado excelente. Es una profesional muy competente y confiable.',
      rating: 5
    }
  ];

  return (
    <section id="testimonios" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Testimonios
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            La satisfacción de mis clientes es mi mayor logro. Aquí algunas 
            experiencias de quienes han confiado en mis servicios.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-8 relative"
            >
              <div className="absolute top-4 right-4 text-blue-100">
                <SafeIcon icon={FiQuote} className="h-8 w-8" />
              </div>
              
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <SafeIcon key={i} icon={FiStar} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-gray-600 text-sm">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;