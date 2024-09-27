import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

function DonationSection() {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 2 } },
  }

  return (
    <section ref={ref} className="py-20 bg-[#8E5A35] relative overflow-hidden">
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl font-bold mb-10 text-[#A690A4]">
          Ayúdanos a Seguir Salvando Vidas
        </h2>
        <p className="text-xl font-bold mb-8 text-[#A690A4]">
          Tu donación nos permite rescatar y cuidar a más animales necesitados.
        </p>
        <Link
          to="/donate"
          className="bg-[#A690A4] hover:bg-[#FCD0A1] text-[#FCD0A1] hover:text-[#A690A4] font-bold py-3 px-6 rounded-lg transition duration-300 inline-block"
        >
          Hacer una Donación
        </Link>
      </div>

      {/* Cat image on the left */}
      <motion.div
        className="absolute left-10 top-1/2 transform -translate-y-1/2 w-[14%] z-0 hidden md:block"
        initial="hidden"
        animate={controls}
        variants={fadeInVariants}
      >
        <motion.img
          src="https://firebasestorage.googleapis.com/v0/b/shelter-app-e67e8.appspot.com/o/icons%2FCat-drawing.webp?alt=media&token=e1ebc496-494d-4fff-bb69-181846f707b4"
          alt="Cat illustration"
          className="w-full h-auto"
          whileHover={{ scale: 1.1, rotate: -5 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
        />
      </motion.div>

      {/* Dog image on the right */}
      <motion.div
        className="absolute right-10 top-1/2 transform -translate-y-1/2 w-[14%] z-0 hidden md:block"
        initial="hidden"
        animate={controls}
        variants={fadeInVariants}
      >
        <motion.img
          src="https://firebasestorage.googleapis.com/v0/b/shelter-app-e67e8.appspot.com/o/icons%2FDog-drawing.webp?alt=media&token=22da49b6-f801-413f-8d20-2a68125cb93b"
          alt="Dog illustration"
          className="w-full h-auto"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
        />
      </motion.div>
    </section>
  )
}

export default DonationSection
