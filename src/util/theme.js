const typography = {
  typography: {
    fontFamily:
      "Roboto, sans-serif, Roboto Mono, monospace, Roboto Condensed, sans-serif",
    h1: {
      fontFamily: "Roboto Condensed, sans-serif",
      fontWeight: "700",
    },
    h3: {
      fontFamily: "Roboto, sans-serif",
      fontWeight: "700",
    },
    h4: {
      fontFamily: "Roboto Condensed, sans-serif",
      fontWeight: "700",
    },
    h5: {
      fontFamily: "Roboto, sans-serif",
      fontWeight: "700",
    },

    h6: {
      fontFamily: "Roboto Condensed, monospace",
      fontWeight: "700",
    },
    subtitle1: {
      fontFamily: "Roboto, sans-serif",
      fontSize: ".85rem",
    },
    subtitle2: {
      fontFamily: "Roboto Mono, monospace",
      fontSize: ".85rem",
    },
    body1: {
      fontFamily: "Roboto Condensed, sans-serif",
      fontSize: "1em",
    },
    body2: {
      fontFamily: "Roboto Condensed, sans-serif",
      fontSize: "1em",
      fontWeight: "700",
    },
    caption: {
      fontFamily: "Roboto Condensed, sans-serif",
      fontSize: ".75em",
    },
  },
};

export const darkMode = {
  ...typography,
  palette: {
    type: "dark",
    primary: {
      main: "#7FFFD4",
    },
  },
};

export const lightMode = {
  ...typography,
  palette: {
    type: "light",
    primary: {
      main: "#FF3D3D",
    },
    secondary: {
      main: "#0023EF",
    },
  },
};
