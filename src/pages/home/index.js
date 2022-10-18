import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import api from '../../services/api';
import { api_key } from "../../services/api";

import './home.css';

function Home() {

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

      async function loadMovies() {

        const response = await api.get('movie/now_playing', {
          params: {
            api_key: api_key,
            language: 'pt-BR',
            page: 1
          }
        });

        // console.log(response.data.results.slice(0, 10));
        setMovies(response.data.results.slice(0, 10));
        setLoading(false);

      }

      loadMovies();

    }, []);

    if(loading) {
      return (
        <div className="loading">
          <h1>Carregando...</h1>
        </div>
      )
    }

    return (
      <div className="container">
        <div className="list-movies">

          {movies.map((movie) => {
            return (

              <article key={movie.id}>
                <strong>{movie.title}</strong>
                <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title} />
                <Link to={`/movies/${movie.id}`}>Acessar</Link>
              </article>

            );
          })}
          
        </div>
      </div>
    );
  }
  
  export default Home;
  