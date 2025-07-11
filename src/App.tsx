import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Stack } from "@mui/material";
import "./App.css";
import Home from "./pages/Home";
import Destinations from "./pages/Destinations";
import Trips from "./pages/Trips";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ThemeProvider } from "@mui/material";
import theme from "./assets/theme";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          {/* NavBar for all pages */}
          <Navbar />
          {/* Content for each page */}
          <Stack component="section" pt="60px">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/destinations" element={<Destinations />} />
              <Route path="/trips" element={<Trips />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Stack>
          {/* footer for all pages */}
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
