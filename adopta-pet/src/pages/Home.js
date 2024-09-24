import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Typewriter from "typewriter-effect"
import VideoSection from "../components/VideoSection"
import DonationSection from "../components/DonationSection"
import AdoptionSection from "../components/AdoptionSection"
import CollaboratorsSection from "../components/CollaboratorsSection"

function Home() {
  const [showFullTitle, setShowFullTitle] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFullTitle(true)
    }, 3000) // Adjust this value to match your typewriter duration

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <section className="bg-blue-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 min-h-[3rem]">
              {showFullTitle ? (
                "ADOPTA, NO COMPRES."
              ) : (
                <Typewriter
                  options={{
                    strings: ["ADOPTA, NO COMPRES."],
                    autoStart: true,
                    loop: false,
                  }}
                />
              )}
            </h1>
            <p className="text-xl mb-8">
              Dale un hogar a un animal necesitado y cambia dos vidas para
              siempre.
            </p>
            <div className="relative inline-block">
              <Link
                to="/animals"
                className="bg-white text-blue-600 px-12 py-3 rounded-lg font-semibold hover:bg-blue-100 transition duration-300 inline-block"
              >
                Cambia dos vidas
              </Link>
            </div>
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
