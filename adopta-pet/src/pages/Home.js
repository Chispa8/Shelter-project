import React from "react"
import { Link } from "react-router-dom"
import VideoSection from "../components/VideoSection"
import DonationSection from "../components/DonationSection"
import AdoptionSection from "../components/AdoptionSection"
import CollaboratorsSection from "../components/CollaboratorsSection"

function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <section className="bg-blue-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              ADOPTA, NO COMPRES.
            </h1>
            <p className="text-xl mb-8">
              Dale un hogar a un animal necesitado y cambia una vida para
              siempre.
            </p>
            <Link
              to="/animals"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-100 transition duration-300"
            >
              Cambia dos vidas
            </Link>
          </div>
        </section>

        <VideoSection />
        <DonationSection />
        <AdoptionSection />
        <CollaboratorsSection />
      </main>
    </div>
  )
}

export default Home
