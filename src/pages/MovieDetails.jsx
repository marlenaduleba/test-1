import { useParams, Outlet, useLocation } from 'react-router-dom';
import { fetchByID } from 'service/api';
import { useEffect, useState } from 'react';
import { Container, List, Item, Subtitle, StyledLink, LinkList } from './MovieDetails.styled';
import { BackLink } from 'components/BackLink';

const MovieDetails = () => {
  const baseURL = 'https://image.tmdb.org/t/p/w300';
  const { id } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? "products";

  const [film, setFilm] = useState({});

  useEffect(() => {
    try {
      fetchByID(id).then(({ data }) => {
        setFilm(data);
        console.log(data);
      });
    } catch (error) {
      console.log(error);
    }
  }, [id]);

  return (
    <main>
      <BackLink  to={backLinkHref}>Go back</BackLink>
        <Container>
          
          <img src={`${baseURL}${film.poster_path}`} alt={film.title} />
          <div>
            <h2>{film.title}</h2>
            <p>User score: {film.vote_average}</p>
            <h3>Overview</h3>
            <p>{film.overview}</p>
            <h3>Genres</h3>
           
            {/* <List>
                {film.genres.length > 0
                ? film.genres.map(genre =>
                    <Item key={genre.id}>{genre.name}</Item>
                )
            : 'No info'}
            </List> */}
          </div>
        </Container>
        <Subtitle>Additional information</Subtitle>
        <LinkList>
          <li>
            <StyledLink to="cast">Cast</StyledLink>
          </li>
          <li>
            <StyledLink to="reviews">Reviews</StyledLink>
          </li>
        </LinkList>
        <Outlet/>
    </main>
  );
};

export default MovieDetails;
