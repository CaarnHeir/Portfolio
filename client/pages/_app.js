import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/Layout'

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  return (
  <ChakraProvider>
    <title>Caarn Heir</title>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </ChakraProvider>
  )
}

export default MyApp
