import React from "react"
import { motion } from "framer-motion"

const collaborators = [
  {
    name: "Ayuntamiento de Málaga",
    logo: "https://www.mimejoramigodecuatropatas.com/wp-content/uploads/2023/05/ayuntamiento-malaga.png",
    url: "https://www.malaga.eu/",
  },
  {
    name: "Diputación de Málaga",
    logo: "https://www.mimejoramigodecuatropatas.com/wp-content/uploads/2023/05/diputacion-malaga.png",
    url: "https://www.malaga.es/",
  },
  {
    name: "Junta de Andalucía",
    logo: "https://www.mimejoramigodecuatropatas.com/wp-content/uploads/2023/05/junta-andalucia.png",
    url: "https://www.juntadeandalucia.es/",
  },
  {
    name: "Fundación La Caixa",
    logo: "https://www.mimejoramigodecuatropatas.com/wp-content/uploads/2023/05/fundacion-la-caixa.png",
    url: "https://fundacionlacaixa.org/",
  },
  {
    name: "Fundación Unicaja",
    logo: "https://www.mimejoramigodecuatropatas.com/wp-content/uploads/2023/05/fundacion-unicaja.png",
    url: "https://www.fundacionunicaja.com/",
  },
  {
    name: "Fundación CLC World",
    logo: "https://www.mimejoramigodecuatropatas.com/wp-content/uploads/2023/05/fundacion-clc-world.png",
    url: "https://clcworld.com/foundation/",
  },
  {
    name: "Fundación Pascual",
    logo: "https://www.mimejoramigodecuatropatas.com/wp-content/uploads/2023/05/fundacion-pascual.png",
    url: "https://www.fundacionpascual.com/",
  },
  {
    name: "Fundación Mapfre",
    logo: "https://www.mimejoramigodecuatropatas.com/wp-content/uploads/2023/05/fundacion-mapfre.png",
    url: "https://www.fundacionmapfre.org/",
  },
]

function CollaboratorsSection() {
  return (
    <section className="bg-[#8B4513] py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">
          Nuestros Colaboradores
        </h2>
        <div className="relative">
          <div className="flex overflow-x-hidden">
            <motion.div
              className="flex space-x-8 whitespace-nowrap"
              animate={{
                x: [0, -100 * collaborators.length],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear",
                },
              }}
            >
              {[...collaborators, ...collaborators].map(
                (collaborator, index) => (
                  <a
                    key={index}
                    href={collaborator.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#A690A4] inline-block"
                  >
                    <img
                      src={collaborator.logo}
                      alt={collaborator.name}
                      className="h-16 w-auto object-contain"
                    />
                  </a>
                )
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CollaboratorsSection
