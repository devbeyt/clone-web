import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
// import { FaQuoteRight } from 'react-icons/fa';
import data from './caruselData';
import './carusel.css'

function Carusel() {
    const [products, setProducts] = useState(data);
    const [index, setIndex] = React.useState(0);
    
    useEffect(() => {
        const lastIndex = products.length - 1;
        if (index < 0) {
            setIndex(lastIndex);
        }
        if (index > lastIndex) {
            setIndex(0);
        }
    }, [index, products]);

    useEffect(() => {
        let slider = setInterval(() => {
            setIndex(index + 1);
        }, 6000);
        return () => {
            clearInterval(slider);
        };
    }, [index]);

    return (
        <section className="section carusel_section">
      <div className="section-center">
        {products.map((product, productIndex) => {
          const { id, image, name, } = product;

          let position = 'nextSlide';
          if (productIndex === index) {
            position = 'activeSlide';
          }
          if (
            productIndex === index - 1 ||
            (index === 0 && productIndex === products.length - 1)
          ) {
            position = 'lastSlide';
          }

          return (
            <article className={position} key={id}>
              <img src={image} alt={name} className="product_img" />
            </article>
          );
        })}
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>
      </div>
    </section>
    )
}

export default Carusel