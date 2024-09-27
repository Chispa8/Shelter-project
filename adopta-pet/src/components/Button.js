import React from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

const Button = ({ children, to, className = "", onClick }) => {
  const buttonClasses = `relative flex h-[50px] items-center justify-center overflow-hidden bg-[#49C891] text-white shadow-md transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-[#A690A4] before:duration-500 before:ease-out hover:shadow-[#FCD0A1] hover:before:h-56 hover:before:w-56 ${className}`

  const content = (
    <>
      <span className="relative z-10">{children}</span>
    </>
  )

  if (to) {
    return (
      <Link to={to} className={buttonClasses}>
        <motion.div
          className="w-full h-full flex items-center justify-center"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          {content}
        </motion.div>
      </Link>
    )
  }

  return (
    <button className={buttonClasses} onClick={onClick}>
      <motion.div
        className="w-full h-full flex items-center justify-center"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        {content}
      </motion.div>
    </button>
  )
}

export default Button
