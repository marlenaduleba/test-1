
import { TrendingList } from "components/TrendingList";
import { Title } from "./Home.styled";
import { fetchTrending } from "service/api";
import { useState } from "react";
import { useEffect } from "react";

const Home = () => {
const [movies, setMovies] = useState([]);

useEffect(() => {
    try {
        fetchTrending().then(({data}) => {
            setMovies(data.results);
            console.log(data);
        } )
    } catch (error) {
        console.log(error);
    }
}, []);

    return (
        <main>
<Title>Trending today</Title>
<TrendingList movies={movies} />
        </main>
    )

};

export default Home;

