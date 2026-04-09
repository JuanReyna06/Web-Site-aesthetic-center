'use client';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import Link from "next/link";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";


const categoriasServicios = [
  {
    nombre: "Armonización Facial",
    descripcion: "Equilibrio y proporción para resaltar tu belleza natural.",
    imagen: "servicios/armonizacion.png",
    items: [
      { titulo: "Toxina Botulínica", detalle: "Relajación de líneas de expresión (Frente, entrecejo y patas de gallo)."  },
      { titulo: "Rellenos", detalle: "Restauración de volumen y definición de contornos con Ácido Hialurónico." },
      { titulo: "Bioestimulador", detalle: "Inducción natural de colágeno para mejorar la firmeza de la piel." },
    ]
  },
  {
    nombre: "Regeneración & Cuidado",
    descripcion: "Tratamientos biológicos para la salud profunda de la piel.",
    imagen: "servicios/regeneracion.png",
    items: [
      { titulo: "Plasma Rico en Plaquetas", detalle: "Bioestimulación autóloga para regeneración celular y luminosidad."},
      { titulo: "Mesoterapia Facial", detalle: "Cóctel de vitaminas e hidratación profunda (Hidratación, Fotoenvejecimiento)." },
    ]
  },
  {
    nombre: "Contorno Corporal",
    descripcion: "Protocolos específicos para la remodelación y salud del cuerpo.",
    imagen: "servicios/contorno-corporal.png",
    items: [
      { titulo: "Mesoterapia Corporal", detalle: "Tratamiento localizado para adiposidad y celulitis." },
      { titulo: "Adiposidad Localizada", detalle: "Reducción de depósitos grasos resistentes mediante técnica médica." },
    ]
  }
];

const nroWhasapp = "5493517579702";
const mensajeBase = "¡Hola! Me gustaría consultar por un turno con la Dra. Reartes.";
const linkWsp = `https://wa.me/${nroWhasapp}?text=${encodeURIComponent(mensajeBase)}`;


export default function Services() {
  return (
    <section id="servicios" className="py-24 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">
          <p className="text-[#BD8B7A] text-xs md:text-sm font-bold uppercase tracking-[0.3em] mb-4">
            Especialidades Médicas
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-medium text-[#333835] mb-6">
            Todo lo que <span className="italic text-[#BD8B7A]">necesitás</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Cada procedimiento está diseñado con criterio clínico para revelar
            tu versión más equilibrada y radiante.
          </p>
        </div>
        <div className="px-12"> 
          <Carousel opts={{align:"start", loop:true}}>
            <CarouselContent>
                {categoriasServicios.map((categoria) => (
                    <CarouselItem key={categoria.nombre} className="basis-full md:basis-1/2 lg:basis-1/3">
                      <div className="flex flex-col h-full p-1">
                             <div className="mb-8 border-b border-[#BD8B7A]/20 pb-6">
                                {/* Encabezado  Categoría */}
                                <h3 className="text-2xl font-serif text-[#333835] mb-4 text-center">
                                  {categoria.nombre}
                                </h3>
                  
                                {/* Imagen */}
                               <div className="overflow-hidden rounded-xl mb-5">
                                <img src={categoria.imagen} alt={categoria.nombre} className="w-full h-52 object-cover transition-transform duration-500 hover:scale-105"/>
                               </div>
                                {/* Descripción */}
                                <p className="text-[#BD8B7A] text-xs font-medium uppercase tracking-wider">
                                   {categoria.descripcion}
                                </p>
                            </div>
                            <div className="space-y-4 flex-1">
                                {categoria.items.map((item) => (
                                  <Card className="bg-white border border-[#BD8B7A]/10 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300" key={item.titulo}>
                                      <CardHeader>
                                        <CardTitle className="text-[#333835] font-semibold flex items-center gap-2 text-base">
                                          <span className="w-1.5 h-1.5 rounded-full bg-[#BD8B7A] shrink-0 mt-0.5" />
                                          {item.titulo}
                                        </CardTitle>
                                        <CardDescription className="text-gray-500 text-sm leading-relaxed">
                                          {item.detalle}
                                        </CardDescription>
                                      </CardHeader>
                                  </Card>
                                ))}

                            </div>
                      </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="border-[#BD8B7A]/30 text-[#BD8B7A] hover:bg-[#BD8B7A] hover:text-white transition-colors duration-300" />
            <CarouselNext    className="border-[#BD8B7A]/30 text-[#BD8B7A] hover:bg-[#BD8B7A] hover:text-white transition-colors duration-300" />
          </Carousel>
        </div>

        

        <div className="text-center mt-5">
          <Link
            href={linkWsp}
            target="_blank"
            rel="noopener noreferrer"
            className="
              bg-[#9E6B5A] hover:bg-[#BD8B7A]
              text-white font-semibold
              px-10 py-4 rounded-full
              shadow-lg shadow-[#9E6B5A]/30
              hover:shadow-xl hover:shadow-[#9E6B5A]/30
              active:scale-95
              transition-all duration-300
              inline-block
            "
          >
            Consultar disponibilidad
          </Link>
        </div>
      </div>
    </section>
  
    
  );
}