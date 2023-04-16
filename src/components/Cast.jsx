import { fetchCast } from 'service/api';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Cast = () => {
  const baseURL = 'https://image.tmdb.org/t/p/w300';
  const { id } = useParams();
  const [filmCast, setFilmCast] = useState([]);
  // console.log(fetchCast(id));
  useEffect(() => {
    try {
      fetchCast(id).then(({ data }) => {
        setFilmCast(data.cast);
      });
    } catch (error) {
      console.log(error);
    }
  }, [id]);

  return (
    <div>
      <ul>
        {filmCast.map(info => (
          <li key={info.id}>
            <img src={`${baseURL}${info.profile_path}`} alt="" />
            <p>{info.name}</p>
            <p>{info.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
