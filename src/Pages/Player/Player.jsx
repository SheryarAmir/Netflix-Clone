import React, { useEffect, useState } from "react";
import "./Player.css";
import back_arrow_icon from "../../assets/back_arrow_icon.png";
import { useNavigate, useParams } from "react-router-dom";

const Player = () => {

  const navigate = useNavigate();
  const {id} = useParams();

  const [apiData , setApiData]=useState({

    name :"",
    key: "",
    published_at:"",
    typeof: ""
  });


  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OTU4MmY3YTNkMDkwZmViZDQ1OWUwMWYxM2Y3MjI1YSIsIm5iZiI6MTcyMTQxOTA4Ny43OTU3NzUsInN1YiI6IjY2OWFjM2JiYTZlMzRkMGJlYWJmYThlZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.72noWt7upy4LxXufSq6qU16uQvwqIE2SuFvtFZPHqn4'
    }
  };
  

  
  
  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(response => response.json())
    .then(response => setApiData(response.results[0]))
    .catch(err => console.error(err));

  } ,[])
  

  return (
    <div className="player">
      <img  src={back_arrow_icon} alt="" onClick={()=>{navigate(-2)}} />
      <iframe
        width='90%'
        height='90%'
        src={`https://www.youtube.com/embed/${apiData.key}`}
        title="Trailer"
        frameBorder='0'
        allowFullScreen
      >  </iframe>

      <div className="player-info">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name.slice(0,10)}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  );
};

export default Player;
