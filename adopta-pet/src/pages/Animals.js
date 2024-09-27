import React, { useState, useEffect } from "react"
import { LazyLoadImage } from "react-lazy-load-image-component"
import "react-lazy-load-image-component/src/effects/blur.css"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { collection, getDocs } from "firebase/firestore"
import { db } from "../firebase"

const dogToyImageUrl =
  "https://firebasestorage.googleapis.com/v0/b/shelter-app-e67e8.appspot.com/o/icons%2Fdog-toy.png?alt=media&token=016a3eb2-0cbd-4d89-965d-b429c4874415"
const ballOfWoolImageUrl =
  "https://firebasestorage.googleapis.com/v0/b/shelter-app-e67e8.appspot.com/o/icons%2Fball-of-wool.png?alt=media&token=020409c1-007b-4d51-a99c-be69289657d7"

function AnimalCard({ animal, onExpand }) {
  const isAnimalDog = animal.type.toLowerCase() === "perro"
  const isAnimalCat = animal.type.toLowerCase() === "gato"

  const iconImage = isAnimalDog
    ? dogToyImageUrl
    : isAnimalCat
    ? ballOfWoolImageUrl
    : null

  const rotate = {
    rotate: [0, 10, 0, -10, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  }

  return (
    <div
      id={animal.id}
      className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 w-64"
    >
      <div className="p-2 flex justify-center">
        <LazyLoadImage
          alt={animal.name}
          src={animal.imageUrl || "/placeholder.svg?height=200&width=200"}
          effect="blur"
          className="w-full h-48 object-cover rounded-lg"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl text-[#8B4513] font-semibold mb-2">
          {animal.name}
        </h3>
        <p className="text-[#8B4513] font-semibold mb-2">
          {animal.type} • {animal.age} años • {animal.breed}
        </p>
        <button
          onClick={() => onExpand(animal)}
          className="mt-2 bg-[#A4683C] hover:bg-[#FCD0A1] text-[#FCD0A1] hover:text-[#A4683C] font-bold py-2 px-4 rounded-full transition duration-300 flex items-center justify-center w-full relative"
        >
          {iconImage && (
            <motion.img
              src={iconImage}
              alt="icon"
              className="absolute left-4 top-2 w-6 h-6"
              animate={rotate}
            />
          )}
          <span className="mx-auto">Conoce a {animal.name}</span>
          {iconImage && (
            <motion.img
              src={iconImage}
              alt="icon"
              className="absolute right-4 top-2 w-6 h-6"
              animate={rotate}
            />
          )}
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
      <div className="bg-white rounded-lg p-6 max-w-md w-full relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          aria-label="Cerrar detalles del animal"
        >
          <X size={24} />
        </button>
        <div className="flex justify-center mb-4">
          <img
            src={animal.imageUrl || "/placeholder.svg?height=200&width=200"}
            alt={animal.name}
            className="w-full h-48 object-cover rounded-lg"
          />
        </div>
        <h3 className="text-xl font-bold mb-2">{animal.name}</h3>
        <p className="text-gray-600 mb-4">{animal.lookingFor}</p>
        <div className="grid grid-cols-2 gap-2 text-sm">
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
        <div className="mt-4">
          <button
            onClick={() => onAdopt(animal)}
            className="bg-[#49C891] text-white px-4 py-2 rounded-lg hover:bg-[#A690A4] transition duration-300 w-full"
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
      <div className="bg-white rounded-lg p-6 max-w-md w-full relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          aria-label="Cerrar formulario de adopción"
        >
          <X size={24} />
        </button>
        <h2 className="text-xl font-bold mb-4">Adoptar a {animal.name}</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-gray-700 text-sm font-bold mb-1"
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
          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-1"
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
          <div>
            <label
              htmlFor="phone"
              className="block text-gray-700 text-sm font-bold mb-1"
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
          <div>
            <label
              htmlFor="address"
              className="block text-gray-700 text-sm font-bold mb-1"
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
          <div>
            <label
              htmlFor="reason"
              className="block text-gray-700 text-sm font-bold mb-1"
            >
              Razón para adoptar
            </label>
            <textarea
              id="reason"
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <button
            type="submit"
            className="bg-[#49C891] text-white px-4 py-2 rounded-lg hover:bg-[#A690A4] transition duration-300 w-full"
          >
            Enviar solicitud de adopción
          </button>
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
    <div className="bg-[#8B4513] bg-opacity-80 p-4 rounded-lg mb-6">
      <h2 className="text-xl font-semibold mb-4 text-[#FCD0A1]">Filtros</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label htmlFor="type" className="block mb-2 text-[#FCD0A1]">
            Tipo de animal
          </label>
          <select
            id="type"
            name="type"
            value={filters.type}
            onChange={handleFilterChange}
            className="w-full p-2 border rounded text-[#8B4513]"
          >
            <option value="">Todos</option>
            <option value="Perro">Perro</option>
            <option value="Gato">Gato</option>
          </select>
        </div>
        <div>
          <label htmlFor="age" className="block mb-2 text-[#FCD0A1]">
            Edad máxima
          </label>
          <input
            type="number"
            id="age"
            name="age"
            value={filters.age}
            onChange={handleFilterChange}
            min="0"
            className="w-full p-2 border rounded text-[#8B4513]"
          />
        </div>
        <div>
          <label htmlFor="breed" className="block mb-2 text-[#FCD0A1]">
            Raza
          </label>
          <input
            type="text"
            id="breed"
            name="breed"
            value={filters.breed}
            onChange={handleFilterChange}
            className="w-full p-2 border rounded text-[#8B4513]"
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
    <div
      className="min-h-screen py-8"
      style={{
        backgroundColor: "#FFEFD5",
        /* backgroundImage:
          "url('https://firebasestorage.googleapis.com/v0/b/shelter-app-e67e8.appspot.com/o/icons%2FFondo-Animals.webp?alt=media&token=e4c9fcb1-2334-44c8-8550-df30bcd7807f')",
         */ backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6 text-center text-[#8B4513]">
          Animales Disponibles para Adopción
        </h1>

        <FilterSection filters={filters} setFilters={setFilters} />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
          {filteredAnimals.map((animal) => (
            <AnimalCard
              key={animal.id}
              animal={animal}
              onExpand={handleExpandAnimal}
            />
          ))}
        </div>

        <AnimatePresence>
          {expandedAnimal && (
            <ExpandedAnimalCard
              animal={expandedAnimal}
              onClose={handleCloseExpanded}
              onAdopt={handleAdopt}
            />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {adoptionFormAnimal && (
            <AdoptionForm
              animal={adoptionFormAnimal}
              onClose={handleCloseAdoptionForm}
              onSubmit={handleSubmitAdoption}
            />
          )}
        </AnimatePresence>

        {submitStatus === "sending" && (
          <div className="text-center py-4">Enviando solicitud...</div>
        )}
        {submitStatus === "success" && (
          <div className="text-center py-4 text-green-600">
            Solicitud enviada correctamente.
          </div>
        )}
        {submitStatus === "error" && (
          <div className="text-center py-4 text-red-600">
            Error al enviar la solicitud. Por favor, inténtalo de nuevo.
          </div>
        )}
      </div>
    </div>
  )
}

export default Animals
