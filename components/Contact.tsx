"use client";
import { useForm as useFormspree } from "@formspree/react";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import Link from "next/link";
import {motion , Variants} from "framer-motion";

// ── Tipos ──────────────────────────────────────────────────────────────────────
interface FormData {
  nombre:   string;
  telefono: string;
  servicio: string;
  mensaje:  string;
}

interface FormErrors {
  nombre?:   string;
  telefono?: string;
  servicio?: string;
}

// ── Constantes ─────────────────────────────────────────────────────────────────
const WHATSAPP_NUMBER = "5493517579702";
const mensajeBase = "¡Hola! Me gustaría consultar por un turno con la Dra. Reartes.";
const linkWsp = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensajeBase)}`;

const emailDestino = "mlaurareartes69@hotmail.com";
const asuntoBase = "Consulta de Turno / Información";
// Usamos \n para hacer saltos de línea (un "Enter")
const cuerpoBase = "Hola Dra. Reartes,\n\nMe gustaría solicitar información y disponibilidad para agendar un turno.\n\nAguardo sus comentarios. ¡Muchas gracias!";

// 2. Armamos el link mágico (fijate que unimos subject y body con un "&")
const linkEmail = `mailto:${emailDestino}?subject=${encodeURIComponent(asuntoBase)}&body=${encodeURIComponent(cuerpoBase)}`;
const infoContacto = [
  {
    icon: Phone,
    label: "Teléfono / WhatsApp",
    valor: "+54 351 757-9702",
    href: linkWsp,
  },
  {
    icon: Mail,
    label: "Email",
    valor: "mlaurareartes69@hotmail.com",
    href: linkEmail,
  },
  {
    icon: MapPin,
    label: "Dirección",
    valor: "Pedro de Oroñate 253, Córdoba",
    href: "https://maps.google.com/?q=Pedro+de+Oroñate+253+Córdoba",
  },
  {
    icon: Clock,
    label: "Horarios",
    valor: "Lun–Vie: 9:00 – 19:00 · Sáb: 9:00 – 13:00",
    href: null,
  },
];

const servicios = [
  "Toxina Botulínica",
  "Rellenos",
  "Bioestimulador",
  "Plasma Rico en Plaquetas",
  "Mesoterapia Facial",
  "Mesoterapia Corporal",
  "Adiposidad Localizada",
];

// ── Validación ─────────────────────────────────────────────────────────────────
const soloLetras   = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]+$/;
const soloNumeros  = /^[0-9+\-\s()]{7,15}$/;

function validar(form: FormData): FormErrors {
  const errors: FormErrors = {};

  if (!form.nombre.trim()) {
    errors.nombre = "El nombre es obligatorio.";
  } else if (!soloLetras.test(form.nombre.trim())) {
    errors.nombre = "El nombre solo puede contener letras.";
  }

  if (!form.telefono.trim()) {
    errors.telefono = "El teléfono es obligatorio.";
  } else if (!soloNumeros.test(form.telefono.trim())) {
    errors.telefono = "Ingresá un teléfono válido (solo números).";
  }

  if (!form.servicio) {
    errors.servicio = "Seleccioná un servicio.";
  }

  return errors;
}

// ── Input reutilizable ─────────────────────────────────────────────────────────
interface InputFieldProps {
  label:       string;
  error?:      string;
  children:    React.ReactNode;
}

function InputField({ label, error, children }: InputFieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-medium text-gray-500 uppercase tracking-wider">
        {label}
      </label>
      {children}
      {error && (
        <p className="text-xs text-red-500 mt-0.5">{error}</p>
      )}
    </div>
  );
}

// ── Clase base de inputs ───────────────────────────────────────────────────────
// La separás en una constante para no repetirla en cada input
function inputClass(hasError: boolean) {
  return `
    px-4 py-3 rounded-xl border text-[#333835] text-sm
    placeholder-gray-300 bg-white
    focus:outline-none focus:ring-2 transition duration-200
    ${hasError
      ? "border-red-400 focus:ring-red-300/40 focus:border-red-400"
      : "border-gray-200 focus:ring-[#BD8B7A]/30 focus:border-[#BD8B7A]"
    }
  `;
}

// ── VARIANTES DE ANIMACIÓN ─────────────────────────────────────────────────────

const headerVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] } }
};

const leftColumnVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 } // Cascada para los íconos
  }
};

const itemLeftVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const formVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98], delay: 0.4 } }
};


// ── Componente principal ───────────────────────────────────────────────────────
export default function Contact() {
  const [form, setForm] = useState<FormData>({
    nombre:   "",
    telefono: "",
    servicio: "",
    mensaje:  "",
  });

  const [errors,  setErrors]  = useState<FormErrors>({});
  const [enviado, setEnviado] = useState(false);
  const [state, submitToFormspree] = useFormspree("mykbbwzw");


  // Actualiza el campo y limpia el error de ese campo en tiempo real
  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));

    // Si ya había un error en ese campo, lo limpia mientras el usuario escribe
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Validar
    const nuevosErrores = validar(form);
    if (Object.keys(nuevosErrores).length > 0) {
      setErrors(nuevosErrores);
      return; // Corta acá si hay errores — no envía nada
    }

    await submitToFormspree({
      name: form.nombre,
      phone: form.telefono,
      subject: `Nueva consulta Web - ${form.servicio}`,
      message: `Paciente: ${form.nombre} Teléfono: ${form.telefono} Servicio: ${form.servicio} Consulta: ${form.mensaje || "Sin mensaje adicional"}`,
    })

    // Limpiar el form y mostrar confirmación
    setEnviado(true);
    setForm({ nombre: "", telefono: "", servicio: "", mensaje: "" });
    setErrors({});
  }

  return (
    <section id="contacto" className="py-24 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div 
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-20"
        >
          <p className="text-[#BD8B7A] text-xs font-bold uppercase tracking-[0.3em] mb-4">
            Contacto
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-medium text-[#333835] mb-4">
            Reservá tu <span className="italic text-[#BD8B7A]">consulta</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto leading-relaxed">
            Completá el formulario y te respondemos por WhatsApp a la brevedad.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Info de contacto */}
          <div className="flex flex-col gap-10">
            <motion.div 
              variants={leftColumnVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="flex flex-col gap-6"
            >
              {infoContacto.map(({ icon: Icon, label, valor, href }) => (
                <motion.div variants={itemLeftVariants} key={label} className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#BD8B7A]/10 flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-[#BD8B7A]" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-0.5">
                      {label}
                    </p>
                    {href ? (
                      <Link
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#333835] font-medium hover:text-[#BD8B7A] transition-colors duration-200"
                      >
                        {valor}
                      </Link>
                    ) : (
                      <p className="text-[#333835] font-medium">{valor}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Mapa */}
            <motion.div variants={itemLeftVariants} className="overflow-hidden rounded-2xl border border-gray-100 shadow-sm h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.602843515297!2d-64.2362836243934!3d-31.39751277427043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x943298c9208fb3cf%3A0x4facef2a89817e19!2sPedro%20de%20O%C3%B1ate%20253%2C%20X5002HWE%20C%C3%B3rdoba!5e0!3m2!1ses-419!2sar!4v1774736986990!5m2!1ses-419!2sar" 
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            
            </motion.div>
          </div>

          {/* Formulario */}
          <motion.div 
            variants={formVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-10">

            {/* Estado de éxito */}
            {enviado ? (
              <div className="h-full flex flex-col items-center justify-center text-center gap-4 py-12">
                <div className="w-16 h-16 rounded-full bg-[#BD8B7A]/10 flex items-center justify-center">
                  <Send size={24} className="text-[#BD8B7A]" />
                </div>
                <h3 className="text-2xl font-serif text-[#333835]">
                  ¡Mensaje enviado!
                </h3>
                <p className="text-gray-500 text-sm max-w-xs leading-relaxed">
                   Tu consulta fue enviada correctamente. Te responderemos pronto.
                </p>
                <button
                  onClick={() => setEnviado(false)}
                  className="mt-2 text-sm text-[#BD8B7A] hover:underline"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">

                {/* Nombre + Teléfono */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <InputField label="Nombre *" error={errors.nombre}>
                    <input
                      type="text"
                      name="nombre"
                      value={form.nombre}
                      onChange={handleChange}
                      placeholder="Tu nombre"
                      className={inputClass(!!errors.nombre)}
                    />
                  </InputField>

                  <InputField label="Teléfono *" error={errors.telefono}>
                    <input
                      type="tel"
                      name="telefono"
                      value={form.telefono}
                      onChange={handleChange}
                      placeholder="Ej: 351 123-4567"
                      className={inputClass(!!errors.telefono)}
                    />
                  </InputField>
                </div>
               
                {/* Servicio */}
                <InputField label="Servicio de interés *" error={errors.servicio}>
                  <select
                    name="servicio"
                    value={form.servicio}
                    onChange={handleChange}
                    className={inputClass(!!errors.servicio)}
                  >
                    <option value="" disabled hidden>Seleccioná un tratamiento</option>
                    {servicios.map((service) => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                </InputField>

                {/* Mensaje — opcional */}
                <InputField label="Mensaje (opcional)">
                  <textarea
                    name="mensaje"
                    value={form.mensaje}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Contanos en qué podemos ayudarte..."
                    className={inputClass(false) + " resize-none"}
                  />
                </InputField>

                <p className="text-xs text-gray-400">
                  * Campos obligatorios
                </p>

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="
                    w-auto sm:w-auto flex items-center justify-center gap-2
                    bg-[#9E6B5A] hover:bg-[#BD8B7A]
                    disabled:opacity-60 disabled:cursor-not-allowed
                    text-white font-semibold text-sm
                    py-4 rounded-full
                    shadow-lg shadow-[#9E6B5A]/30
                    active:scale-95
                    transition-all duration-300
                  "
                >
                  <Send size={16} />
                  {state.submitting ? "Enviando..." : "Enviar consulta"}
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}