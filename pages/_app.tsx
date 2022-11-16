import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import 'bootstrap/dist/css/bootstrap.css'
import type { AppProps } from 'next/app'
import theme from '../theme/theme'
import axios from 'axios'
import { Analytics } from '@vercel/analytics/react';


axios.defaults.baseURL = 'https://api.libstracker.com/api/v1';
function MyApp({ Component, pageProps }: AppProps) {
  return <ChakraProvider theme={theme}>
      <Component {...pageProps} />
        <Analytics />
    </ChakraProvider>
}

export default MyApp
