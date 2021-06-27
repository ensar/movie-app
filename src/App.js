import Navbar from './components/navbar/Navbar'
import './app.css'
import MovieSlider from './components/slider/MovieSlider'
import PopularMovies from './components/popular/PopularMovies';
import MyList from './components/list/MyList'
function App() {
  return (
    <div className="App">
      <Navbar />
      <MovieSlider />
      <PopularMovies />
      <MyList />
    </div>
  );
}

export default App;
