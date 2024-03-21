import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Main from "./components/Main";
import Reviews from "./components/Reviews";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Main />
      <Reviews />
      <Gallery />
      <Footer />
    </>
  );
};

export default App;
