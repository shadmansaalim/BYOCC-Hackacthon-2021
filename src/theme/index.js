import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  colors: {
    primary: {
      50: "#def5ff",
      100: "#b4dcfc",
      200: "#8ac3f5",
      300: "#5daaee",
      400: "#3192e7",
      500: "#1879ce",
      600: "#0c5ea1",
      700: "#034374",
      800: "#002849",
      900: "#000e1e",
    },
    secondary: {
      50: "#e5f5fb",
      100: "#cfdce2",
      200: "#b4c3ca",
      300: "#98aab4",
      400: "#7c929d",
      500: "#637984",
      600: "#4b5e67",
      700: "#35434b",
      800: "#1c292f",
      900: "#030e17",
    },
    danger: {
      50: "#ffe5e9",
      100: "#f9bcc2",
      200: "#ee919a",
      300: "#e66673",
      400: "#dd3b4b",
      500: "#c42231",
      600: "#991826",
      700: "#6e101a",
      800: "#44070e",
      900: "#1e0001",
    },
  },
})

export default theme
