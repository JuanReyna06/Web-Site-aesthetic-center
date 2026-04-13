import { motion, Variants } from "framer-motion";
import CountUp from "react-countup";

//Animación para la foto (Entra desde la izquierda)
const imageVariants: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] } 
  }
};

// Animación Contenedor de Texto (Maneja la cascada)
const textContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { 
      staggerChildren: 0.15, // Retraso entre cada elemento del texto
      delayChildren: 0.2     // Espera un poquito a que la foto empiece a salir
    }
  }
};

// Animación de cada elemento individual del texto 
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

export default function About() {
  return (
    <section id="aboutme" className="py-24 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Columna izquierda — imagen */}
          <motion.div 
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-2xl">
              <img src="/about/doctora.jpg" alt="Dra. Nombre Apellido" className="w-full h-150 object-cover object-top"/>
            </div>

           
          </motion.div>

          {/* Columna derecha — texto */}
          <motion.div 
            variants={textContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col gap-6 max-w-xl">

            {/* Eyebrow */}
            <motion.p variants={itemVariants} className="
              text-[#BD8B7A] text-xs font-bold
              uppercase tracking-[0.3em]
            ">
              Sobre mí
            </motion.p>

            {/* Título */}
            <motion.h2 variants={itemVariants} className="
              text-4xl md:text-5xl font-serif font-medium
              text-[#333835] leading-tight
            ">
              Dra. Maria Laura <br />
              <span className="italic text-[#BD8B7A]">Reartes</span>
            </motion.h2>

            {/* Separador */}
            <motion.div variants={itemVariants} className="w-10 h-px bg-[#BD8B7A]" />


            <motion.div variants={itemVariants} className="space-y-5">
               <p className="text-gray-700 leading-7 text-[15px]">
              Soy médica emergentóloga y clínica con más de 30 años de experiencia en el ámbito de la salud, 
              tanto en el sector público como privado. A lo largo de mi trayectoria he acompañado a pacientes en situaciones críticas
              tomando decisiones que marcan la diferencia.
            </p>
            <p className="text-gray-700 leading-7 text-[15px]">
              Hoy integro ese sólido criterio clínico con una especialización en estética facial y corporal, 
              abordando cada tratamiento desde una mirada médica, segura y personalizada.
            </p>
            <p className="text-gray-700 leading-7 text-[15px]">
              Mi enfoque combina precisión profesional con una visión estética del cuerpo humano, 
              entendiendo que cada paciente es único. Más que transformar mi objetivo es resaltar la belleza natural y acompañar a cada persona a verse y sentirse mejor, 
              con resultados armónicos y reales.
            </p>
            </motion.div>
            {/* Párrafos */}
           

            {/* Stats en fila */}
            <motion.div variants={itemVariants} className="grid grid-cols-3 gap-4 py-6 border-y border-gray-100">
              {[
                { valor: "30+", label: "Años de experiencia" },
                { valor: "500+", label: "Pacientes atendidos" },
                { valor: "100%", label: "Productos certificados" },
              ].map((stat) => (
                <div key={stat.label} className="text-center ">
                  <p className="text-2xl font-bold text-[#BD8B7A] hover:scale-105  duration-700">
                    <CountUp end={parseInt(stat.valor)} enableScrollSpy scrollSpyOnce suffix={stat.valor.includes("+") ? "+" : ""} duration={2.7}/>
                  </p>
                  <p className="text-xs text-gray-500 mt-1 leading-snug">{stat.label}</p>
                </div>
              ))}
            </motion.div>

            {/* Certificaciones */}
            <motion.div variants={itemVariants} className="flex flex-col gap-2">
              {[
                "Médica recibida en Universidad Nacional de Córdoba - Matrícula Profesional 25833/1",
                "Especialización en Medicina Estética — FRM",
                "Certificación en Armonización Facial",
              ].map((cert) => (
                <div key={cert} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#BD8B7A] shrink-0 mt-2" />
                  <p className="text-sm text-gray-600">{cert}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}