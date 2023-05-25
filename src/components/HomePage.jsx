import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as api from '../api';
import Loader from './Loader';
import './Reviews.css'; 

function Homepage() {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    api.fetchReviews()
      .then((data) => {
        const sortedReviews = data.sort((a, b) => b.votes - a.votes);
        const topFourReviews = sortedReviews.slice(0, 4);
        setReviews(topFourReviews);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error);
      });
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <main>
      <h1>Welcome to my board game review site!</h1>
      <div className="review-grid">
        {reviews.map((review) => (
          <div className="review-card" key={review.review_id}>
            <h2>{review.title}</h2>
            <div className="review-details">
              <div>
                <p>Author: {review.owner}</p>
                <p>Game Designer: {review.designer}</p>
                <p>Category: {review.category}</p>
              </div>
              <img
                className="review-image"
                src={review.review_img_url}
                alt={review.title}
              />
            </div>
            <div className="review-body">
              <p>Created: {review.created_at}</p>
              <p className="votes">Likes: {review.votes}</p>
              <p>Comments: {review.comment_count}</p>
              <Link to={`/reviews/${review.review_id}`}>
                <button className="button">See This Review!</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Homepage;