import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);
  const [search,setserch]=useState('')
  
  useEffect(() => {
    // Fetch movie data when the component mounts
    axios
      .get('https://api.themoviedb.org/3/movie/popular?api_key=d7835d06aa9bf95f73ab15509e7dc769&query=${search}')
      .then(response => {
        setData(response.data.results);
      })
      .catch(err => {
        console.log(`ERROR! ${err}`);
      });
  }, [search]); 
  function searchmovie() {
    setserch("")
    
 

  }
  const mystyle = {
    width: '14.75rem',}
  


  return (
    <>
    <div className='header'>
      <div className='partone'>
      <a href='#'>movieDb App</a>
      <a href='#'> Trending</a>
      </div>
      <div >
        <input type='text' placeholder='Movie search' value={search}/>
        <button className='buttonheader' onClick={searchmovie()} >search</button>
      </div>
    </div>
    
    <div className='sec'>
        <div className='container d-flex justify-content-around flex-grow flex-wrap '>
          {data.map(movie => (
            <div className="card bg-secondary" style={mystyle} key={movie.id}>
              <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
              <h5 className="card-title text-light text-center">{movie.title}</h5>
              <a href="#" className="btn btn-dark text-light">View more</a>
            </div>
          ))}
   </div>
   </div>

      
    </>
  
        )  }

export default App
