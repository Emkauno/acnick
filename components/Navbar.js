import { useState } from 'react'
import { NavbarContainer, NavbarHolder, MobileNavContainer, container, DesktopNavbar } from './styles/Navbar'
import Link from 'next/link'
import { motion } from 'framer-motion'

const Navbar = () => {
  
  const [open, setOpen] = useState(false);
  const HamburgerBehavior = () => {
    setOpen(!open);
  };

  return (
    <NavbarContainer>
      <NavbarHolder>
        <img src="/logo.svg"/>
        <DesktopNavbar>
          <ul>
            <Link href="/">Inicio</Link>
            <Link href="/#servicios" scroll={false}>Servicios</Link>
            <Link href="/#nosotros" scroll={false}>Nosotros</Link>
            <Link href="/#misionyvision" scroll={false}>Misión y Visión</Link>
            <a className="cta-navbar" href="https://wa.me/+56975487043?text=Hola%2C+estoy+interesado+en+los+servicios+de+Acnick">Contáctanos</a>
          </ul>
        </DesktopNavbar>
    
      <svg
          className={`ham hamRotate ham8 ${open && "active"}`}
          viewBox="0 0 100 100"
          width="50"
          onClick={HamburgerBehavior}
        >
          <path
            className="line top"
            d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"
          />
          <path className="line middle" d="m 30,50 h 40" />
          <path
            className="line bottom"
            d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"
          />
        </svg>
      <MobileNavContainer className={open && "on"}>
          {open && (
            <>
              <div className="logo-container" id="NavMobile">
                <img src="/logo.svg"/>
              </div>
              <motion.ul
                variants={container}
                initial="hidden"
                animate="show"
                id="NavMenuMobile"
                onClick={HamburgerBehavior}
              >
                <Link href="/">Inicio</Link>
                <Link href="/#servicios" scroll={false}>Servicios</Link>
                <Link href="/#nosotros" scroll={false}>Nosotros</Link>
                <Link href="/#misionyvision" scroll={false}>Misión y Visión</Link>
                <Link className="cta-navbar" href="https://wa.me/+56975487043?text=Hola%2C+estoy+interesado+en+los+servicios+de+Acnick">Contáctanos</Link>
              </motion.ul>
            </>
          )}
        </MobileNavContainer>
      </NavbarHolder>
    </NavbarContainer>
  )
}

export default Navbar