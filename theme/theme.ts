// theme.js

// 1. import `extendTheme` function
import { extendTheme } from '@chakra-ui/react'

// 2. Add your color mode config
const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const colors = {
    brand: {
      900: '#1a365d',
      800: '#153e75',
      700: '#2a69ac',
    },
    blue: {
        "50": "#E7F0FE",
        "100": "#BBD5FC",
        "200": "#8FBAF9",
        "300": "#64A0F7",
        "400": "#3885F5",
        "500": "#0C6AF3",
        "600": "#0A55C2",
        "700": "#074092",
        "800": "#052A61",
        "900": "#021531"
      }
  }

// 3. extend the theme
const theme = extendTheme({ config, colors })

export default theme