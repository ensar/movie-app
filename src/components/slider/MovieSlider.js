import { useState } from 'react'
import './movieslider.css'
import {MovieSliderData} from './MovieSliderData'

const MovieSlider = () =>{
    
    const [current,setCurrent] = useState(0)
    const movie = MovieSliderData[current]
    
    const nextMovie = () =>{
        current===MovieSliderData.length-1 ? setCurrent(0) : setCurrent(current+1)
    }
    const prevMovie = () =>{
        current===0 ? setCurrent(2) : setCurrent(current-1)
    }
    return (
        
        <div className="section1">
             
            <img className="section1-img" alt={movie.name} src={movie.image}/>
            <div className="movieCard">
                <h1>{movie.name}</h1>
                <button>Play</button>
                <p>{movie.overview}</p>
            </div>
            
            <button className="prev slideBtn" onClick={prevMovie}>&#8249;</button>
            <button className="next slideBtn" onClick={nextMovie}>&#8250;</button>
            <div className="shadow"></div>
        </div>
    )
}
export default MovieSlider;