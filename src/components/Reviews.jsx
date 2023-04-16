import { fetchReviews } from 'service/api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const baseURL = 'https://image.tmdb.org/t/p/w300';
  const { id } = useParams();
  // console.log(fetchReviews(id));

  const [filmReviews, setFilmReviews] = useState([]);

  useEffect(() => {
    try {
      fetchReviews(id).then(({ data }) => {
        setFilmReviews(data.results);
      });
    } catch (error) {
      console.log(error);
    }
  }, [id]);

  return (
    <div>
      <ul>
        {filmReviews.map(info => (
          <li key={info.id}>
            <img
              src={`${baseURL}${info.author_details.avatar_path}`}
              alt={info.author}
            />
            <p>{info.author}</p>
            <p>{info.created_at}</p>
            <p>{info.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
