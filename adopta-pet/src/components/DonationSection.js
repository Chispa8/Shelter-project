import React from "react"
import { Link } from "react-router-dom"

function DonationSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-10">
          Ayúdanos a Seguir Salvando Vidas
        </h2>
        <p className="text-xl mb-8">
          Tu donación nos permite rescatar y cuidar a más animales necesitados.
        </p>
        <Link
          to="/donate"
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
        >
          Hacer una Donación
        </Link>
      </div>
    </section>
  )
}

export default DonationSection
