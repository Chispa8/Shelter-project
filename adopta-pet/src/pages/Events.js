import React from "react"

function Events() {
  const events = [
    {
      id: 1,
      title: "Feria de Adopción Anual",
      date: "15 de Julio, 2023",
      description:
        "Nuestra feria anual donde podrás conocer a todos nuestros animales disponibles para adopción.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 2,
      title: "Carrera Benéfica 'Patas por una Causa'",
      date: "5 de Septiembre, 2023",
      description:
        "Corre con tu mascota y ayuda a recaudar fondos para nuestro refugio.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 3,
      title: "Taller de Cuidado de Mascotas",
      date: "20 de Octubre, 2023",
      description:
        "Aprende sobre el cuidado adecuado de perros y gatos con nuestros expertos veterinarios.",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Eventos y Rifas</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{event.title}</h2>
              <p className="text-gray-600 mb-2">{event.date}</p>
              <p className="text-gray-700">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Events
