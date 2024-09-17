import React, { useState } from "react"
import { motion } from "framer-motion"

const products = [
  {
    id: 1,
    name: "Collar para perro",
    price: 15.99,
    image: "/placeholder.svg?height=200&width=200",
    category: "Perros",
  },
  {
    id: 2,
    name: "Juguete para gato",
    price: 9.99,
    image: "/placeholder.svg?height=200&width=200",
    category: "Gatos",
  },
  {
    id: 3,
    name: "Cama para mascota",
    price: 39.99,
    image: "/placeholder.svg?height=200&width=200",
    category: "Accesorios",
  },
  {
    id: 4,
    name: "Correa retráctil",
    price: 24.99,
    image: "/placeholder.svg?height=200&width=200",
    category: "Perros",
  },
  {
    id: 5,
    name: "Comedero automático",
    price: 49.99,
    image: "/placeholder.svg?height=200&width=200",
    category: "Accesorios",
  },
  {
    id: 6,
    name: "Rascador para gatos",
    price: 29.99,
    image: "/placeholder.svg?height=200&width=200",
    category: "Gatos",
  },
]

function ProductCard({ product }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-lg shadow-md overflow-hidden transition-shadow duration-300 hover:shadow-lg"
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-2">${product.price.toFixed(2)}</p>
        <p className="text-sm text-gray-500 mb-4">{product.category}</p>
        <button className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
          Añadir al carrito
        </button>
      </div>
    </motion.div>
  )
}

function FilterButton({ category, activeCategory, onClick }) {
  return (
    <button
      onClick={() => onClick(category)}
      className={`px-4 py-2 rounded-full transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 ${
        activeCategory === category
          ? "bg-blue-600 text-white"
          : "bg-gray-200 text-gray-800 hover:bg-gray-300"
      }`}
    >
      {category}
    </button>
  )
}

function Store() {
  const [activeCategory, setActiveCategory] = useState("Todos")
  const categories = ["Todos", "Perros", "Gatos", "Accesorios"]

  const filteredProducts =
    activeCategory === "Todos"
      ? products
      : products.filter((product) => product.category === activeCategory)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Tienda de Mascotas
      </h1>
      <div className="mb-8 flex justify-center space-x-4">
        {categories.map((category) => (
          <FilterButton
            key={category}
            category={category}
            activeCategory={activeCategory}
            onClick={setActiveCategory}
          />
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {filteredProducts.length === 0 && (
        <p className="text-center text-gray-600 mt-8">
          No se encontraron productos en esta categoría.
        </p>
      )}
    </div>
  )
}

export default Store
