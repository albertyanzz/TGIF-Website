import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    custom?: Palette["primary"];
    tertiary?: SimplePaletteColorOptions;
    quaternary?: SimplePaletteColorOptions;
  }

  interface PaletteOptions {
    custom?: PaletteOptions["primary"];
    tertiary?: SimplePaletteColorOptions;
    quaternary?: SimplePaletteColorOptions;
  }

  interface SimplePaletteColorOptions {
    main: string;
  }
}

// Update the AppBar's color prop options
declare module "@mui/material/AppBar" {
  interface AppBarPropsColorOverrides {
    tertiary: true;
    quaternary: true;
  }
}

export const COLORS = {
  PEACH: "#F4BA8D",
  YELLOW: "#F2DF74",
  ORANGE: "#F77E21",
  MAGENTA: "#D61C4E",
};

export const theme = createTheme({
  palette: {
    primary: {
      main: COLORS.PEACH,
    },
    secondary: {
      main: COLORS.YELLOW,
    },
    tertiary: {
      main: COLORS.ORANGE,
    },
    quaternary: {
      main: COLORS.MAGENTA,
    },
  },
});
