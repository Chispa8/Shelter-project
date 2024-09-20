import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { collection, getDocs } from "firebase/firestore"
import { db } from "../firebase"
import { X } from "lucide-react"

function ProductCard({ product, onOrder }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-lg shadow-md overflow-hidden transition-shadow duration-300 hover:shadow-lg w-64"
    >
      <img
        src={product.imageUrl || "/placeholder.svg?height=200&width=200"}
        alt={product.productName}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{product.productName}</h3>
        <p className="text-gray-600 mb-2">{product.price.toFixed(2)}€</p>
        <p className="text-sm text-gray-500 mb-4">Para: {product.type}</p>
        <button
          onClick={() => onOrder(product)}
          className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Pedir producto
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

function OrderForm({ product, onClose, onSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    quantity: 1,
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(formData)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
    >
      <div className="bg-white rounded-lg p-8 max-w-md w-full relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          aria-label="Cerrar formulario de pedido"
        >
          <X size={24} />
        </button>
        <h2 className="text-2xl font-bold mb-4">Pedir {product.productName}</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Nombre completo
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="address"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Dirección de envío
            </label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-24"
            ></textarea>
          </div>
          <div className="mb-6">
            <label
              htmlFor="quantity"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Cantidad
            </label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              required
              min="1"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Enviar pedido
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  )
}

function Store() {
  const [products, setProducts] = useState([])
  const [activeCategory, setActiveCategory] = useState("Todos")
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [orderProduct, setOrderProduct] = useState(null)

  const categories = ["Todos", "Perro", "Gato", "Accesorio"]

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsCollection = collection(db, "store")
        const productsSnapshot = await getDocs(productsCollection)
        const productsList = productsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
        setProducts(productsList)
        setLoading(false)
      } catch (err) {
        console.error("Error fetching products:", err)
        setError(`Error al cargar los productos: ${err.message}`)
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  const filteredProducts =
    activeCategory === "Todos"
      ? products
      : products.filter((product) => product.type === activeCategory)

  const handleOrder = (product) => {
    setOrderProduct(product)
  }

  const handleCloseOrderForm = () => {
    setOrderProduct(null)
  }

  const handleSubmitOrder = async (formData) => {
    try {
      // Aquí deberías implementar la lógica para enviar el correo electrónico
      // Por ejemplo, podrías usar una función de Firebase Cloud Function
      console.log("Enviando pedido:", { product: orderProduct, ...formData })

      // Simulamos el envío del correo
      await new Promise((resolve) => setTimeout(resolve, 1000))

      alert("Pedido enviado con éxito")
      setOrderProduct(null)
    } catch (error) {
      console.error("Error al enviar el pedido:", error)
      alert("Error al enviar el pedido. Por favor, inténtalo de nuevo.")
    }
  }

  if (loading) {
    return <div className="text-center py-10">Cargando productos...</div>
  }

  if (error) {
    return <div className="text-center py-10 text-red-600">{error}</div>
  }

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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onOrder={handleOrder}
          />
        ))}
      </div>
      {filteredProducts.length === 0 && (
        <p className="text-center text-gray-600 mt-8">
          No se encontraron productos en esta categoría.
        </p>
      )}
      <AnimatePresence>
        {orderProduct && (
          <OrderForm
            product={orderProduct}
            onClose={handleCloseOrderForm}
            onSubmit={handleSubmitOrder}
          />
        )}
      </AnimatePresence>
    </div>
  )
}

export default Store
