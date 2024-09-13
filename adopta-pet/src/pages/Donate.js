import React, { useState } from "react"
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js"
import { stripePromise } from "../stripe"
import { Elements } from "@stripe/react-stripe-js"

function DonateForm() {
  const [amount, setAmount] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const stripe = useStripe()
  const elements = useElements()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!stripe || !elements) {
      return
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
      billing_details: {
        name: name,
        email: email,
      },
    })

    if (error) {
      console.log("[error]", error)
    } else {
      console.log("[PaymentMethod]", paymentMethod)
      // Aquí enviarías el paymentMethod.id a tu servidor para procesar el pago
      alert(`Gracias por tu donación de $${amount}, ${name}!`)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* ... (los campos de amount, name y email como antes) ... */}
      <div className="mb-6">
        <label
          htmlFor="card-element"
          className="block text-gray-700 font-bold mb-2"
        >
          Información de Tarjeta de Crédito
        </label>
        <CardElement
          id="card-element"
          className="p-3 border border-gray-300 rounded-md"
        />
      </div>
      <button
        type="submit"
        disabled={!stripe}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-300"
      >
        Donar
      </button>
    </form>
  )
}

function Donate() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Haz una Donación</h1>
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
        <Elements stripe={stripePromise}>
          <DonateForm />
        </Elements>
      </div>
    </div>
  )
}

export default Donate
