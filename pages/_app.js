import { GlobalStyle } from '../styles/GlobalStyle'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
  <>
        <Head>
        <title>Acnick - Asesorías y Consultorías en Ingeniería</title>
        <meta name="description" content="Acnick - Asesorías y Consultorías en Ingeniería" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;500;700;800&display=swap" rel="stylesheet"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyle/>
      <Component {...pageProps} />
  </>
  )
}

export default MyApp
