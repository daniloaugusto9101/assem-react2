import React from "react"
import Logo from "../Logo/Logo"
import { useLocation } from "react-router-dom"
import { GiHamburgerMenu } from "react-icons/gi"
import MenuLink from "../MenuLink/MenuLink"

const NavBar = () => {
  const [menuInicio, setMenuInicio] = React.useState(false)
  const location = useLocation()

  function handleMenuInicio() {
    location.pathname === "/" ? setMenuInicio(false) : setMenuInicio(true)
  }

  React.useEffect(() => {
    handleMenuInicio()
  }, [location.pathname])

  return (
    <nav className="container m-auto flex justify-between items-center font-thin text-2xl text-ternary-50 px-2 animate-slide-top">
      <Logo />
      <ul className="hidden sm:flex gap-12 ">
        {menuInicio && <MenuLink text="Inicio" url="/" />}
        <MenuLink text="Notícias" url="/noticias" />
        <MenuLink text="ASSEM" url={location.pathname} />
        <MenuLink text="Contatos" url="/contatos" />
      </ul>
      <MenuLink text="Fique Sócio" url="/fique-socio" />
      <GiHamburgerMenu className=" sm:hidden text-4xl  " />
    </nav>
  )
}

export default NavBar
