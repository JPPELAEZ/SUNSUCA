import React from 'react';
import './Gallery.css';

const Gallery = () => (
  <section id="gallery">
    <h2>Galería</h2>
    <div className="gallery-grid">
      <img src="/path-to-image1.jpg" alt="Imagen 1" />
      <img src="/path-to-image2.jpg" alt="Imagen 2" />
      {/* Añadir más imágenes */}
    </div>
  </section>
);

export default Gallery;

