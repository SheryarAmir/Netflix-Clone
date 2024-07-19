import React from 'react';
import Slider from 'react-slick';
import './TittleCart.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import cards_data from '../../assets/cards/Cards_data';

const TittleCart = ({title ,category}) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1200,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,           // Add autoplay
    autoplaySpeed: 1000,      // Set autoplay speed
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,      // Add autoplay for this breakpoint
          autoplaySpeed: 1000, // Set autoplay speed for this breakpoint
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,      // Add autoplay for this breakpoint
          autoplaySpeed: 1000, // Set autoplay speed for this breakpoint
        }
      }
    ]
  };

  return (
    <div className='Tittle-Cart'>
      <h2>{title ? title :"Popular on Netflix"}</h2>
      <Slider {...settings}>
        {cards_data.map((card, index) => (
          <div className='card' key={index}>
            <img className="img" src={card.image} alt={card.name} />
            <div className="overlay">
              <p>{card.name}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TittleCart;
