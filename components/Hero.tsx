"use client";
import Link from "next/link";

export default function HeroSection() {
  return(
    <>
     <section className=" min-h-screen flex items-center justify-center  bg-[#FAFAFA]"> 
      {/* Contenido centrado */}
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Eyebrow — etiqueta pequeña arriba del título */}
        <p className=" text-[#BD8B7A] text-xs md:text-sm font-semibold uppercase tracking-widest mb-6">
          Dra. María Laura Reartes
        </p>

        {/* Título principal */}
        <h1 className="text-5xl md:text-7xl font-serif font-medium text-[#333835] leading-[1.1] mb-8">
          La elegancia de la <br />
          <span className="italic text-[#BD8B7A]">naturalidad</span>
        </h1>

        {/* Subtítulo */}
        <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mb-20">
          Tratamientos exclusivos diseñados para
          revelar tu versión más radiante.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/contacto"
            className="w-64 sm:w-40 border-2 border-transparent bg-[#9E6B5A] hover:bg-[#BD8B7A]  text-white font-semibold text-sm sm:text-base px-4 py-3 sm:px-5 sm:py-4 rounded-full transition-all duration-300 "
          >
            Contacto
          </Link>
          <Link
            href="/servicios"
            className="w-64 sm:w-40 border-2 border-[#BD8B7A] text-[#BD8B7A] hover:bg-[#BD8B7A] hover:text-white font-semibold text-sm sm:text-base px-4 py-3 sm:px-5 sm:py-4 rounded-full transition-all duration-300"
          >
            Ver servicios
          </Link>
        </div>
      </div>
    </section>
    </>
  )
}