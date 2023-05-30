import React from 'react'
import { SectionHolder } from './styles/Section'
const Section = ({sectionTitle = "Section Title", sectionDescription = "Description", sectionCta = "CTA", sectionCtaLink = "/"}) => {
  return (
    <SectionHolder>
      <h1>{sectionTitle}</h1>
      <h1>{sectionDescription}</h1>
      <h1>{sectionCta}</h1>
      <h1>{sectionCtaLink}</h1>
    </SectionHolder>
  )
}

export default Section