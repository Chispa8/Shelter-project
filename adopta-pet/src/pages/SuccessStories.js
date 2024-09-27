import React from "react"
import { motion } from "framer-motion"

function SuccessStories() {
  const stories = [
    {
      id: 1,
      name: "Luna",
      adopter: "Familia Rodríguez",
      story:
        "Luna fue rescatada de la calle y ahora vive feliz con su nueva familia. Ha aprendido muchos trucos y es la alegría del hogar.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 2,
      name: "Max",
      adopter: "Juan Pérez",
      story:
        "Max era muy tímido cuando llegó al refugio. Gracias al amor de Juan, ahora es un perro confiado y juguetón.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 3,
      name: "Bella",
      adopter: "María González",
      story:
        "Bella fue adoptada como compañera para una persona mayor. Ahora brindan compañía mutua y son inseparables.",
      image: "/placeholder.svg?height=200&width=300",
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
        <h1 className="text-4xl font-extrabold mb-12 text-center text-[#8B4513]">
          Historias de Éxito
        </h1>
        <div className="space-y-12">
          {stories.map((story, index) => (
            <motion.div
              key={story.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="md:w-1/3 relative">
                <img
                  src={story.image}
                  alt={story.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#8B4513] to-transparent opacity-70"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h2 className="text-2xl font-bold">{story.name}</h2>
                  <p className="text-sm">{story.adopter}</p>
                </div>
              </div>
              <div className="p-6 md:w-2/3 flex flex-col justify-center">
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  "{story.story}"
                </p>
                <div className="mt-4">
                  <a
                    href="#"
                    className="inline-block bg-[#A690A4] text-white font-semibold py-2 px-4 rounded-full hover:bg-[#8B4513] transition duration-300"
                  >
                    Leer más
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SuccessStories
