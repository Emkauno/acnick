import React from "react";
import { HeroContainer, HeroHolder, HalfSection, Background } from "./styles/Hero";

const Hero = () => {
  return (
    <HeroContainer>
      <HeroHolder>
        <HalfSection>
          <h1>Asesorías y Consultorías en Ingenería</h1>
          <p>
            Somos líderes en soluciones innovadoras y de calidad. Ofrecemos
            servicios de consultoría personalizados en diseño, planificación y
            optimización de procesos. Garantizamos resultados eficientes y nos
            distingue nuestro compromiso con la excelencia y la satisfacción del
            cliente.
          </p>
          <a href="https://wa.me/+56975487043?text=Hola%2C+estoy+interesado+en+los+servicios+de+Acnick">Comienza aquí</a>
        </HalfSection>
        <HalfSection>
          <img src="/images/hero-img.svg" />
        </HalfSection>
        <Background>
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 500 500"
            width="100%"
            id="blobSvg"
            filter="blur(0px)"
            style={{ opacity: 1, transform: "rotate(17)" }}
          >
            {" "}
            <defs>
              {" "}
              <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                {" "}
                <stop
                  offset="0%"
                  style={{ stopColor: "rgb(165, 206, 238)" }}
                ></stop>{" "}
                <stop
                  offset="100%"
                  style={{ stopColor: "rgb(72, 140, 203)" }}
                ></stop>{" "}
              </linearGradient>{" "}
            </defs>{" "}
            <path id="blob" fill="url(#gradient)" style={{  opacity: '0.19' }}>
              <animate
                attributeName="d"
                dur="20s"
                repeatCount="indefinite"
                values="M403.5,294Q372,338,343,393Q314,448,254,435.5Q194,423,138,397.5Q82,372,88,311Q94,250,86,187.5Q78,125,134,95.5Q190,66,253,57Q316,48,362,91.5Q408,135,421.5,192.5Q435,250,403.5,294Z;M437.48517,301.93698Q392.82947,353.87396,357.50371,413.21131Q322.17795,472.54867,247.51112,479.51159Q172.8443,486.47452,129.54819,427.64458Q86.25209,368.81464,81.57785,309.40732Q76.90361,250,83.86283,191.93327Q90.82205,133.86654,141.98146,104.152Q193.14087,74.43745,247.01483,83.88926Q300.88878,93.34106,355.51112,113.62234Q410.13346,133.90361,446.13717,191.95181Q482.14087,250,437.48517,301.93698Z;M460.19079,314.81752Q429.48296,379.63503,366.74655,397.33779Q304.01014,415.04055,238.62673,450.6401Q173.24331,486.23965,141.80231,418.853Q110.3613,351.46635,87.51337,300.73317Q64.66545,250,86.56406,198.80231Q108.46268,147.60462,149.75669,107.39355Q191.05069,67.18248,258.9189,40.41566Q326.7871,13.64883,381.21107,64.45621Q435.63503,115.26359,463.26683,182.63179Q490.89862,250,460.19079,314.81752Z;M439.43806,316.51312Q432.44085,383.02623,370.39398,407.14258Q308.3471,431.25893,240.13979,459.78516Q171.93248,488.31139,132.30301,426.26451Q92.67355,364.21763,63.21484,307.10882Q33.75613,250,44.06194,178.90151Q54.36774,107.80301,118.67355,75.31613Q182.97935,42.82924,240.60882,72.66602Q298.23828,102.50279,368.10882,107.87054Q437.97935,113.23828,442.20731,181.61914Q446.43527,250,439.43806,316.51312Z;M403.5,294Q372,338,343,393Q314,448,254,435.5Q194,423,138,397.5Q82,372,88,311Q94,250,86,187.5Q78,125,134,95.5Q190,66,253,57Q316,48,362,91.5Q408,135,421.5,192.5Q435,250,403.5,294Z"
              ></animate>
            </path>
          </svg>
        </Background>
      </HeroHolder>
    </HeroContainer>
  );
};

export default Hero;
