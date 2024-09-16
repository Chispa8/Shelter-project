import React, { useState, useEffect } from "react"
import { LazyLoadImage } from "react-lazy-load-image-component"
import "react-lazy-load-image-component/src/effects/blur.css"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

function AnimalCard({ animal, onExpand }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 w-64">
      {/* Añadimos padding al contenedor de la imagen */}
      <div className="p-2">
        <LazyLoadImage
          alt={animal.name}
          src={animal.image}
          effect="blur"
          className="w-full h-48 object-cover rounded-lg" // Añadimos borde redondeado a la imagen
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{animal.name}</h3>
        <p className="text-gray-600 mb-2">
          {animal.type} • {animal.age} años • {animal.color}
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
          src={animal.image}
          alt={animal.name}
          className="w-full h-64 object-cover rounded-lg mb-4"
        />
        <h3 className="text-2xl font-bold mb-2">{animal.name}</h3>
        <p className="text-gray-600 mb-4">{animal.description}</p>
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
            <p className="font-semibold">Color:</p>
            <p>{animal.color}</p>
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
  const [expandedAnimal, setExpandedAnimal] = useState(null)
  const [adoptionFormAnimal, setAdoptionFormAnimal] = useState(null)

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
                  name: "Byron",
                  type: "Perro",
                  age: 2,
                  color: "Blanco",
                  image: require("../assets/images/byron.PNG"),
                  description:
                    "Byron es una perro cariñoso y juguetón. Le encanta correr y jugar a la pelota.",
                },
                {
                  id: 2,
                  name: "Life",
                  type: "Gato",
                  age: 1,
                  color: "Naranja",
                  image: require("../assets/images/lifeG.PNG"),
                  description:
                    "Life es un gato tranquilo y amigable. Disfruta de largas siestas al sol.",
                },
                {
                  id: 3,
                  name: "Kala",
                  type: "Perro",
                  age: 3,
                  color: "Marrón",
                  image: require("../assets/images/kala.PNG"),
                  description:
                    "Kala es enérgica y leal. Es excelente con los niños y le encanta jugar.",
                },
                {
                  id: 4,
                  name: "Lyonel",
                  type: "Gato",
                  age: 2,
                  color: "Negro",
                  image: require("../assets/images/lyonelG.PNG"),
                  description:
                    "Lyonel es un gato curioso y juguetón. Le encanta explorar y jugar con juguetes interactivos.",
                },
                {
                  id: 5,
                  name: "Pluto",
                  type: "Perro",
                  age: 4,
                  color: "Dorado",
                  image: require("../assets/images/pluto.PNG"),
                  description:
                    "Pluto es dulce y tranquilo. Disfruta de paseos tranquilos y mimos.",
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
  }

  const handleSubmitAdoption = (formData) => {
    // Aquí iría la lógica para enviar los datos del formulario
    console.log("Formulario de adopción enviado:", formData)
    alert(
      "Solicitud de adopción enviada con éxito. Nos pondremos en contacto contigo pronto."
    )
    setAdoptionFormAnimal(null)
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
    </div>
  )
}

export default Animals
