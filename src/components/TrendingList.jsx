import { List, PosterTitle, StyledLink } from "./TrendingList.styled";




export const TrendingList = ({movies}) => {
    const baseURL = 'https://image.tmdb.org/t/p/w300';
    return (
        <List>
            {movies.map((movie) => (
               
                    <li key={movie.id}>
                        <StyledLink to={`/movies/${movie.id}`}>
                            <img src={`${baseURL}${movie.poster_path}`} alt="" />
                            <PosterTitle>{movie.title}</PosterTitle>
                        </StyledLink>
                    </li>
                
            ))}
        </List>
    )
}