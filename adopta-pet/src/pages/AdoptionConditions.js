import React from "react"
import { motion } from "framer-motion"

function AdoptionConditions() {
  const conditions = [
    "Ser mayor de 18 años.",
    "Tener un domicilio estable.",
    "Contar con el consentimiento de todos los miembros de la familia.",
    "Tener tiempo y recursos para cuidar adecuadamente al animal.",
    "Comprometerse a proporcionar atención veterinaria regular.",
    "Aceptar una visita de seguimiento después de la adopción.",
  ]

  const process = [
    "Llenar el formulario de solicitud de adopción.",
    "Entrevista con nuestro equipo de adopciones.",
    "Visita al hogar para asegurar un ambiente adecuado.",
    "Selección del animal compatible con tu estilo de vida.",
    "Firma del contrato de adopción.",
    "Pago de la cuota de adopción que cubre vacunas y esterilización.",
  ]

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div
      className="min-h-screen py-12 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundColor: "#FFEFD5",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-12 text-center text-[#8B4513]">
          Condiciones de Adopción
        </h1>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-[#A690A4] py-4 px-6">
              <h2 className="text-2xl font-bold text-white">
                Requisitos para Adoptar
              </h2>
            </div>
            <div className="p-6">
              <ul className="space-y-3">
                {conditions.map((condition, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="h-6 w-6 text-[#8B4513] mr-2 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700">{condition}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="bg-[#8B4513] py-4 px-6">
              <h2 className="text-2xl font-bold text-white">
                Proceso de Adopción
              </h2>
            </div>
            <div className="p-6">
              <ol className="space-y-3">
                {process.map((step, index) => (
                  <li key={index} className="flex items-start">
                    <span className="bg-[#FCD0A1] text-[#8B4513] font-bold rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0">
                      {index + 1}
                    </span>
                    <span className="text-gray-700">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default AdoptionConditions
