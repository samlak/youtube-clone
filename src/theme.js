import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  styles: {
    global: {
      "button:focus": {
        outline: 0 
      }
    },
  },
})

export default theme