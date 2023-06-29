import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  colors: {
    custom: {
      header: '#d4d9d4',
      text: '#454a44',
      backgroundWhite: '#454a44',
      backgroundBeige: '#eaece9',
      backgroundDark: '#d8ddd7',
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