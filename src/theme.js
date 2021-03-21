import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  styles: {
    global: {
      "button:focus": {
        outline: 0 
      }
    },
  },
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  }
})

export default theme