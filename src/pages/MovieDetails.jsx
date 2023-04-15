import { useParams } from 'react-router-dom';
import { fetchByID } from 'service/api';
import { useEffect, useState } from 'react';
import { Container } from './MovieDetails.styled';

const MovieDetails = () => {
  const baseURL = 'https://image.tmdb.org/t/p/w300';
  const { id } = useParams();

  const [movie, setMovie] = useState({});

  useEffect(() => {
    try {
      fetchByID(id).then(({ data }) => {
        setMovie(data);
        console.log(data);
      });
    } catch (error) {
      console.log(error);
    }
  }, [id]);

  return (
    <main>
        <Container>
          <img src={`${baseURL}${movie.poster_path}`} alt="" />
          <div>
            <h2>{movie.title}</h2>
            <p>User score: {movie.vote_average}</p>
            <h3>Overview</h3>
            <p>{movie.overview}</p>
            <h3>Genres</h3>
            <ul>
                {movie.genres.length > 0
                ? movie.genres.map(genre =>
                    <li>{genre.name}</li>
                )
            : 'No info'}
            </ul>
          </div>
        </Container>
    </main>
  );
};

export default MovieDetails;
