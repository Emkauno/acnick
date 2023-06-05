import { useState } from "react";
import { TabContent } from "./TabContent";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import {
  TabsContainer,
  TabsHeader,
  ContentWrapper,
} from "./styles/TabsSection";

const TabsSection = () => {
  const items = [
    {
      tabTitle: "Nuestra Misión",
      tabHeader: "Nuestra Misión",
      tabDescription:
        "En nuestra empresa, nos dedicamos a brindar soluciones integrales y de vanguardia en consultoría y asesoría en ingeniería. Nuestro objetivo es ayudar a nuestros clientes a alcanzar el éxito en sus proyectos, a través de un enfoque personalizado, conocimientos técnicos especializados y una colaboración estrecha. Trabajamos con pasión y compromiso para superar los desafíos técnicos más exigentes y ofrecer resultados excepcionales.",
      tabImage: '/images/mision.svg',
      },
    {
      tabTitle: "Nuestra Visión",
      tabHeader: "Nuestra Visión",
      tabDescription:
        "Nos esforzamos por ser reconocidos como líderes en el campo de la consultoría y asesoría en ingeniería, destacando por nuestra excelencia técnica, innovación y ética profesional. Buscamos ser el socio preferido de nuestros clientes, brindándoles soluciones de ingeniería confiables y a la vanguardia, que les permitan alcanzar sus metas y tener un impacto positivo en la sociedad. Nos mantenemos comprometidos con el crecimiento y desarrollo continuo, adaptándonos a los cambios tecnológicos y desafíos emergentes para seguir siendo líderes en nuestro campo.",
      tabImage: '/images/vision.svg',
      tabReverse: true,
      },
  ];
  const [activeTab, setActiveTab] = useState("tab-1");

  const clickHandler = (index) => {
    setActiveTab(`tab-${index}`);
  };
  return (
    <ContentWrapper id="misionyvision">
      <TabsContainer>
        <TabsHeader>
          <LayoutGroup transition={{ duration: 0.3 }}>
            {items.map((item, i) => (
              <button
                onClick={() => clickHandler(i + 1)}
                className={activeTab === `tab-${i + 1}` ? "active" : null}
                key={`tabItem-${i}`}
              >
                {item.tabTitle && <h2>{item.tabTitle}</h2>}
                {activeTab === `tab-${i + 1}` ? (
                  <motion.div
                    className="underline"
                    layoutId="underline"
                    key={`underline-${i}`}
                  />
                ) : null}
              </button>
            ))}
          </LayoutGroup>
        </TabsHeader>
        <AnimatePresence initial={false} mode="wait">
          {items.map(
            (item, i) =>
              activeTab === `tab-${i + 1}` && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ y: -10, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  key={`tabMotion-${i}`}
                  style={{ width: "100%"}}
                >
                  <TabContent content={item} key={`tabContent-${i}`} />
                </motion.div>
              )
          )}
        </AnimatePresence>
      </TabsContainer>
    </ContentWrapper>
  );
};

export default TabsSection;
