import React from 'react'
import { NavbarContainer, NavbarHolder } from './styles/Navbar'
const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarHolder>
      <img src="/acnicksvg.svg"/>
      <ul>
        <li>Inicio</li>
        <li>Nosotros</li>
        <li>Servicios</li>
        <li>Contacto</li>
      </ul>
      </NavbarHolder>
    </NavbarContainer>
  )
}

export default Navbar