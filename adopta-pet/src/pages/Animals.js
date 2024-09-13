import React, { useState } from "react"
import { HeartIcon } from "@heroicons/react/24/solid"

// Datos de ejemplo de animales
const animalsData = [
  {
    id: 1,
    name: "Luna",
    type: "Perro",
    age: 2,
    color: "Blanco",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 2,
    name: "Max",
    type: "Gato",
    age: 1,
    color: "Negro",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 3,
    name: "Bella",
    type: "Perro",
    age: 3,
    color: "Marrón",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 4,
    name: "Charlie",
    type: "Conejo",
    age: 1,
    color: "Blanco",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 5,
    name: "Lucy",
    type: "Gato",
    age: 4,
    color: "Atigrado",
    image: "/placeholder.svg?height=300&width=300",
  },
]

function AnimalCard({ animal }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
      <img
        src={animal.image}
        alt={animal.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{animal.name}</h3>
        <p className="text-gray-600 mb-2">
          {animal.type} • {animal.age} años • {animal.color}
        </p>
        <button className="mt-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 flex items-center">
          <HeartIcon className="h-5 w-5 mr-2" />
          Adoptar
        </button>
      </div>
    </div>
  )
}

function Animals() {
  const [filters, setFilters] = useState({
    type: "",
    age: "",
    color: "",
  })

  const handleFilterChange = (e) => {
    const { name, value } = e.target
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }))
  }

  const filteredAnimals = animalsData.filter((animal) => {
    return (
      (filters.type === "" || animal.type === filters.type) &&
      (filters.age === "" || animal.age.toString() === filters.age) &&
      (filters.color === "" || animal.color === filters.color)
    )
  })

  const uniqueTypes = [...new Set(animalsData.map((animal) => animal.type))]
  const uniqueAges = [...new Set(animalsData.map((animal) => animal.age))]
  const uniqueColors = [...new Set(animalsData.map((animal) => animal.color))]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Animales en Adopción
      </h1>

      <div className="mb-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label
            htmlFor="type"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Tipo de animal
          </label>
          <select
            id="type"
            name="type"
            value={filters.type}
            onChange={handleFilterChange}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
          >
            <option value="">Todos</option>
            {uniqueTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label
            htmlFor="age"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Edad
          </label>
          <select
            id="age"
            name="age"
            value={filters.age}
            onChange={handleFilterChange}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
          >
            <option value="">Todas</option>
            {uniqueAges.map((age) => (
              <option key={age} value={age.toString()}>
                {age} años
              </option>
            ))}
          </select>
        </div>
        <div>
          <label
            htmlFor="color"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Color
          </label>
          <select
            id="color"
            name="color"
            value={filters.color}
            onChange={handleFilterChange}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
          >
            <option value="">Todos</option>
            {uniqueColors.map((color) => (
              <option key={color} value={color}>
                {color}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAnimals.map((animal) => (
          <AnimalCard key={animal.id} animal={animal} />
        ))}
      </div>

      {filteredAnimals.length === 0 && (
        <p className="text-center text-gray-500 mt-8">
          No se encontraron animales con los filtros seleccionados.
        </p>
      )}
    </div>
  )
}

export default Animals
