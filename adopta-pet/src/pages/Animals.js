import React, { useState, useEffect } from "react"
import { LazyLoadImage } from "react-lazy-load-image-component"
import "react-lazy-load-image-component/src/effects/blur.css"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { collection, getDocs } from "firebase/firestore"
import { db } from "../firebase"

function AnimalCard({ animal, onExpand }) {
  return (
    <div
      id={animal.id}
      className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 w-64"
    >
      <div className="p-2">
        <LazyLoadImage
          alt={animal.name}
          src={animal.imageUrl || "/placeholder.svg?height=200&width=200"}
          effect="blur"
          className="w-full h-48 object-cover rounded-lg"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{animal.name}</h3>
        <p className="text-gray-600 mb-2">
          {animal.type} • {animal.age} años • {animal.breed}
        </p>
        <button
          onClick={() => onExpand(animal)}
          className="mt-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 inline-block"
        >
          Conoce a {animal.name}
        </button>
      </div>
    </div>
  )
}

function ExpandedAnimalCard({ animal, onClose, onAdopt }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
    >
      <div className="bg-white rounded-lg p-8 max-w-2xl w-full relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          aria-label="Cerrar detalles del animal"
        >
          <X size={24} />
        </button>
        <img
          src={animal.imageUrl || "/placeholder.svg?height=200&width=200"}
          alt={animal.name}
          className="w-full h-64 object-cover rounded-lg mb-4"
        />
        <h3 className="text-2xl font-bold mb-2">{animal.name}</h3>
        <p className="text-gray-600 mb-4">{animal.lookingFor}</p>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="font-semibold">Edad:</p>
            <p>{animal.age} años</p>
          </div>
          <div>
            <p className="font-semibold">Tipo:</p>
            <p>{animal.type}</p>
          </div>
          <div>
            <p className="font-semibold">Raza:</p>
            <p>{animal.breed}</p>
          </div>
          <div>
            <p className="font-semibold">Tamaño:</p>
            <p>{animal.size}</p>
          </div>
          <div>
            <p className="font-semibold">Salud:</p>
            <p>{animal.health}</p>
          </div>
        </div>
        <div className="mt-6">
          <button
            onClick={() => onAdopt(animal)}
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Adoptar a {animal.name}
          </button>
        </div>
      </div>
    </motion.div>
  )
}

function AdoptionForm({ animal, onClose, onSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    reason: "",
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
      <div className="bg-white rounded-lg p-8 max-w-2xl w-full relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          aria-label="Cerrar formulario de adopción"
        >
          <X size={24} />
        </button>
        <h2 className="text-2xl font-bold mb-4">Adoptar a {animal.name}</h2>
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
              htmlFor="phone"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Teléfono
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
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
              Dirección
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="reason"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              ¿Por qué quieres adoptar a {animal.name}?
            </label>
            <textarea
              id="reason"
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
            ></textarea>
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Enviar solicitud de adopción
            </button>
          </div>
        </form>
      </div>
    </motion.div>
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
          <label htmlFor="breed" className="block mb-2">
            Raza
          </label>
          <input
            type="text"
            id="breed"
            name="breed"
            value={filters.breed}
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
    breed: "",
  })
  const [expandedAnimal, setExpandedAnimal] = useState(null)
  const [adoptionFormAnimal, setAdoptionFormAnimal] = useState(null)
  const [submitStatus, setSubmitStatus] = useState(null)

  useEffect(() => {
    const fetchAnimals = async () => {
      try {
        const animalsCollection = collection(db, "animals")
        const animalsSnapshot = await getDocs(animalsCollection)
        const animalsList = animalsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
        setAnimals(animalsList)
        setFilteredAnimals(animalsList)
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

  useEffect(() => {
    const filtered = animals.filter((animal) => {
      return (
        (filters.type === "" || animal.type === filters.type) &&
        (filters.age === "" || animal.age <= parseInt(filters.age)) &&
        (filters.breed === "" ||
          animal.breed.toLowerCase().includes(filters.breed.toLowerCase()))
      )
    })
    setFilteredAnimals(filtered)
  }, [filters, animals])

  const handleExpandAnimal = (animal) => {
    setExpandedAnimal(animal)
  }

  const handleCloseExpanded = () => {
    setExpandedAnimal(null)
  }

  const handleAdopt = (animal) => {
    setExpandedAnimal(null)
    setAdoptionFormAnimal(animal)
  }

  const handleCloseAdoptionForm = () => {
    setAdoptionFormAnimal(null)
    setSubmitStatus(null)
  }

  const handleSubmitAdoption = async (formData) => {
    setSubmitStatus("sending")

    try {
      const response = await fetch("/api/send-adoption-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to: "juanquigol@gmail.com",
          subject: `Nueva solicitud de adopción para ${adoptionFormAnimal.name}`,
          text: `
            Nombre: ${formData.name}
            Email: ${formData.email}
            Teléfono: ${formData.phone}
            Dirección: ${formData.address}
            Razón para adoptar: ${formData.reason}
            
            Detalles del animal:
            Nombre: ${adoptionFormAnimal.name}
            Tipo: ${adoptionFormAnimal.type}
            Edad: ${adoptionFormAnimal.age} años
            Raza: ${adoptionFormAnimal.breed}
          `,
        }),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setTimeout(() => {
          setAdoptionFormAnimal(null)
          setSubmitStatus(null)
        }, 3000)
      } else {
        throw new Error("Failed to send email")
      }
    } catch (error) {
      console.error("Error sending adoption email:", error)
      setSubmitStatus("error")
    }
  }

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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
          {filteredAnimals.map((animal) => (
            <AnimalCard
              key={animal.id}
              animal={animal}
              onExpand={handleExpandAnimal}
            />
          ))}
        </div>
      )}
      <AnimatePresence>
        {expandedAnimal && (
          <ExpandedAnimalCard
            animal={expandedAnimal}
            onClose={handleCloseExpanded}
            onAdopt={handleAdopt}
          />
        )}
        {adoptionFormAnimal && (
          <AdoptionForm
            animal={adoptionFormAnimal}
            onClose={handleCloseAdoptionForm}
            onSubmit={handleSubmitAdoption}
          />
        )}
      </AnimatePresence>
      {submitStatus === "success" && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl">
            <p className="text-green-600 font-semibold text-lg">
              Solicitud de adopción enviada con éxito. Nos pondremos en contacto
              contigo pronto.
            </p>
          </div>
        </div>
      )}
      {submitStatus === "error" && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl">
            <p className="text-red-600 font-semibold text-lg">
              Error al enviar la solicitud de adopción. Por favor, inténtalo de
              nuevo más tarde.
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Animals
