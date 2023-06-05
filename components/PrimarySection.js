import React from "react";
import {
  PrimaryContainer,
  PrimaryHolder,
  Description,
  ImageHolder
} from "./styles/PrimarySectionStyles";

const PrimarySection = (props) => {
  const { reversed, boxed } = props;
  return (
    <PrimaryContainer id="nosotros">
      <PrimaryHolder reversed={reversed} boxed={boxed}>
        <Description>
          <span>Desbloqueamos el potencial de tus ideas</span>
          <h2>Sobre Nosotros</h2>
          <p>
            Somos una empresa con sede en el norte de Chile que se especializa
            en ofrecer servicios de asesorías y consultorías en ingeniería, así
            como en compra, venta y arriendo de bienes inmuebles y muebles.
            Nuestro enfoque se centra en brindar soluciones integrales y de alta
            calidad para la industria minera, servicios eléctricos, obras
            civiles y una amplia gama de propiedades.
          </p>
          <p>
            Nuestro equipo de expertos se especializa en brindar servicios de
            consultoría técnica y estratégica en ingeniería para la industria
            minera, servicios eléctricos y obras civiles. Nos enorgullece
            ofrecer soluciones integrales y de alta calidad respaldadas por un
            enfoque profesional y atención al detalle. Valoramos las relaciones
            sólidas y duraderas con nuestros clientes, y estamos comprometidos a
            entender sus necesidades y ofrecer soluciones adaptadas a sus
            requerimientos específicos.
          </p>
        </Description>
        <ImageHolder>
          <img src="/images/aboutus.png"/>
        </ImageHolder>
      </PrimaryHolder>
    </PrimaryContainer>
  );
};

export default PrimarySection;
