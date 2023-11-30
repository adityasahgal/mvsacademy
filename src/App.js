import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";
import Cards from "./components/Cards";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
