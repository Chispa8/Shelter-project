import React, { useState, useEffect, useRef } from "react"
import { motion, useAnimation, useMotionValue } from "framer-motion"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

const CARD_WIDTH = 280
const CARD_MARGIN = 20

function AdoptionSection() {
  const [width, setWidth] = useState(0)
  const [selectedAnimal, setSelectedAnimal] = useState(null)
  const carousel = useRef(null)
  const x = useMotionValue(0)
  const controls = useAnimation()

  const animals = [
    {
      id: 1,
      name: "Luna",
      image: "/placeholder.svg?height=300&width=300",
      description:
        "Luna es una perra cariñosa y juguetona. Le encanta correr y jugar a la pelota.",
      age: 2,
      breed: "Labrador",
      gender: "Hembra",
    },
    {
      id: 2,
      name: "Max",
      image: "/placeholder.svg?height=300&width=300",
      description:
        "Max es un gato tranquilo y amigable. Disfruta de largas siestas al sol.",
      age: 3,
      breed: "Siamés",
      gender: "Macho",
    },
    {
      id: 3,
      name: "Bella",
      image: "/placeholder.svg?height=300&width=300",
      description:
        "Bella es una perra energética y leal. Es excelente con los niños.",
      age: 1,
      breed: "Pastor Alemán",
      gender: "Hembra",
    },
    {
      id: 4,
      name: "Charlie",
      image: "/placeholder.svg?height=300&width=300",
      description:
        "Charlie es un perro juguetón y cariñoso. Le encanta dar paseos largos.",
      age: 4,
      breed: "Golden Retriever",
      gender: "Macho",
    },
    {
      id: 5,
      name: "Lucy",
      image: "/placeholder.svg?height=300&width=300",
      description:
        "Lucy es una gata independiente pero cariñosa. Disfruta de la compañía tranquila.",
      age: 2,
      breed: "Persa",
      gender: "Hembra",
    },
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

  const handleAnimalClick = (animal) => {
    setSelectedAnimal(animal)
  }

  const closeAnimalDetails = () => {
    setSelectedAnimal(null)
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
                  <button
                    onClick={() => handleAnimalClick(animal)}
                    className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
                  >
                    Conoce a {animal.name}
                  </button>
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
          <a
            href="/animals"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
          >
            Ver Todos los Animales
          </a>
        </div>
      </div>

      {selectedAnimal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-8 max-w-2xl w-full relative">
            <button
              onClick={closeAnimalDetails}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              aria-label="Cerrar detalles del animal"
            >
              <X size={24} />
            </button>
            <img
              src={selectedAnimal.image}
              alt={selectedAnimal.name}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-bold mb-2">{selectedAnimal.name}</h3>
            <p className="text-gray-600 mb-4">{selectedAnimal.description}</p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="font-semibold">Edad:</p>
                <p>{selectedAnimal.age} años</p>
              </div>
              <div>
                <p className="font-semibold">Raza:</p>
                <p>{selectedAnimal.breed}</p>
              </div>
              <div>
                <p className="font-semibold">Género:</p>
                <p>{selectedAnimal.gender}</p>
              </div>
            </div>
            <div className="mt-6">
              <a
                href={`/adopt/${selectedAnimal.id}`}
                className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
              >
                Adoptar a {selectedAnimal.name}
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default AdoptionSection
