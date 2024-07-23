import React, { useEffect, useRef, useState } from 'react';
import cards_data from "../../assets/cards/Cards_data";
import "./TittleCart.css";
import { Link } from 'react-router-dom';

const TittleCart = ({title , category}) => {

const [apiData , setApiData]=useState([


])



  const cardsRef= useRef()



  

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OTU4MmY3YTNkMDkwZmViZDQ1OWUwMWYxM2Y3MjI1YSIsIm5iZiI6MTcyMTQxOTA4Ny43OTU3NzUsInN1YiI6IjY2OWFjM2JiYTZlMzRkMGJlYWJmYThlZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.72noWt7upy4LxXufSq6qU16uQvwqIE2SuFvtFZPHqn4'
    }
  };
  




  const handleWheel=(event)=>{
event.preventDefault();
cardsRef.current.scrollLeft += event.deltaY;
  }


  useEffect(()=>{

    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
    .then(response => response.json())
    .then(response => setApiData(response.results))
    .catch(err => console.error(err));

    // 

cardsRef.current.addEventListener('wheel' ,handleWheel);

  },[])
  return (
    <div className='tittlecards'>
      <h2 >{ title ? title : " Popular on Netflix " }</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index) => {

return <Link to={`/Player/${card.id}`} className="card" key={index}>
            <img className="card-image" src={ `https://image.tmdb.org/t/p/w500/` + card.backdrop_path} alt={card.name} />
            <p>{card.original_title}</p>
          </Link>
        })}
      </div>
    </div>
  );
}

export default TittleCart;
