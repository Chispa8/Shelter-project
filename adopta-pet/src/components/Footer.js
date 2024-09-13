import React from "react"
import { Link } from "react-router-dom"

function Footer() {
  return (
    <footer className="bg-blue-800 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="mb-4">
          &copy; 2023 AdoptaPet. Todos los derechos reservados.
        </p>
        <div className="flex justify-center space-x-4">
          <Link to="/privacy" className="hover:underline">
            Política de Privacidad
          </Link>
          <Link to="/terms" className="hover:underline">
            Términos de Uso
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
