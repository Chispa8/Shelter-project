import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

function Events() {
  const [expandedEvent, setExpandedEvent] = useState(null)

  const events = [
    {
      id: 1,
      title: "Feria de Adopción Anual",
      date: "15 de Julio, 2023",
      description:
        "Nuestra feria anual donde podrás conocer a todos nuestros animales disponibles para adopción.",
      image: "/placeholder.svg?height=200&width=300",
      fullDescription:
        "Únete a nosotros en nuestra Feria de Adopción Anual, donde tendrás la oportunidad de conocer a todos nuestros adorables animales que buscan un hogar permanente. Habrá actividades para toda la familia, charlas informativas sobre el cuidado de mascotas y la posibilidad de iniciar el proceso de adopción en el mismo día. ¡No te pierdas esta maravillosa oportunidad de cambiar una vida!",
      location: "Parque Central de la Ciudad",
      time: "10:00 AM - 6:00 PM",
    },
    {
      id: 2,
      title: "Carrera Benéfica 'Patas por una Causa'",
      date: "5 de Septiembre, 2023",
      description:
        "Corre con tu mascota y ayuda a recaudar fondos para nuestro refugio.",
      image: "/placeholder.svg?height=200&width=300",
      fullDescription:
        "Participa en nuestra carrera benéfica anual 'Patas por una Causa'. Este evento no solo es una oportunidad para hacer ejercicio con tu mascota, sino también para recaudar fondos vitales para nuestro refugio. Habrá categorías para corredores con y sin mascotas, así como una caminata familiar. Todos los fondos recaudados se destinarán directamente al cuidado de nuestros animales rescatados.",
      location: "Circuito del Parque Metropolitano",
      time: "8:00 AM - 12:00 PM",
    },
    {
      id: 3,
      title: "Taller de Cuidado de Mascotas",
      date: "20 de Octubre, 2023",
      description:
        "Aprende sobre el cuidado adecuado de perros y gatos con nuestros expertos veterinarios.",
      image: "/placeholder.svg?height=200&width=300",
      fullDescription:
        "Nuestro Taller de Cuidado de Mascotas es una oportunidad única para aprender de expertos veterinarios sobre cómo cuidar mejor a tus compañeros peludos. Cubriremos temas como nutrición, ejercicio, cuidado dental, primeros auxilios básicos y más. Este taller es ideal tanto para nuevos dueños de mascotas como para aquellos que quieren refrescar sus conocimientos. Plazas limitadas, ¡reserva la tuya hoy!",
      location: "Centro Comunitario AdoptaPet",
      time: "2:00 PM - 5:00 PM",
    },
  ]

  const handleExpandEvent = (event) => {
    setExpandedEvent(event)
  }

  const handleCloseExpandedEvent = () => {
    setExpandedEvent(null)
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
          Eventos y Rifas
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-60"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm font-semibold bg-[#A690A4] px-2 py-1 rounded-full inline-block">
                    {event.date}
                  </p>
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold mb-3 text-[#8B4513]">
                  {event.title}
                </h2>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <button
                  onClick={() => handleExpandEvent(event)}
                  className="inline-block bg-[#8B4513] text-white font-semibold py-2 px-4 rounded-full hover:bg-[#A690A4] transition duration-300"
                >
                  Más información
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {expandedEvent && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseExpandedEvent}
          >
            <motion.div
              className="bg-white rounded-xl shadow-2xl overflow-hidden max-w-2xl w-full"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={expandedEvent.image}
                  alt={expandedEvent.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-60"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h2 className="text-3xl text-[#8B4513] font-bold mb-2">
                    {expandedEvent.title}
                  </h2>
                  <p className="text-lg font-semibold">{expandedEvent.date}</p>
                </div>
                <button
                  onClick={handleCloseExpandedEvent}
                  className="absolute top-4 right-4 text-white hover:text-[#A690A4] transition duration-300"
                  aria-label="Cerrar"
                >
                  <X size={24} />
                </button>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">
                  {expandedEvent.fullDescription}
                </p>
                <div className="bg-[#FCD0A1] rounded-lg p-4">
                  <p className="text-[#8B4513] font-semibold mb-2">
                    <strong>Ubicación:</strong> {expandedEvent.location}
                  </p>
                  <p className="text-[#8B4513] font-semibold">
                    <strong>Horario:</strong> {expandedEvent.time}
                  </p>
                </div>
                {/* <button className="mt-6 inline-block bg-[#8B4513] text-white font-semibold py-2 px-6 rounded-full hover:bg-[#A690A4] transition duration-300">
                  Registrarse
                </button> */}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Events
