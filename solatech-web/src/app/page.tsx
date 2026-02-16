"use client";

import Image from "next/image";
import { Mail, Phone, MapPin, ArrowRight, Shield, Network, Server, Wrench, CheckCircle, MessageCircle, Loader2, ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("submitting");
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    try {
      const response = await fetch("https://formspree.io/f/mpqjdlbz", {
        method: "POST",
        body: formData,
        headers: {
          "Accept": "application/json"
        }
      });
      
      if (response.ok) {
        setFormState("success");
        form.reset();
      } else {
        setFormState("error");
      }
    } catch (error) {
      setFormState("error");
    }
  };

  return (
    <div className="min-h-screen bg-white font-[family-name:var(--font-poppins)]">
      <a
        href="https://wa.me/18294884326"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all hover:scale-110"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </a>

      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="/" className="flex items-center gap-2" aria-label="Solatech Group - Inicio">
            <Image 
              src="/logos/LOGO FULL.webp" 
              alt="Solatech Group" 
              width={180} 
              height={60}
              className="h-14 w-auto"
              priority
            />
          </a>
          <div className="hidden md:flex items-center gap-8">
            <a href="#servicios" className="text-gray-600 hover:text-[#ec682b] transition-colors">Servicios</a>
            <a href="#marcas" className="text-gray-600 hover:text-[#ec682b] transition-colors">Marcas</a>
            <a href="#faq" className="text-gray-600 hover:text-[#ec682b] transition-colors">FAQ</a>
            <a href="#nosotros" className="text-gray-600 hover:text-[#ec682b] transition-colors">Nosotros</a>
            <a href="#contacto" className="text-gray-600 hover:text-[#ec682b] transition-colors">Contacto</a>
            <a href="#contacto" className="bg-[#ec682b] text-white px-5 py-2 rounded-lg hover:bg-[#d45a20] transition-colors">
              Cotizar
            </a>
          </div>
          <button 
            className="md:hidden p-2 text-gray-600 hover:text-[#ec682b]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menú"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden border-t border-gray-100 overflow-hidden"
            >
              <div className="px-6 py-4 space-y-4 bg-white">
                <a href="#servicios" className="block text-gray-600 hover:text-[#ec682b] py-2" onClick={() => setMobileMenuOpen(false)}>Servicios</a>
                <a href="#marcas" className="block text-gray-600 hover:text-[#ec682b] py-2" onClick={() => setMobileMenuOpen(false)}>Marcas</a>
                <a href="#faq" className="block text-gray-600 hover:text-[#ec682b] py-2" onClick={() => setMobileMenuOpen(false)}>FAQ</a>
                <a href="#nosotros" className="block text-gray-600 hover:text-[#ec682b] py-2" onClick={() => setMobileMenuOpen(false)}>Nosotros</a>
                <a href="#contacto" className="block text-gray-600 hover:text-[#ec682b] py-2" onClick={() => setMobileMenuOpen(false)}>Contacto</a>
                <a href="#contacto" className="block bg-[#ec682b] text-white px-5 py-3 rounded-lg text-center hover:bg-[#d45a20] transition-colors" onClick={() => setMobileMenuOpen(false)}>
                  Cotizar
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <section id="hero" className={`pt-32 pb-20 px-6 bg-gradient-to-br from-gray-50 to-orange-50 ${mobileMenuOpen ? 'pt-48' : ''}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
            >
              <motion.div 
                variants={fadeInUp}
                className="inline-flex items-center gap-2 bg-[#ec682b]/10 text-[#ec682b] px-4 py-2 rounded-full text-sm font-medium mb-6"
              >
                <Shield className="w-4 h-4" />
                Soluciones Tecnológicas Integrales
              </motion.div>
              <motion.h1 
                variants={fadeInUp}
                className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6 font-[family-name:var(--font-montserrat)]"
              >
                Impulsamos tu negocio con
                <span className="text-[#ec682b]"> tecnología de vanguardia</span>
              </motion.h1>
              <motion.p 
                variants={fadeInUp}
                className="text-xl text-gray-600 mb-8 leading-relaxed"
              >
                Servicios especializados en soporte técnico, seguridad, cableado estructurado, 
                administración de redes e integraciones tecnológicas para empresas.
              </motion.p>
              <motion.div 
                variants={fadeInUp}
                className="flex flex-wrap gap-4"
              >
                <a href="#contacto" className="bg-[#ec682b] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#d45a20] transition-colors inline-flex items-center gap-2">
                  Consultar Ahora
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a href="#servicios" className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                  Ver Servicios
                </a>
              </motion.div>
              <motion.div 
                variants={fadeInUp}
                className="flex items-center gap-8 mt-10 pt-10 border-t border-gray-200"
              >
                <div>
                  <div className="text-3xl font-bold text-gray-900">5+</div>
                  <div className="text-gray-500">Años de Experiencia</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">98%</div>
                  <div className="text-gray-500">Clientes Satisfechos</div>
                </div>
              </motion.div>
            </motion.div>
            <div className="relative">
              <div className="absolute inset-0 bg-[#ec682b] rounded-3xl transform rotate-3"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl p-8">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-[#ec682b]/10 p-6 rounded-2xl">
                    <Server className="w-10 h-10 text-[#ec682b] mb-3" />
                    <div className="font-semibold text-gray-900">Infraestructura</div>
                    <div className="text-sm text-gray-500">Data centers</div>
                  </div>
                  <div className="bg-[#5530d6]/10 p-6 rounded-2xl">
                    <Shield className="w-10 h-10 text-[#5530d6] mb-3" />
                    <div className="font-semibold text-gray-900">Ciberseguridad</div>
                    <div className="text-sm text-gray-500">Protección total</div>
                  </div>
                  <div className="bg-[#ec682b]/10 p-6 rounded-2xl">
                    <Network className="w-10 h-10 text-[#ec682b] mb-3" />
                    <div className="font-semibold text-gray-900">Redes</div>
                    <div className="text-sm text-gray-500">Cableado estructurado</div>
                  </div>
                  <div className="bg-[#5530d6]/10 p-6 rounded-2xl">
                    <Wrench className="w-10 h-10 text-[#5530d6] mb-3" />
                    <div className="font-semibold text-gray-900">Soporte</div>
                    <div className="text-sm text-gray-500">Mantenimiento</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="servicios" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-[family-name:var(--font-montserrat)]">Nuestros Servicios</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Brindamos soluciones tecnológicas ajustadas a las necesidades de transformación digital 
              de las empresas, mejorando su competitividad mediante la aplicación de nuevas tecnologías.
            </p>
          </motion.div>
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                icon: Wrench,
                title: "Soporte Técnico",
                desc: "Mantenimiento preventivo y correctivo de equipos, soporte remoto y en sitio para solucionar problemas técnicos de infraestructura.",
                features: ["Soporte remoto 24/7", "Mantenimiento preventivo", "Diagnóstico y reparación"],
                bg: "bg-[#ec682b]/10",
                text: "text-[#ec682b]"
              },
              {
                icon: Shield,
                title: "Seguridad Informática",
                desc: "Implementación de sistemas de seguridad como CCTV, controles de acceso, y firewalls para proteger los activos digitales de tu empresa.",
                features: ["CCTV y videovigilancia", "Controles de acceso", "Firewalls y antivirus"],
                bg: "bg-[#5530d6]/10",
                text: "text-[#5530d6]"
              },
              {
                icon: Network,
                title: "Cableado Estructurado",
                desc: "Instalación y administración de routers, switches, servidores, y sistemas operativos para una infraestructura robusta.",
                features: ["Cableado Cat6 y fibra óptica", "Redes empresariales", "Configuración de servidores"],
                bg: "bg-[#ec682b]/10",
                text: "text-[#ec682b]"
              },
              {
                icon: Server,
                title: "Desarrollo de Software",
                desc: "Desarrollo de software a medida, incluyendo aplicaciones de escritorio, web y móviles, orientadas a resolver necesidades específicas.",
                features: ["Aplicaciones web", "Apps móviles", "Software a medida"],
                bg: "bg-[#5530d6]/10",
                text: "text-[#5530d6]"
              },
              {
                icon: CheckCircle,
                title: "Asesoría de TI",
                desc: "Consultoría en soluciones tecnológicas ajustadas a las necesidades del cliente para impulsar la transformación digital.",
                features: ["Planificación tecnológica", "Auditorías de sistemas", "Optimización de procesos"],
                bg: "bg-[#ec682b]/10",
                text: "text-[#ec682b]"
              },
              {
                icon: Phone,
                title: "Centrales Telefónicas",
                desc: "Instalación y mantenimiento de centrales telefónicas VoIP y tradicionales para una comunicación empresarial eficiente.",
                features: ["VoIP y Asterisk", "Configuración y mantenimiento", "Soporte técnico especializado"],
                bg: "bg-[#5530d6]/10",
                text: "text-[#5530d6]"
              }
            ].map((service, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                className="bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className={`w-14 h-14 ${service.bg} rounded-xl flex items-center justify-center mb-6`}>
                  <service.icon className={`w-7 h-7 ${service.text}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-[family-name:var(--font-montserrat)]">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{service.desc}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-500">
                      <CheckCircle className={`w-4 h-4 ${service.text}`} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a 
                  href="#contacto" 
                  className={`mt-6 inline-flex items-center gap-2 text-sm font-semibold ${service.text} hover:underline`}
                >
                  Cotizar este servicio
                  <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="marcas" className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-[family-name:var(--font-montserrat)]">Marcas con las que trabajamos</h2>
            <p className="text-lg text-gray-600">
              Confiamos en los mejores fabricantes para garantizar calidad en cada proyecto
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center"
          >
            {[
              { name: "Cisco", domain: "cisco.com" },
              { name: "Grandstream", domain: "grandstream.com" },
              { name: "Panduit", domain: "panduit.com" },
              { name: "TP-Link", domain: "tp-link.com" },
              { name: "Microsoft", domain: "microsoft.com" },
              { name: "Aruba", domain: "arubanetworks.com" },
              { name: "APC", domain: "apc.com" },
              { name: "HP", domain: "hp.com" },
              { name: "Dell", domain: "dell.com" },
              { name: "Fortinet", domain: "fortinet.com" },
              { name: "Hikvision", domain: "hikvision.com" },
              { name: "Dahua", domain: "dahuatechnology.com" },
              { name: "Samsung", domain: "samsung.com" }
            ].map((brand, index) => (
              <div 
                key={index}
                className="flex flex-col items-center justify-center"
              >
                <img 
                  src={`https://logo.clearbit.com/${brand.domain}`}
                  alt={brand.name}
                  className="w-16 h-16 md:w-20 md:h-20 object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="faq" className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-[family-name:var(--font-montserrat)]">Preguntas Frecuentes</h2>
            <p className="text-xl text-gray-600">
              Resolvemos tus dudas sobre nuestros servicios de tecnología
            </p>
          </motion.div>
          <div className="space-y-4">
            {[
              {
                question: "¿Qué incluye el servicio de soporte técnico?",
                answer: "Nuestro servicio de soporte técnico incluye diagnóstico remoto y presencial, mantenimiento preventivo, resolución de incidencias, configuración de equipos y software, y asesoría técnica permanente para tu empresa."
              },
              {
                question: "¿Cuánto tiempo toma implementar una red corporativa?",
                answer: "El tiempo de implementación depende del tamaño de la infraestructura. Para oficinas pequeñas puede tomar 1-2 días, mientras que proyectos más grandes pueden tomar varias semanas. Siempre entregamos un cronograma detallado antes de comenzar."
              },
              {
                question: "¿Ofrecen garantías en sus servicios?",
                answer: "Sí, todos nuestros servicios incluyen garantía. Ofrecemos garantía de 30 días en soporte técnico, 6 meses en instalaciones de red y 12 meses en desarrollo de software, con opción a extendido."
              },
              {
                question: "¿Puedo contratar solo un servicio específico?",
                answer: "Claro que sí. Puedes contratar cualquiera de nuestros servicios de forma independiente. También offercemos paquetes personalizados que combinan múltiples servicios para adaptarnos a tus necesidades."
              },
              {
                question: "¿Trabajan con empresas de todos los tamaños?",
                answer: "Sí, tenemos experiencia con PYMEs, medianas empresas y grandes corporaciones. Nos adaptamos a las necesidades y presupuesto de cada cliente, ofreciendo soluciones escalables."
              },
              {
                question: "¿Cómo solicito una cotización?",
                answer: "Puedes solicitarnos una cotización a través del formulario de contacto en esta página, llamándonos al 829-488-4326, o escribiéndonos a info@solatechgp.com. Respondemos en menos de 24 horas."
              }
            ].map((faq, index) => (
              <motion.div 
                key={index} 
                className="bg-white border border-gray-200 rounded-xl overflow-hidden"
                initial={false}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: openFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-5 h-5 text-[#ec682b] flex-shrink-0" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-4">
                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="nosotros" className="py-20 px-6 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 font-[family-name:var(--font-montserrat)]">
                ¿Por qué elegir <span className="text-[#ec682b]">Solatech Group</span>?
              </h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Solatech Group es una compañía de base tecnológica y de seguridad de la información, 
                con un gran sentido de responsabilidad social que busca el máximo beneficio de sus clientes. 
                Nos diferencia nuestro enfoque en la adaptabilidad y cercanía al cliente, además de nuestra 
                capacidad para ofrecer soporte técnico y servicios integrales de infraestructura.
              </p>
              <div className="space-y-4">
                {[
                  "Transparencia, integridad y agilidad",
                  "Equipo técnico certificado y experimentado",
                  "Compromiso con la excelencia y puntualidad"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#ec682b]" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contacto" className="py-20 px-6 bg-[#ec682b]/5">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="p-12 bg-[#ec682b] text-white">
                <h2 className="text-3xl font-bold mb-6 font-[family-name:var(--font-montserrat)]">Contáctanos</h2>
                <p className="text-white/80 mb-8">
                  ¿Necesitas asesoramiento tecnológico? Estamos listos para ayudarte.
                </p>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-white/70 text-sm">Teléfono</div>
                      <div className="font-semibold">829-488-4326</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-white/70 text-sm">Email</div>
                      <div className="font-semibold">info@solatechgp.com</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-white/70 text-sm">Ubicación</div>
                      <div className="font-semibold">Santo Domingo, República Dominicana</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-12">
                {formState === "success" ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">¡Mensaje Enviado!</h3>
                    <p className="text-gray-600 mb-6">Gracias por contactarnos. Te responderemos pronto.</p>
                    <button 
                      onClick={() => setFormState("idle")}
                      className="text-[#ec682b] font-medium hover:underline"
                    >
                      Enviar otro mensaje
                    </button>
                  </div>
                ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-2">Nombre *</label>
                      <input 
                        type="text" 
                        id="nombre"
                        name="nombre"
                        required
                        disabled={formState === "submitting"}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#ec682b] focus:border-transparent disabled:opacity-50" 
                        placeholder="Tu nombre" 
                      />
                    </div>
                    <div>
                      <label htmlFor="empresa" className="block text-sm font-medium text-gray-700 mb-2">Empresa</label>
                      <input 
                        type="text" 
                        id="empresa"
                        name="empresa"
                        disabled={formState === "submitting"}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#ec682b] focus:border-transparent disabled:opacity-50" 
                        placeholder="Nombre de tu empresa" 
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                    <input 
                      type="email" 
                      id="email"
                      name="email"
                      required
                      disabled={formState === "submitting"}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#ec682b] focus:border-transparent disabled:opacity-50" 
                      placeholder="tu@email.com" 
                    />
                  </div>
                  <div>
                    <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-2">Teléfono</label>
                    <input 
                      type="tel" 
                      id="telefono"
                      name="telefono"
                      disabled={formState === "submitting"}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#ec682b] focus:border-transparent disabled:opacity-50" 
                      placeholder="829-488-4326" 
                    />
                  </div>
                  <div>
                    <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-2">Mensaje *</label>
                    <textarea 
                      id="mensaje"
                      name="mensaje"
                      required
                      disabled={formState === "submitting"}
                      rows={4} 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#ec682b] focus:border-transparent disabled:opacity-50" 
                      placeholder="¿En qué podemos ayudarte?"
                    ></textarea>
                  </div>
                  {formState === "error" && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                      Hubo un error al enviar el mensaje. Por favor intenta nuevamente o contáctanos por WhatsApp.
                    </div>
                  )}
                  <button 
                    type="submit" 
                    disabled={formState === "submitting"}
                    className="w-full bg-[#ec682b] text-white py-4 rounded-lg font-semibold hover:bg-[#d45a20] transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {formState === "submitting" ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      "Enviar Mensaje"
                    )}
                  </button>
                </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <a href="/" className="flex items-center gap-2 mb-4" aria-label="Solatech Group - Inicio">
                <Image 
                  src="/logos/LOGO FULL.webp" 
                  alt="Solatech Group" 
                  width={160} 
                  height={50}
                  className="h-14 w-auto"
                />
              </a>
              <p className="text-gray-400">Soluciones tecnológicas integrales para empresas modernas en Santo Domingo, República Dominicana.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 font-[family-name:var(--font-montserrat)]">Servicios</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#servicios" className="hover:text-[#ec682b] transition-colors">Soporte Técnico</a></li>
                <li><a href="#servicios" className="hover:text-[#ec682b] transition-colors">Seguridad Informática</a></li>
                <li><a href="#servicios" className="hover:text-[#ec682b] transition-colors">Desarrollo de Software</a></li>
                <li><a href="#servicios" className="hover:text-[#ec682b] transition-colors">Infraestructura de Redes</a></li>
                <li><a href="#servicios" className="hover:text-[#ec682b] transition-colors">Asesoría de TI</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 font-[family-name:var(--font-montserrat)]">Empresa</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#marcas" className="hover:text-[#ec682b] transition-colors">Marcas</a></li>
                <li><a href="#nosotros" className="hover:text-[#ec682b] transition-colors">Sobre Nosotros</a></li>
                <li><a href="#faq" className="hover:text-[#ec682b] transition-colors">FAQ</a></li>
                <li><a href="#contacto" className="hover:text-[#ec682b] transition-colors">Contacto</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 font-[family-name:var(--font-montserrat)]">Contacto</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:info@solatechgp.com" className="hover:text-[#ec682b] transition-colors">info@solatechgp.com</a>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <a href="tel:18294884326" className="hover:text-[#ec682b] transition-colors">829-488-4326</a>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Santo Domingo, RD
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            © 2026 Solatech Group. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
