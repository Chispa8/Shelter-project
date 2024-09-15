import React from "react"
import { FaPaypal } from "react-icons/fa"
import { SiBizum } from "react-icons/si"

export default function Donate() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Haz una donación</h1>

      <div className="max-w-2xl mx-auto space-y-8">
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Métodos de pago</h2>

          <div className="space-y-4">
            <button
              className="w-full flex items-center justify-center space-x-2 bg-[#0070ba] text-white py-3 px-4 rounded-md hover:bg-[#003087] transition duration-300"
              onClick={() =>
                window.open("https://www.paypal.com/donate", "_blank")
              }
            >
              <FaPaypal className="text-2xl" />
              <span>Donar con PayPal</span>
            </button>

            {/* <button
              className="w-full flex items-center justify-center space-x-2 bg-[#00c2eb] text-white py-3 px-4 rounded-md hover:bg-[#00a3c7] transition duration-300"
              onClick={() => alert("Implementar lógica de Bizum")}
            >
              <SiBizum className="text-2xl" />
              <span>Donar con Bizum</span>
            </button> */}
          </div>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">
            Donativo por transferencia bancaria
          </h2>
          <div className="space-y-2">
            <p>
              <strong>TITULAR:</strong> Mi Mejor Amigo de Cuatro Patas
            </p>
            <p>
              <strong>IBAN:</strong> ES12 0073 0100 5505 0519 9959
            </p>
            <p>
              <strong>BANCO:</strong> Openbank
            </p>
            <p>
              <strong>BIZUM:</strong> Dona a ong Mi mejor amigo de 4 patas o
              código 04953
            </p>
          </div>
        </section>

        <section className="text-center">
          <p className="text-lg">
            Tu donación nos ayuda a seguir cuidando y encontrando hogares para
            animales necesitados. ¡Gracias por tu apoyo!
          </p>
        </section>
      </div>
    </div>
  )
}
