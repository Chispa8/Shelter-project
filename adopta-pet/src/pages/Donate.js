import React from "react"
import { FaPaypal, FaHandHoldingHeart, FaPiggyBank } from "react-icons/fa"
/* import { SiBizum } from "react-icons/si" */
import { motion } from "framer-motion"

export default function Donate() {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div
      className="min-h-screen py-12 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundColor: "#FFEFD5",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl text-[#8B4513] font-extrabold text-center mb-12">
          Haz una donación
        </h1>

        <div className="space-y-8">
          <motion.section
            className="bg-white p-8 rounded-xl shadow-lg border-2 border-[#A690A4]"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-6 text-[#8B4513] flex items-center">
              <FaHandHoldingHeart className="mr-2 text-[#A690A4]" />
              Métodos de pago
            </h2>

            <div className="space-y-4">
              <button
                className="w-full flex items-center justify-center space-x-2 bg-[#0070ba] text-white py-4 px-6 rounded-lg hover:bg-[#003087] transition duration-300 transform hover:scale-105"
                onClick={() =>
                  window.open("https://www.paypal.com/donate", "_blank")
                }
              >
                <FaPaypal className="text-2xl" />
                <span className="text-lg font-semibold">Donar con PayPal</span>
              </button>

              {/* <button
                className="w-full flex items-center justify-center space-x-2 bg-[#00c2eb] text-white py-4 px-6 rounded-lg hover:bg-[#00a3c7] transition duration-300 transform hover:scale-105"
                onClick={() => alert("Implementar lógica de Bizum")}
              >
                <SiBizum className="text-2xl" />
                <span className="text-lg font-semibold">Donar con Bizum</span>
              </button> */}
            </div>
          </motion.section>

          <motion.section
            className="bg-white p-8 rounded-xl shadow-lg border-2 border-[#A690A4]"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold mb-6 text-[#8B4513] flex items-center">
              <FaPiggyBank className="mr-2 text-[#A690A4]" />
              Donativo por transferencia bancaria
            </h2>
            <div className="space-y-4">
              <div className="bg-[#FCD0A1] p-4 rounded-lg">
                <p className="font-semibold text-[#8B4513]">
                  <strong>TITULAR:</strong> Mi Mejor Amigo de Cuatro Patas
                </p>
              </div>
              <div className="bg-[#FCD0A1] p-4 rounded-lg">
                <p className="font-semibold text-[#8B4513]">
                  <strong>IBAN:</strong> ES12 0073 0100 5505 0519 9959
                </p>
              </div>
              <div className="bg-[#FCD0A1] p-4 rounded-lg">
                <p className="font-semibold text-[#8B4513]">
                  <strong>BANCO:</strong> Openbank
                </p>
              </div>
              <div className="bg-[#FCD0A1] p-4 rounded-lg">
                <p className="font-semibold text-[#8B4513]">
                  <strong>BIZUM:</strong> Dona a ong Mi mejor amigo de 4 patas o
                  código 04953
                </p>
              </div>
            </div>
          </motion.section>

          <motion.section
            className="text-center bg-white p-8 rounded-xl shadow-lg border-2 border-[#A690A4]"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <p className="text-xl text-[#8B4513]">
              Tu donación nos ayuda a seguir cuidando y encontrando hogares para
              animales necesitados. ¡Gracias por tu apoyo!
            </p>
          </motion.section>
        </div>
      </div>
    </div>
  )
}
