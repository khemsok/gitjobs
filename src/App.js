import React, { useState, useEffect } from "react";
import "./App.css";

// MUI
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme } from "@material-ui/core/styles";

// Components
import { ThemeProvider } from "@material-ui/styles";
import Navbar from "./components/Navbar";
import SearchJobs from "./components/SearchJobs";
import Footer from "./components/Footer";

// Theme
import { lightMode, darkMode } from "./util/theme";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);
  const handleChangeMode = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <ThemeProvider
      theme={
        theme === "light" ? createMuiTheme(lightMode) : createMuiTheme(darkMode)
      }
    >
      <CssBaseline />
      <div
        style={{
          position: "relative",
          minHeight: "100vh",
          paddingBottom: "130px",
        }}
      >
        <Navbar handleChangeMode={handleChangeMode} theme={theme} />
        <Container>
          <SearchJobs />
        </Container>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
