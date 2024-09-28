import React, { useState } from "react"
import { motion } from "framer-motion"
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa"

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitStatus("sending")

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to: "shelter-email@mail.com",
          subject: `Nuevo mensaje de contacto: ${formData.subject}`,
          text: `
            Nombre: ${formData.name}
            Email: ${formData.email}
            Asunto: ${formData.subject}
            Mensaje: ${formData.message}
          `,
        }),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        })
      } else {
        throw new Error("Failed to send email")
      }
    } catch (error) {
      console.error("Error sending email:", error)
      setSubmitStatus("error")
    }

    setTimeout(() => setSubmitStatus(null), 3000)
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
        <h1 className="text-4xl font-extrabold mb-12 text-center text-[#8B4513]">
          Contáctanos
        </h1>
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-8">
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block text-[#8B4513] font-semibold mb-2"
                >
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-[#A690A4] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B4513] transition duration-300"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-[#8B4513] font-semibold mb-2"
                >
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-[#A690A4] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B4513] transition duration-300"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="subject"
                  className="block text-[#8B4513] font-semibold mb-2"
                >
                  Asunto
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-[#A690A4] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B4513] transition duration-300"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-[#8B4513] font-semibold mb-2"
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-3 border border-[#A690A4] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B4513] transition duration-300"
                  required
                ></textarea>
              </div>
              <div className="flex items-center justify-between">
                <motion.button
                  type="submit"
                  className="bg-[#8B4513] hover:bg-[#A690A4] text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline transition duration-300"
                  disabled={submitStatus === "sending"}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {submitStatus === "sending"
                    ? "Enviando..."
                    : "Enviar Mensaje"}
                </motion.button>
                {submitStatus === "success" && (
                  <p className="text-green-600 font-semibold">
                    Mensaje enviado con éxito!
                  </p>
                )}
                {submitStatus === "error" && (
                  <p className="text-red-600 font-semibold">
                    Error al enviar el mensaje. Por favor, inténtalo de nuevo.
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
        <motion.div
          className="mt-12 bg-[#FCD0A1] rounded-xl shadow-lg p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold mb-6 text-[#8B4513] text-center">
            Información de Contacto
          </h2>
          <div className="flex flex-col items-center space-y-4">
            <div className="flex items-center">
              <FaPhone className="text-[#8B4513] mr-4" />
              <p className="text-[#8B4513]">Teléfono: (123) 456-7890</p>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="text-[#8B4513] mr-4" />
              <p className="text-[#8B4513]">Email: info@adoptapet.com</p>
            </div>
            <div className="flex items-center">
              <FaMapMarkerAlt className="text-[#8B4513] mr-4" />
              <p className="text-[#8B4513]">
                Dirección: 123 Calle Principal, Ciudad, País
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact
