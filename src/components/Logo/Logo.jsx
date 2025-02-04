import React from "react"
import url from "@assets/img/logo-branco-sm.png"
import { Link } from "react-router-dom"

const Logo = () => {
  return (
    <div className=" p-1 w-14 ">
      <Link to={import.meta.env.VITE_BASE_URL}>
        <img className="block" src={url} alt="Logo da ASSEM" />
      </Link>
    </div>
  )
}

export default Logo
