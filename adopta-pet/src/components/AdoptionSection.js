import React from "react"
import { Link } from "react-router-dom"

function AdoptionSection() {
  const animals = [
    { id: 1, name: "Luna", image: require("../assets/images/photo2.avif") },
    { id: 2, name: "Max", image: require("../assets/images/cat1.avif") },
    { id: 3, name: "Bella", image: require("../assets/images/photo3.avif") },
    { id: 4, name: "Charlie", image: require("../assets/images/cat2.avif") },
    { id: 5, name: "Lucy", image: require("../assets/images/perro.webp") },
  ]

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">
          Animales en Adopción
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {animals.map((animal) => (
            <div
              key={animal.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={animal.image}
                alt={animal.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{animal.name}</h3>
                <Link
                  to={`/animals/${animal.id}`}
                  className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
                >
                  Ver Detalles
                </Link>
              </div>
            </div>
          ))}
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
