import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { LazyLoadImage } from "react-lazy-load-image-component"
import "react-lazy-load-image-component/src/effects/blur.css"

function AnimalCard({ animal }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
      <LazyLoadImage
        alt={animal.name}
        src={animal.image}
        effect="blur"
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{animal.name}</h3>
        <p className="text-gray-600 mb-2">
          {animal.type} • {animal.age} años • {animal.color}
        </p>
        <Link
          to={`/animals/${animal.id}`}
          className="mt-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 inline-block"
        >
          Adoptar
        </Link>
      </div>
    </div>
  )
}

function FilterSection({ filters, setFilters }) {
  const handleFilterChange = (e) => {
    const { name, value } = e.target
    setFilters((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <div className="bg-gray-100 p-4 rounded-lg mb-6">
      <h2 className="text-xl font-semibold mb-4">Filtros</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label htmlFor="type" className="block mb-2">
            Tipo de animal
          </label>
          <select
            id="type"
            name="type"
            value={filters.type}
            onChange={handleFilterChange}
            className="w-full p-2 border rounded"
          >
            <option value="">Todos</option>
            <option value="Perro">Perro</option>
            <option value="Gato">Gato</option>
          </select>
        </div>
        <div>
          <label htmlFor="age" className="block mb-2">
            Edad máxima
          </label>
          <input
            type="number"
            id="age"
            name="age"
            value={filters.age}
            onChange={handleFilterChange}
            min="0"
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="color" className="block mb-2">
            Color
          </label>
          <input
            type="text"
            id="color"
            name="color"
            value={filters.color}
            onChange={handleFilterChange}
            className="w-full p-2 border rounded"
          />
        </div>
      </div>
    </div>
  )
}

function Animals() {
  const [animals, setAnimals] = useState([])
  const [filteredAnimals, setFilteredAnimals] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [filters, setFilters] = useState({
    type: "",
    age: "",
    color: "",
  })

  useEffect(() => {
    const fetchAnimals = async () => {
      try {
        // Simulamos una llamada a una API
        const response = await new Promise((resolve) =>
          setTimeout(
            () =>
              resolve([
                {
                  id: 1,
                  name: "Luna",
                  type: "Perro",
                  age: 2,
                  color: "Blanco",
                  image: require("../assets/images/photo2.avif"),
                },
                {
                  id: 2,
                  name: "Max",
                  type: "Gato",
                  age: 1,
                  color: "Naranja",
                  image: "/placeholder.svg?height=300&width=300",
                },
                {
                  id: 3,
                  name: "Rocky",
                  type: "Perro",
                  age: 3,
                  color: "Marrón",
                  image: "/placeholder.svg?height=300&width=300",
                },
                {
                  id: 4,
                  name: "Milo",
                  type: "Gato",
                  age: 2,
                  color: "Negro",
                  image: "/placeholder.svg?height=300&width=300",
                },
                {
                  id: 5,
                  name: "Bella",
                  type: "Perro",
                  age: 4,
                  color: "Dorado",
                  image: "/placeholder.svg?height=300&width=300",
                },
              ]),
            1000
          )
        )
        setAnimals(response)
        setFilteredAnimals(response)
        setLoading(false)
      } catch (err) {
        setError(
          "Error al cargar los animales. Por favor, intenta de nuevo más tarde."
        )
        setLoading(false)
      }
    }

    fetchAnimals()
  }, [])

  useEffect(() => {
    const filtered = animals.filter((animal) => {
      return (
        (filters.type === "" || animal.type === filters.type) &&
        (filters.age === "" || animal.age <= parseInt(filters.age)) &&
        (filters.color === "" ||
          animal.color.toLowerCase().includes(filters.color.toLowerCase()))
      )
    })
    setFilteredAnimals(filtered)
  }, [filters, animals])

  if (loading) {
    return <div className="text-center py-10">Cargando animales...</div>
  }

  if (error) {
    return <div className="text-center py-10 text-red-600">{error}</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Animales Disponibles para Adopción
      </h1>
      <FilterSection filters={filters} setFilters={setFilters} />
      {filteredAnimals.length === 0 ? (
        <p className="text-center text-gray-600">
          No se encontraron animales con los filtros seleccionados.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAnimals.map((animal) => (
            <AnimalCard key={animal.id} animal={animal} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Animals
