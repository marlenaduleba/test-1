import { useLocation } from "react-router-dom";
import { List, PosterTitle, StyledLink } from "./MovieList.styled";




export const MovieList = ({movies}) => {
    const baseURL = 'https://image.tmdb.org/t/p/w300';
    const location = useLocation();
    return (
        <List>
            {movies.map((movie) => (
               
                    <li key={movie.id}>
                        <StyledLink to={`/movies/${movie.id}`} state={{from: location}}>
                            <img src={`${baseURL}${movie.poster_path}`} alt="" />
                            <PosterTitle>{movie.title}</PosterTitle>
                        </StyledLink>
                    </li>
                
            ))}
        </List>
    )
}