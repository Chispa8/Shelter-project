import React, { useState, useEffect } from "react"
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

  if (loading) {
    return <div className="text-center py-10">Cargando animales...</div>
  }

  if (error) {
    return <div className="text-center py-10 text-red-600">{error}</div>
  }

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">
          Animales en Adopción
        </h2>
        <div className="relative">
          <div className="flex overflow-x-auto space-x-4 pb-4">
            {animals.map((animal) => (
              <div
                key={animal.id}
                className="flex-shrink-0 w-64 bg-white rounded-lg shadow-md overflow-hidden"
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
                  <h3 className="text-lg font-semibold">{animal.name}</h3>
                  <p className="text-sm text-gray-600">
                    {animal.type} • {animal.age} años
                  </p>
                  <Link
                    to={`/animals#${animal.id}`}
                    className="mt-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 inline-block"
                  >
                    Conoce a {animal.name}
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
            aria-label="Desplazar a la izquierda"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
            aria-label="Desplazar a la derecha"
          >
            <ChevronRight size={24} />
          </button>
        </div>
        <div className="text-center mt-8">
          <Link
            to="/animals"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Ver Todos los Animales
          </Link>
        </div>
      </div>
    </section>
  )
}

export default AdoptionSection
