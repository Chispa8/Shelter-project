import React from "react"
import { motion } from "framer-motion"

function Volunteer() {
  const opportunities = [
    {
      id: 1,
      title: "Cuidador de Animales",
      description: "Ayuda a alimentar, limpiar y jugar con nuestros animales.",
      requirements:
        "Disponibilidad de 4 horas semanales, amor por los animales.",
      icon: (
        <svg
          className="w-12 h-12 text-[#A690A4]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Paseador de Perros",
      description: "Lleva a nuestros perros a dar paseos y ejercitarse.",
      requirements: "Buena condición física, experiencia con perros.",
      icon: (
        <svg
          className="w-12 h-12 text-[#A690A4]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
          />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Asistente de Eventos",
      description:
        "Ayuda en la organización y ejecución de nuestros eventos de adopción.",
      requirements:
        "Habilidades de comunicación, disponibilidad en fines de semana.",
      icon: (
        <svg
          className="w-12 h-12 text-[#A690A4]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
    },
  ]

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
        <h1 className="text-4xl font-extrabold mb-6 text-center text-[#8B4513]">
          Voluntariado
        </h1>
        <p className="text-xl text-center mb-12 text-[#8B4513]">
          Únete a nuestro equipo de voluntarios y ayuda a hacer una diferencia
          en la vida de los animales necesitados.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {opportunities.map((opportunity, index) => (
            <motion.div
              key={opportunity.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="p-8">
                <div className="flex justify-center mb-4">
                  {opportunity.icon}
                </div>
                <h2 className="text-2xl font-bold mb-4 text-center text-[#8B4513]">
                  {opportunity.title}
                </h2>
                <p className="text-gray-600 mb-6 text-center">
                  {opportunity.description}
                </p>
                <div className="bg-[#FCD0A1] p-4 rounded-lg">
                  <p className="text-sm text-[#8B4513] font-semibold">
                    <strong>Requisitos:</strong> {opportunity.requirements}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        {/* <div className="mt-12 text-center">
          <a
            href="#"
            className="bg-[#8B4513] hover:bg-[#A690A4] text-white font-bold py-3 px-8 rounded-full transition duration-300 inline-block text-lg"
          >
            Postúlate como Voluntario
          </a>
        </div> */}
      </div>
    </div>
  )
}

export default Volunteer
