import React from "react"
import { Link } from "react-router-dom"

function Header() {
  return (
    <header className="bg-blue-600 text-white">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          AdoptaPet
        </Link>
        <div className="space-x-4">
          <Link to="/animals" className="hover:underline">
            Animales en adopción
          </Link>
          <Link to="/contact" className="hover:underline">
            Contacto
          </Link>
          <Link to="/events" className="hover:underline">
            Eventos y rifas
          </Link>
          <Link to="/success-stories" className="hover:underline">
            Finales felices
          </Link>
          <Link to="/volunteer" className="hover:underline">
            Voluntariado
          </Link>
          <Link to="/adoption-conditions" className="hover:underline">
            Condiciones de adopción
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Header
