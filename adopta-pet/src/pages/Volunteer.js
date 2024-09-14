import React from "react"

function Volunteer() {
  const opportunities = [
    {
      id: 1,
      title: "Cuidador de Animales",
      description: "Ayuda a alimentar, limpiar y jugar con nuestros animales.",
      requirements:
        "Disponibilidad de 4 horas semanales, amor por los animales.",
    },
    {
      id: 2,
      title: "Paseador de Perros",
      description: "Lleva a nuestros perros a dar paseos y ejercitarse.",
      requirements: "Buena condición física, experiencia con perros.",
    },
    {
      id: 3,
      title: "Asistente de Eventos",
      description:
        "Ayuda en la organización y ejecución de nuestros eventos de adopción.",
      requirements:
        "Habilidades de comunicación, disponibilidad en fines de semana.",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Voluntariado</h1>
      <p className="text-lg text-center mb-8">
        Únete a nuestro equipo de voluntarios y ayuda a hacer una diferencia en
        la vida de los animales necesitados.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {opportunities.map((opportunity) => (
          <div
            key={opportunity.id}
            className="bg-white rounded-lg shadow-md p-6"
          >
            <h2 className="text-xl font-semibold mb-2">{opportunity.title}</h2>
            <p className="text-gray-700 mb-4">{opportunity.description}</p>
            <p className="text-sm text-gray-600">
              <strong>Requisitos:</strong> {opportunity.requirements}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <a
          href="#"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Postúlate como Voluntario
        </a>
      </div>
    </div>
  )
}

export default Volunteer
