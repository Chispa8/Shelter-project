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
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <section
          className="relative py-20 overflow-hidden bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/shelter-app-e67e8.appspot.com/o/icons%2FPatitas-fondo.webp?alt=media&token=f64cc2b4-9d9f-4000-baed-a9323060481c')`,
            backgroundColor: "#FFEFD5", // Fallback color in case the image doesn't load
          }}
        >
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 min-h-[3rem] text-[#8B4513] drop-shadow-lg">
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
            <p className="text-[#5D4037] font-bold mb-8 text-xl drop-shadow-lg">
              Dale un hogar a un animal necesitado y cambia dos vidas para
              siempre.
            </p>
            <div className="relative inline-block">
              <Link
                to="/animals"
                className="bg-[#8B4513] text-[#FFEFD5] px-8 py-2 text-sm rounded-lg font-bold hover:bg-[#A690A4] hover:text-[#8B4513] transition duration-300 inline-block shadow-lg"
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
