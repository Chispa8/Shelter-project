import React, { useState, useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { LazyLoadImage } from "react-lazy-load-image-component"
import "react-lazy-load-image-component/src/effects/blur.css"
import { ChevronRight, ChevronLeft } from "lucide-react"
import { collection, getDocs, limit, query } from "firebase/firestore"
import { db } from "../firebase"

function AdoptionSection() {
  const [animals, setAnimals] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const scrollContainerRef = useRef(null)

  useEffect(() => {
    const fetchAnimals = async () => {
      try {
        const animalsCollection = collection(db, "animals")
        const animalsQuery = query(animalsCollection, limit(5))
        const animalsSnapshot = await getDocs(animalsQuery)
        const animalsList = animalsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
        setAnimals(animalsList)
        setLoading(false)
      } catch (err) {
        console.error("Error fetching animals:", err)
        setError(
          "Error al cargar los animales. Por favor, intenta de nuevo más tarde."
        )
        setLoading(false)
      }
    }

    fetchAnimals()
  }, [])

  const scroll = (direction) => {
    const container = scrollContainerRef.current
    if (container) {
      const scrollAmount = direction === "left" ? -300 : 300
      container.scrollBy({ left: scrollAmount, behavior: "smooth" })
    }
  }

  if (loading) {
    return <div className="text-center py-10">Cargando animales...</div>
  }

  if (error) {
    return <div className="text-center py-10 text-[#A690A4]">{error}</div>
  }

  return (
    <section className="py-20 bg-[#FCD0A1]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-[#A690A4]">
          Animales en Adopción
        </h2>
        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto space-x-5 pb-4 px-12"
          >
            {animals.map((animal) => (
              <div
                key={animal.id}
                className="flex-shrink-0 w-64 bg-[#A690A4] rounded-lg shadow-md overflow-hidden"
              >
                <div className="p-4 flex flex-col items-center">
                  <div className="w-full h-48 flex justify-center items-center overflow-hidden rounded-md mb-4">
                    <LazyLoadImage
                      src={
                        animal.imageUrl ||
                        "/placeholder.svg?height=200&width=200"
                      }
                      alt={animal.name}
                      effect="blur"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-[#FCD0A1]">
                    {animal.name}
                  </h3>
                  <p className="text-sm font-semibold text-[#FCD0A1]">
                    {animal.type} • {animal.age} años
                  </p>
                  <Link
                    to={`/animals#${animal.id}`}
                    className="mt-2 bg-[#8B4513] text-[#FCD0A1] px-12 py-3 rounded-lg font-bold hover:bg-[#FCD0A1] hover:text-[#8B4513] transition duration-300 inline-block"
                  >
                    Conoce a {animal.name}
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={() => scroll("left")}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-[#8B4513] rounded-full p-2 shadow-md text-[#FCD0A1] hover:text-[#A690A4]"
            aria-label="Desplazar a la izquierda"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#8B4513] rounded-full p-2 shadow-md text-[#FCD0A1] hover:text-[#A690A4]"
            aria-label="Desplazar a la derecha"
          >
            <ChevronRight size={24} />
          </button>
        </div>
        <div className="text-center mt-8">
          <Link
            to="/animals"
            className="bg-[#8B4513] text-[#FCD0A1] px-12 py-3 rounded-lg font-bold hover:bg-[#A690A4] hover:text-[#FCD0A1] transition duration-300 inline-block"
          >
            Ver Todos los Animales
          </Link>
        </div>
      </div>
    </section>
  )
}

export default AdoptionSection
