import { fetchCast } from 'service/api';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { CastWrapper, CastItem, CastList } from './Cast.styled';

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
    <CastWrapper>
      <CastList>
        {filmCast.map(info => (
          <CastItem key={info.id}>
            <img src={`${baseURL}${info.profile_path}`} alt="" />
            <h4>{info.name}</h4>
            <p>{info.character}</p>
          </CastItem>
        ))}
      </CastList>
    </CastWrapper>
  );
};

export default Cast;
