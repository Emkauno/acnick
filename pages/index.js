import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import MainContainer from "../components/MainContainer";
import Section from "../components/Section";
import Hero from "../components/Hero";
import PrimarySection from "../components/PrimarySection";
import CardsSection from "../components/CardsSection";
import TabsSection from "../components/TabsSection";
import CtaSection from "../components/CtaSection";
import Layout from "../components/Layout";
export default function Home() {
  return (
      <Layout>
        <MainContainer>
          <Hero />
          <CardsSection />
          <PrimarySection reversed/>
          <TabsSection />
          <CtaSection />
        </MainContainer>
      </Layout>
  );
}
