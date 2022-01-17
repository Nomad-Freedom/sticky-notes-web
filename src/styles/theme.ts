import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import { Theme } from "@mui/system";

interface CardItem {
  main?: string;
  dark?: string;
}

declare module "@mui/material/styles" {
  // allow configuration using `createTheme`

  interface PaletteOptions {
    one?: CardItem;
    two?: CardItem;
    third?: CardItem;
    four?: CardItem;
    five?: CardItem;
  }
}

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    secondary: {
      main: "#19857b",
    },

    error: {
      main: red.A400,
    },
    one: {
      main: "#F6BD60",
      dark: "#f6aa2f",
    },
    two: {
      main: "#F7EDE2",
      dark: "#c4bcb4",
    },
    third: {
      main: "#F5CAC3",
      dark: "#f5a193",
    },
    four: {
      main: "#84A59D",
      dark: "#63a595",
    },
    five: {
      main: "#F28482",
      dark: "#f25552",
    },
  },
});

export default theme;
