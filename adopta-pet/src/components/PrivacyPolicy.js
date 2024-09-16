import React, { useState } from "react"

function PrivacyPolicy() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleModal = () => setIsOpen(!isOpen)

  return (
    <>
      <button onClick={toggleModal} className="text-white hover:underline">
        Política de privacidad y protección de datos personales
      </button>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <h2 className="text-2xl text-black font-bold mb-4">
              Política de Privacidad y Protección de Datos Personales
            </h2>
            <div className="text-sm text-black">
              <p className="mb-4">
                Con este documento, queremos informar de los motivos que
                justifican la recogida de datos personales a través de esta
                página web, qué hacemos con ellos, cuáles son tus derechos y
                cómo ejercitarlos.
              </p>

              <h3 className="font-bold mt-4 mb-2">Responsable de los datos</h3>
              <p>
                Apa Mi Mejor Amigo de 4 Patas
                <br />
                Madrid (España)
                <br />
                Correo electrónico: apa@mimejoramigodecuatropatas.com
              </p>

              <h3 className="font-bold mt-4 mb-2">
                Condiciones de uso y política de protección de datos
              </h3>
              <p className="mb-4">
                Apa Mi Mejor Amigo de 4 Patas cumple con la legislación vigente
                en materia de protección de datos de carácter personal y con los
                compromisos de confidencialidad propios de su actividad.
              </p>

              <p className="mb-4">
                Mantiene el nivel de seguridad requerido en el tratamiento de
                los datos personales que maneja, según la naturaleza de los
                datos personales tratados y las circunstancias del tratamiento,
                con el objeto de evitar, en la medida de lo posible, su
                alteración, pérdida, tratamiento o acceso no autorizado.
              </p>

              {/* Add the rest of the privacy policy text here */}

              <h3 className="font-bold mt-4 mb-2">
                Derechos de los usuarios respecto al tratamiento de sus datos
                personales
              </h3>
              <p className="mb-4">
                Cualquier usuario en cualquier momento puede ejercitar tus
                derechos haciendo su peticion en
                apa@mimejoramigodecuatropatas.com. Informamos de que los
                derechos que puede ejercitar son:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Derecho de acceso a sus datos personales.</li>
                <li>Derecho a solicitar su rectificación o supresión.</li>
                <li>Derecho a solicitar la limitación del tratamiento.</li>
                <li>Derecho a oponerse a su tratamiento.</li>
              </ul>
              <p>
                Igualmente, se informa de que podrá presentarse una reclamación
                ante la Agencia Española de Protección de Datos (C/ Jorge Juan,
                6 28001 Madrid) en caso de no obtener una respuesta
                satisfactoria en el ejercicio de sus derechos.
              </p>
              <p className="mt-4">
                Esta política de privacidad, protección de datos y uso de
                cookies ha sido revisada y actualizada a 27 de mayo de 2018.
              </p>
            </div>
            <button
              onClick={toggleModal}
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default PrivacyPolicy
