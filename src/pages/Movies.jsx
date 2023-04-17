import { MovieList } from "components/MovieList";
import { SearchBar } from "components/SearchBar";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchByName } from "service/api";



const Movies = () => {
const [films, setFilms] = useState([]);
const [searchParams, setSearchParams] = useSearchParams();
const query = searchParams.get("query");


console.log(fetchByName(query));

useEffect(() => {
    if (query === "") {
        return;
    }

    try {
        fetchByName(query).then(({data}) => {
            setFilms(data.results);
        })
    } catch (error) {
        console.log(error);
    }
}, [query])

const handleSubmit = query => {
    const nextParams = query !== "" ? {query} : {};
    setSearchParams(nextParams);

}

    return (
        <main>
<SearchBar value={query} onChange={handleSubmit}/>
<MovieList movies={films}/>
        </main>
    )

};

export default Movies;