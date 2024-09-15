import React from "react"
import HeroVideoDialog from "./magicui/hero-video-dialog"

function VideoSection() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">
          Conoce Nuestra Labor
        </h2>
        <div className="max-w-4xl mx-auto">
          <HeroVideoDialog
            className="w-full"
            animationStyle="from-center"
            videoSrc="https://www.youtube.com/embed/mUhQqkNZWxw"
            thumbnailSrc={require("../assets/images/videoImagen.PNG")}
            thumbnailAlt="Video de nuestra labor en adopción de animales"
          />
        </div>
        <p className="text-center mt-8 text-lg text-gray-700">
          Descubre cómo nuestro trabajo está cambiando vidas, tanto de animales
          como de personas.
        </p>
      </div>
    </section>
  )
}

export default VideoSection
