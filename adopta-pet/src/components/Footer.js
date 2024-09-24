import React from "react"
import { motion } from "framer-motion"
import PrivacyPolicy from "./PrivacyPolicy"

function Footer() {
  return (
    <footer className="bg-blue-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">AdoptaPet</h3>
            <p className="text-sm">Cambiando vidas, patita a patita.</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Enlaces rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="/animals" className="hover:underline">
                  Animales en adopción
                </a>
              </li>
              <li>
                <a href="/volunteer" className="hover:underline">
                  Voluntariado
                </a>
              </li>
              <li>
                <a href="/donate" className="hover:underline">
                  Donar
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:underline">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-semibold mb-2">Síguenos</h4>
            <div className="flex space-x-4">
              <motion.a
                href="https://www.facebook.com/apamimejoramigodecuatropatas/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-300"
                aria-label="Facebook"
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </motion.a>
              <motion.a
                href="https://www.instagram.com/a.p.a_mimejoramigo/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-300"
                aria-label="Instagram"
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </motion.a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-blue-700 text-center text-sm">
          <p>&copy; 2023 AdoptaPet. Todos los derechos reservados.</p>
          <div className="mt-2">
            <PrivacyPolicy />
            {/* <span className="mx-2">|</span>
            <a href="/terms" className="hover:underline">
              Términos de Uso
            </a> */}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
