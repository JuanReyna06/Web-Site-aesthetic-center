"use client";
import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/aboutme", label: "Acerca de mí" },
  { href: "/contacto", label: "Contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Efecto para el color de fondo al scrollear
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Efecto Premium: Bloquear el scroll de la página cuando el menú está abierto
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  return (
    <>
      {/* HEADER PRINCIPAL */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#ffe9d4]/90 backdrop-blur-md border-b border-[#ad6f5a]/20 py-3"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex h-14 items-center justify-between overflow-visible">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-gray-900">
            <img
              src="/icono.png"
              alt="Logo"
              className="h-24 lg:h-37.5 w-auto hover:scale-105 transition-transform"
            />
          </Link>

          {/* Links Desktop */}
          <nav className="hidden md:flex items-center gap-16">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-gray-900 hover:text-[#ad6f5a] hover:scale-105 transition-all duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA — Desktop */}
          <div className="hidden md:block">
            <Link
              href="https://wa.me/3517579702"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#ad6f5a] hover:bg-[#ffffff] text-white hover:text-[#ad6f5a] border-2 border-transparent hover:border-[#ad6f5a] text-sm font-semibold py-2 px-4 rounded-lg transition-all duration-300 text-center inline-block"
            >
              Reservar Turno
            </Link>
          </div>

          {/* Botón Hamburguesa — Mobile */}
          <button
            className="md:hidden text-gray-700 hover:text-[#ad6f5a] transition-colors"
            onClick={() => setMenuOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>
      </header>

      {/* MENÚ MOBILE A PANTALLA COMPLETA */}
      {menuOpen && (
        <div
          className="
            fixed inset-0
            bg-[#FAFAFA]
            md:hidden
            flex flex-col
            z-100
            animate-in fade-in duration-300
          "
        >
          {/* Header del menú */}
          <div className="flex items-center justify-between px-6 py-5 bg-[#BD8B7A]/10 border-b border-[#BD8B7A]/20">
            <div>
              <span className="text-xl font-serif text-[#333835]">
                Dra. Reartes
              </span>
              <p className="text-[10px] text-[#BD8B7A] uppercase tracking-[0.2em] mt-0.5">
                Medicina Estética
              </p>
            </div>

            {/* Botón cerrar circular */}
            <button
              onClick={() => setMenuOpen(false)}
              className="
                w-10 h-10 
                flex items-center justify-center
                text-[#333835] bg-white rounded-full shadow-sm hover:scale-105 transition-transform
              "
            >
              <X size={22} />
            </button>
          </div>

          {/* Links del menú */}
          <nav className="flex-1 flex flex-col justify-center px-8 gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="
                  flex items-center justify-between
                  py-5
                  border-b border-[#333835]/10 last:border-b-0
                  group
                "
              >
                <span className="
                  text-xl  text-[#333835]
                  group-hover:text-[#BD8B7A]
                  transition-colors duration-200
                ">
                  {link.label}
                </span>
                <ArrowRight
                  size={20}
                  className="text-[#BD8B7A] opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-4 group-hover:translate-x-0"
                />
              </Link>
            ))}
          </nav>

          {/* Footer del menú */}
          <div className="px-6 pb-12 flex flex-col gap-5">
            <Link
              href="https://wa.me/3517579702"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="
                max-w-70 mx-auto
                bg-[#9E6B5A] hover:bg-[#BD8B7A]
                text-white font-semibold
                block w-full text-center
                text-base 
                py-4 rounded-full shadow-lg shadow-[#9E6B5A]/20
                transition-all duration-300
              "
            >
              Reservar turno
            </Link>
          </div>
        </div>
      )}
    </>
  );
}