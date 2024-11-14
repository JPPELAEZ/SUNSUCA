import React from 'react';
import Header from '../componentes/Header';
import Services from '../componentes/Services';
import Gallery from '../componentes/Gallery';
import About from '../componentes/About';
import Footer from '../componentes/Footer';

const HomePage = () => (
  <>
    <Header />
    <main>
      <Services />
      <Gallery />
      <About />
    </main>
    <Footer />
  </>
);

export default HomePage;
