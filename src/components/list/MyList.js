import React,{useState,useEffect} from "react";
import './list.css';
import axios from 'axios'
import MyListMovie from "./MyListMovie";

const MyList = () => {
    const [listMovie,setListMovie] = useState([])

    const api=process.env.REACT_APP_API;

    const getListMovie = async () =>{
      const {data} = await axios.get(`https://api.themoviedb.org/3/list/7099708?api_key=${api}&language=en-US`)
    setListMovie(data.items)
    }
  
    useEffect(() =>{
      getListMovie()
    },[])

    const delMovie = (id)=>{
        setListMovie(listMovie.filter(movie=>movie.id !==id))
    }
  return (
     
    <div className="movieBox">

        {listMovie.map(mov =>
            <MyListMovie mov={mov} del={delMovie} />)}
    </div>
   
  );
};

export default MyList;
