import {useState, useEffect, Fragment} from 'react';
import axios from 'axios';
import Movie from './Components/Movie.js'





const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";


function App() {

  const [movie, setMovie]= useState([])
  const [searchterm, setSearchTerm] = useState('')

  useEffect(() => {

    const consultaApi = async () => {

      const result = await axios (APIURL);

      setMovie(result.data.results);

      
      };
      consultaApi()


         
}, [])


    const handleOnSubmit = (e) =>{
      e.preventDefault();

      if (searchterm){

      const consultaApiBusqueda = async () => {

          const resultBusqueda = await axios (SEARCHAPI + searchterm);

          

          setMovie(resultBusqueda.data.results)
          };

          
          consultaApiBusqueda()
          setSearchTerm("");
        }
          
    }

    const handleOnChange = (e) =>{
      setSearchTerm(e.target.value);
    }

  


  return (
    <Fragment>
    <div className="header_container">
            
            
            <form onSubmit={handleOnSubmit}>
                <input
                  className="search"
                  type="text"
                  placeholder="Search..."
                  value={searchterm}
                  onChange={handleOnChange}

                />
            </form>
            
        </div>
    <div className="content">
      <div className="movie_container">
        {movie.map((movie)=> <Movie key={movie.id} {...movie}/>)}
      </div>
    </div>
    </Fragment>
  );
}

export default App;
