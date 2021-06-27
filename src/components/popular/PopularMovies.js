import React, { useRef,useState,useEffect } from "react";
import PopularMovie from "./PopularMovie";
import axios from 'axios'
import "./popularMovies.css";

const PopularMovies = () => {
  const myref = useRef(null);
  const [movies,setMovies] = useState([])

  const api = process.env.REACT_APP_API
  const getMovie = async () =>{
    const {data} = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${api}&language=en-US&page=1`)
    setMovies(data.results)
  }

  useEffect(() =>{
    getMovie()
  },[])

  const right = () => {
    myref.current.scrollLeft += 405;
  };

  const left = () => {
    myref.current.scrollLeft -= 405;
  };

  return (
    <div className="popular" ref={myref}>
      <div className="categorys">
      <h1>Popular Movies</h1>
      </div>
      {movies.map(movie =>
        <PopularMovie movie={movie}/>
        )}
      
      <div className="popularMovBtns">
        <button className="prevB popularMovBtn" onClick={left}>
          &#8249;
        </button>
        <button className="nextB popularMovBtn" onClick={right}>
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default PopularMovies;
