import React from "react"
import { Link } from "react-router-dom"

const Button = ({ children, to, className = "", onClick }) => {
  const buttonClasses = `relative flex h-[50px] items-center justify-center overflow-hidden bg-emerald-500 text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-amber-500 before:duration-500 before:ease-out hover:shadow-amber-500 hover:before:h-56 hover:before:w-56 ${className}`

  const content = (
    <>
      <span className="relative z-10">{children}</span>
    </>
  )

  if (to) {
    return (
      <Link to={to} className={buttonClasses}>
        {content}
      </Link>
    )
  }

  return (
    <button className={buttonClasses} onClick={onClick}>
      {content}
    </button>
  )
}

export default Button
