import React from 'react'
import { CardsContainer, CardsHolder, Card } from './styles/CardsSectionStyles'

const CardsSection = () => {
  return (
    <CardsContainer id="servicios">
      <span>Soluciones innovadoras y de calidad</span>
      <h2>Nuestros servicios</h2>
      <CardsHolder>
        <Card>
          <img src="/images/acnick-icon1.svg"/>
          <h3>ASESORÍAS Y CONSULTORÍAS EN INGENIERIA</h3>
          <ul>
            <li>Evaluación, preparación y ejecución de proyectos para la minería</li>
            <li>Servicios en materia de energía eléctrica y obras civiles</li>
          </ul>
        </Card>
        <Card>
        <img src="/images/acnick-icon2.svg"/>
          <h3>COMPRAVENTA Y ARRIENDO DE BIENES INMUEBLES</h3>
          <ul>
            <li>Contamos con un stock de compra, venta y arriendos de inmuebles. Casas, habitaciones, locales comerciales, oficinas, departamentos, loteos y propiedades industriales</li>
          </ul>
        </Card>
        <Card>
        <img src="/images/acnick-icon3.svg"/>
          <h3>COMPRAVENTA Y ARRIENDO DE BIENES MUEBLES</h3>
          <ul>
            <li>Arriendo de vehículos</li>
            <li>Arriendo de maquinarias</li>
            <li>Arriendo de servicios de comunicación satelital y dispositivos electrónicos</li>
          </ul>
        </Card>
      </CardsHolder>
    </CardsContainer>
  )
}

export default CardsSection