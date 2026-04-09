export default function About() {
  return (
    <section id="aboutme" className="py-24 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Columna izquierda — imagen */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <img src="/about/doctora.jpg" alt="Dra. Nombre Apellido" className="w-full h-150 object-cover object-top"/>
            </div>

           
          </div>

          {/* Columna derecha — texto */}
          <div className="flex flex-col gap-6 max-w-xl">

            {/* Eyebrow */}
            <p className="
              text-[#BD8B7A] text-xs font-bold
              uppercase tracking-[0.3em]
            ">
              Sobre mí
            </p>

            {/* Título */}
            <h2 className="
              text-4xl md:text-5xl font-serif font-medium
              text-[#333835] leading-tight
            ">
              Dra. Maria Laura <br />
              <span className="italic text-[#BD8B7A]">Reartes</span>
            </h2>

            {/* Separador */}
            <div className="w-10 h-px bg-[#BD8B7A]" />


            <div className="space-y-5">
               <p className="text-gray-700 leading-7 text-[15px]">
              Soy médica emergentóloga y clínica con más de 20 años de experiencia en el ámbito de la salud, 
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
            </div>
            {/* Párrafos */}
           

            {/* Stats en fila */}
            <div className="grid grid-cols-3 gap-4 py-6 border-y border-gray-100">
              {[
                { valor: "20+", label: "Años de experiencia" },
                { valor: "500+", label: "Pacientes atendidos" },
                { valor: "100%", label: "Productos certificados" },
              ].map((stat) => (
                <div key={stat.label} className="text-center ">
                  <p className="text-2xl font-bold text-[#BD8B7A] hover:scale-105  duration-700">{stat.valor}</p>
                  <p className="text-xs text-gray-500 mt-1 leading-snug">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Certificaciones */}
            <div className="flex flex-col gap-2">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}