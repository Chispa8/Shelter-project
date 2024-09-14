import React from "react"

function AdoptionConditions() {
  const conditions = [
    "Ser mayor de 18 años.",
    "Tener un domicilio estable.",
    "Contar con el consentimiento de todos los miembros de la familia.",
    "Tener tiempo y recursos para cuidar adecuadamente al animal.",
    "Comprometerse a proporcionar atención veterinaria regular.",
    "Aceptar una visita de seguimiento después de la adopción.",
  ]

  const process = [
    "Llenar el formulario de solicitud de adopción.",
    "Entrevista con nuestro equipo de adopciones.",
    "Visita al hogar para asegurar un ambiente adecuado.",
    "Selección del animal compatible con tu estilo de vida.",
    "Firma del contrato de adopción.",
    "Pago de la cuota de adopción que cubre vacunas y esterilización.",
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Condiciones de Adopción
      </h1>
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Requisitos para Adoptar</h2>
        <ul className="list-disc pl-6 space-y-2">
          {conditions.map((condition, index) => (
            <li key={index}>{condition}</li>
          ))}
        </ul>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4">Proceso de Adopción</h2>
        <ol className="list-decimal pl-6 space-y-2">
          {process.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>
    </div>
  )
}

export default AdoptionConditions
