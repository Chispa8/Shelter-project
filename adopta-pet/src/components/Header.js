import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 800)

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 800)
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const menuItems = [
    { to: "/animals", text: "Animales en adopción" },
    { to: "/contact", text: "Contacto" },
    { to: "/events", text: "Eventos y rifas" },
    { to: "/success-stories", text: "Finales felices" },
    { to: "/volunteer", text: "Voluntariado" },
    { to: "/adoption-conditions", text: "Condiciones de adopción" },
  ]

  return (
    <header className="bg-blue-600 text-white">
      <nav
        className="container mx-auto px-4 py-4"
        aria-label="Navegación principal"
      >
        <div className="flex justify-between items-center">
          <Link
            to="/"
            className="text-2xl font-bold"
            aria-label="Inicio de AdoptaPet"
          >
            AdoptaPet
          </Link>
          {isSmallScreen ? (
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none focus:text-white"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {isMenuOpen ? (
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          ) : (
            <div
              className="space-x-4"
              role="menubar"
              aria-label="Opciones de navegación"
            >
              {menuItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="hover:underline"
                  role="menuitem"
                >
                  {item.text}
                </Link>
              ))}
            </div>
          )}
        </div>
        {isSmallScreen && (
          <div
            id="mobile-menu"
            className={`mt-4 space-y-2 ${isMenuOpen ? "block" : "hidden"}`}
            role="menu"
            aria-label="Menú móvil"
          >
            {menuItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="block py-2 hover:bg-blue-700"
                onClick={() => setIsMenuOpen(false)}
                role="menuitem"
              >
                {item.text}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
