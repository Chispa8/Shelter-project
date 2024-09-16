import React, { useState, useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { motion, useAnimation, useMotionValue } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

const CARD_WIDTH = 280 // Ancho de cada tarjeta
const CARD_MARGIN = 20 // Margen entre tarjetas

function AdoptionSection() {
  const [width, setWidth] = useState(0)
  const carousel = useRef(null)
  const x = useMotionValue(0)
  const controls = useAnimation()

  const animals = [
    { id: 1, name: "Luna", image: "/placeholder.svg?height=300&width=300" },
    { id: 2, name: "Max", image: "/placeholder.svg?height=300&width=300" },
    { id: 3, name: "Bella", image: "/placeholder.svg?height=300&width=300" },
    { id: 4, name: "Charlie", image: "/placeholder.svg?height=300&width=300" },
    { id: 5, name: "Lucy", image: "/placeholder.svg?height=300&width=300" },
    { id: 6, name: "Rocky", image: "/placeholder.svg?height=300&width=300" },
    { id: 7, name: "Daisy", image: "/placeholder.svg?height=300&width=300" },
  ]

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
  }, [])

  const handleDragEnd = (event, info) => {
    const direction = info.velocity.x < 0 ? 1 : -1
    const moveBy = direction * (CARD_WIDTH + CARD_MARGIN)

    const newX = x.get() + moveBy
    const edge = -width

    if (newX > 0) {
      controls.start({
        x: 0,
        transition: { type: "spring", stiffness: 300, damping: 30 },
      })
    } else if (newX < edge) {
      controls.start({
        x: edge,
        transition: { type: "spring", stiffness: 300, damping: 30 },
      })
    } else {
      controls.start({
        x: newX,
        transition: { type: "spring", stiffness: 300, damping: 30 },
      })
    }
  }

  const handleNext = () => {
    const newX = Math.max(x.get() - (CARD_WIDTH + CARD_MARGIN), -width)
    controls.start({
      x: newX,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    })
  }

  const handlePrev = () => {
    const newX = Math.min(x.get() + (CARD_WIDTH + CARD_MARGIN), 0)
    controls.start({
      x: newX,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    })
  }

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">
          Animales en Adopción
        </h2>
        <div className="relative overflow-hidden">
          <motion.div
            ref={carousel}
            className="cursor-grab active:cursor-grabbing"
            whileTap={{ cursor: "grabbing" }}
          >
            <motion.div
              drag="x"
              dragConstraints={{ right: 0, left: -width }}
              onDragEnd={handleDragEnd}
              animate={controls}
              style={{ x }}
              className="flex"
            >
              {animals.map((animal) => (
                <motion.div
                  key={animal.id}
                  className="min-w-[280px] mr-5 p-4 bg-white rounded-lg shadow-md"
                >
                  <img
                    src={animal.image}
                    alt={animal.name}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-2">{animal.name}</h3>
                  <Link
                    to={`/animals/${animal.id}`}
                    className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
                  >
                    Conoce a {animal.name}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
            aria-label="Anterior animal"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
            aria-label="Siguiente animal"
          >
            <ChevronRight size={24} />
          </button>
        </div>
        <div className="text-center mt-8">
          <Link
            to="/animals"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
          >
            Ver Todos los Animales
          </Link>
        </div>
      </div>
    </section>
  )
}

export default AdoptionSection
