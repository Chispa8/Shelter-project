import React, { useState, useEffect, useRef } from "react"
import { Link, useLocation } from "react-router-dom"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"
import { motion } from "framer-motion"

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1100)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()
  const menuRef = useRef(null)

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1100)
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("resize", handleResize)
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const menuItems = [
    { to: "/animals", text: "Animales en adopción" },
    { to: "/contact", text: "Contacto" },
    { to: "/store", text: "Tienda" },
    { to: "/events", text: "Eventos y rifas" },
    { to: "/success-stories", text: "Finales felices" },
    { to: "/volunteer", text: "Voluntariado" },
    { to: "/adoption-conditions", text: "Condiciones de adopción" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-blue-600 bg-opacity-80" : "bg-blue-600"
      }`}
    >
      <nav
        className="container mx-auto px-4 py-4"
        aria-label="Navegación principal"
      >
        <div className="flex justify-between items-center">
          <Link
            to="/"
            className="text-2xl font-bold text-white"
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
              ref={menuRef}
            >
              {menuItems.map((item) => (
                <motion.div
                  key={item.to}
                  className="inline-block"
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link
                    to={item.to}
                    className={`relative text-white transition-colors duration-300 py-2 px-1 ${
                      location.pathname === item.to ? "font-bold" : ""
                    }`}
                    role="menuitem"
                  >
                    {item.text}
                    {location.pathname === item.to && (
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-white"
                        layoutId="underline"
                        initial={false}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      />
                    )}
                  </Link>
                </motion.div>
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
                className="block py-2 text-white hover:bg-blue-700 transition-colors duration-300"
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
