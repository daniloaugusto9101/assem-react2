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
    <nav className="container m-auto flex justify-between items-center font-thin text-2xl text-ternary-50 px-2">
      <Logo />
      <ul className="hidden md:flex gap-12 ">
        {menuInicio && <MenuLink text="Inicio" url="/assem-react/" />}
        <MenuLink text="Notícias" url="assem-react/blog-noticias" />
        <MenuLink text="ASSEM" url={location.pathname} />
        <MenuLink text="Contatos" url="./contatos" />
      </ul>
      <MenuLink text="Fique Sócio" url="assem-react/fique-socio" />
      <GiHamburgerMenu className="block md:hidden text-4xl" />
    </nav>
  )
}

export default NavBar