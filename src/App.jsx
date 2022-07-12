import React from "react";
import Header from "./components/header/header";
import Nav from "./components/nav/Nav";
import About from "./components/about/about";
import Experience from "./components/experience/Experience";
import Portfolio from "./components/portfolio/portfolio";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/footer";

const App = () => {
  return (
    <div>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
