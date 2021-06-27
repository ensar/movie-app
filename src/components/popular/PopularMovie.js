import React from 'react'


const PopularMovie = ({movie}) => {
    
    const clipText = (text,max) =>{
       return text.length > max ? text.slice(0,max) +" more..." : text
     } 
     const {overview} = movie
    return (
       
        <div className ="movie" key={movie.id} style={{backgroundImage:`url("https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}")`}} >
        <h2>{movie.title}</h2>
        <div className="overview">
        <p>{clipText(overview,250)}</p>
        </div>
    </div>
    
    )
}

export default PopularMovie
