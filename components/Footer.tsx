'use client';

import { Instagram, Facebook, Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";

const links = {
  navegacion: [
    { label: "Inicio",     href: "/" },
    { label: "Servicios",  href: "/servicios" },
    { label: "Sobre mí",   href: "/aboutme" },
    { label: "Contacto",   href: "/contacto" },
  ]
};

export default function Footer() {
  return (
    <footer className="bg-[#333835] text-white">

      {/* Bloque principal */}
      {/* Aumentamos el padding vertical (py-16) para que respire más */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">

          {/* Columna 1 — Brand */}
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="text-xl font-serif font-medium text-white">
                Dra. Reartes Maria Laura
              </h3>
              <p className="text-[#BD8B7A] text-xs uppercase tracking-[0.3em] mt-2">
                Medicina Estética
              </p>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Especialista en armonización facial y corporal. 
              Criterio clínico con visión artística para resaltar tu mejor versión.
            </p>

            <div className="flex items-center gap-4 mt-2">
              <Link
                href="https://www.instagram.com/dra.laurareartes"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#BD8B7A] flex items-center justify-center transition-all duration-300"
              >
                <Instagram size={18} />
              </Link>
              <Link
                href="https://www.facebook.com/share/1Fi7Vv5GLv"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#BD8B7A] flex items-center justify-center transition-all duration-300"
              >
                <Facebook size={18} />
              </Link>
            </div>
          </div>

          {/* Columna 2 — Navegación */}
          {/* Añadimos md:justify-self-center para centrar el bloque entero en tablets/desktop */}
          <div className="flex flex-col gap-6 md:justify-self-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#BD8B7A]">
              Navegación
            </p>
            <ul className="flex flex-col gap-4">
              {links.navegacion.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3 — Contacto rápido */}
          {/* Quitamos el text-center para que los iconos queden alineados a la izquierda junto al texto */}
          <div className="flex flex-col gap-6 md:justify-self-end">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#BD8B7A]">
              Contacto
            </p>
            <div className="flex flex-col gap-5">
              <Link
                href="https://wa.me/3517579702"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                <div className="w-8 h-8 rounded-full bg-white/5 group-hover:bg-[#BD8B7A] flex items-center justify-center transition-colors duration-300 shrink-0">
                  <Phone size={14} className="text-[#BD8B7A] group-hover:text-white transition-colors" />
                </div>
                <span className="text-sm text-gray-400 group-hover:text-white transition-colors duration-200">
                  +54 351 757-9702
                </span>
              </Link>

              <Link
                href="mailto:mlaurareartes69@hotmail.com"
                className="flex items-center gap-3 group"
              >
                <div className="w-8 h-8 rounded-full bg-white/5 group-hover:bg-[#BD8B7A] flex items-center justify-center transition-colors duration-300 shrink-0">
                  <Mail size={14} className="text-[#BD8B7A] group-hover:text-white transition-colors" />
                </div>
                <span className="text-sm text-gray-400 group-hover:text-white transition-colors duration-200">
                  mlaurareartes69@hotmail.com
                </span>
              </Link>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                  <MapPin size={14} className="text-[#BD8B7A]" />
                </div>
                <span className="text-sm text-gray-400">
                  Pedro de Oroñate 253, Córdoba
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Línea divisoria */}
      <div className="border-t border-white/10 bg-[#2a2e2c]">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} Dra. Reartes Maria Laura. Todos los derechos reservados.
          </p>
          <p className="text-xs text-gray-500">
            Desarrollado por <Link href="https://www.linkedin.com/in/juan-reyna" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#BD8B7A] font-medium transition-colors">
              Reyna Juan Ignacio
            </Link>
          </p>
        </div>
      </div>

    </footer>
  );
}