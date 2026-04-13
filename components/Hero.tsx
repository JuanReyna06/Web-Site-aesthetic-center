"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
  // 1. Configuramos el "Contenedor Padre" para que maneje la cascada
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Cada elemento tarda 0.2s en aparecer después del anterior
        delayChildren: 0.1,   // Pequeña pausa antes de empezar toda la animación
      },
    },
  };

  // 2. Configuramos cómo se mueve cada "Hijo" (texto, botones)
  const itemVariants = {
    hidden: { opacity: 0, y: 30 }, // Empieza invisible y 30px más abajo
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: [0.21, 0.47, 0.32, 0.98] as const, // Una curva de velocidad súper elegante (ease-out suave)
      } 
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#FAFAFA]">
      {/* 3. Convertimos el div principal en un motion.div 
        y le pasamos las variantes del contenedor
      */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="max-w-4xl mx-auto px-6 text-center"
      >
        
        {/* Eyebrow */}
        <motion.p 
          variants={itemVariants}
          className="text-[#BD8B7A] text-xs md:text-sm font-semibold uppercase tracking-widest mb-6"
        >
          Dra. María Laura Reartes
        </motion.p>

        {/* Título principal */}
        <motion.h1 
          variants={itemVariants}
          className="text-5xl md:text-7xl font-serif font-medium text-[#333835] leading-[1.1] mb-8"
        >
          La elegancia de la <br />
          <span className="italic text-[#BD8B7A]">naturalidad</span>
        </motion.h1>

        {/* Subtítulo */}
        <motion.p 
          variants={itemVariants}
          className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mb-20"
        >
          Tratamientos exclusivos diseñados para
          revelar tu versión más radiante.
        </motion.p>

        {/* CTAs */}
        {/* Envolvemos los botones en un motion.div para que entren juntos al final */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            href="#contacto"
            className="w-64 sm:w-40 border-2 border-transparent bg-[#9E6B5A] hover:bg-[#BD8B7A] text-white font-semibold text-sm sm:text-base px-4 py-3 sm:px-5 sm:py-4 rounded-full transition-all duration-300"
          >
            Contacto
          </Link>
          <Link
            href="#servicios"
            className="w-64 sm:w-40 border-2 border-[#BD8B7A] text-[#BD8B7A] hover:bg-[#BD8B7A] hover:text-white font-semibold text-sm sm:text-base px-4 py-3 sm:px-5 sm:py-4 rounded-full transition-all duration-300"
          >
            Ver servicios
          </Link>
        </motion.div>

      </motion.div>
    </section>
  );
}