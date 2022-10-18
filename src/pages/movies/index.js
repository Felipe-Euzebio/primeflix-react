import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import api from '../../services/api';
import { api_key } from "../../services/api";

import './movies.css';

function Movies() {

  const { id } = useParams();

  const [movie, setMovie] = useState({});

  const [loading, setLoading] = useState(true);


  useEffect(() => {

    async function loadMovie() {

      await api.get(`movie/${id}`, {
        params: {
          api_key: api_key,
          language: 'pt-BR'
        }
      })
      .then((response) => {
        setMovie(response.data);
        setLoading(false);
      })
      .catch(() => {
        console.log('Filme não encontrado!');
      })

    }

    loadMovie();

    return () => {
      console.log('Componente desmontado');
    }

  }, []);


  if(loading) {
    return (
      <div className="movie-info">
        <h1>Carregando...</h1>
      </div>
    )
  }

  return (
    <div className="movie-info">

      <h1>{movie.title}</h1>
      <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt={movie.title} />

      <h3>Sinopse</h3>
      <span>{movie.overview}</span>

      <strong>Avaliação: {movie.vote_average} / 10</strong>

      <div className="area-buttons">

        <button>Salvar</button>

        <button>
          <a role="button" href={`https://youtube.com/results?search_query=${movie.title} Trailer`} target="_blank" rel="noreferrer">Trailer</a>
        </button>

      </div>

    </div>
  )

}

export default Movies;
