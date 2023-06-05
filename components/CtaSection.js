import React from "react";
import { CtaContainer, CtaHolder } from "./styles/CtaSectionStyles";

const CtaSection = () => {
  return (
    <CtaContainer>
      <CtaHolder>
        <span>Tu visión es nuestra pasión</span>
        <h2>Transformando Ideas en Realidad</h2>
        <p>
          Entendemos que cada paso cuenta y queremos ser
          tus aliados en el camino. Nuestra amplia experiencia nos permite ofrecerte soluciones sólidas y
          eficientes que te ayudarán a superar cualquier obstáculo. No importa
          en qué etapa te encuentres, desde la planificación inicial hasta la
          implementación y el seguimiento, estamos aquí para brindarte el apoyo
          y la orientación que necesitas. Contáctanos y juntos haremos que tu
          proyecto se convierta en una realidad exitosa. <br/>
        </p>
        <a href="https://wa.me/+56975487043?text=Hola%2C+me+interesan+los+servicios+de+Acnick">Comienza aquí</a>
      </CtaHolder>
    </CtaContainer>
  );
};

export default CtaSection;
