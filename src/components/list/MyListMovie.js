import React from 'react'

const MyListMovie = ({mov,del}) => {
    
    return (
        <div className="listBox" key={mov.id}>
        <img alt={mov.title} src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${mov.poster_path}`}/>
        <button className="btn" onClick={()=>del(mov.id)}>delete</button>
        <div className="vote">{mov.vote_average}</div>
        </div>
    )
}

export default MyListMovie
