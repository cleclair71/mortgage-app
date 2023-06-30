import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  colors: {
    custom: {
      header: '#d4d9d4',
      text: '#454a44',
      backgroundDark: '#454a44',
      backgroundBeige: '#eaece9',
      backgroundWhite: '#f6f6f8',
      backgroundLight: '#ecefec',
      accentGreen: '50703e',
    },
  },
  components: {
    Button: {
      variants: {
        outline: {
          borderColor: "custom.text",
          color: "custom.text",
          backdropFilter: 'auto',
           backdropBlur: '8px',
        //   bg: "custom.header",
          _hover: {
            bg: "white",
          }
        },
      },
    },
  },
});

export default theme;