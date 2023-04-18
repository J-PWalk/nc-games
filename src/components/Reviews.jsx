import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import * as api from "../api";
import "./Reviews.css";

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    api
      .fetchReviews()
      .then((data) => {
        setReviews(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error);
      });
  }, []);

  if (isLoading) {
    return <p>Page Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>; 
  }
  
  return (
    <main>
      <h3 className="App-header">
        <ul id="review-list">
          {reviews.map((reviews) => {
            return (
              <li className="each-review" key={reviews.review_id}>
                Title: {reviews.title}
                <br />
                Author: {reviews.owner}
                <br />
                Designer: {reviews.designer}
                <br />
                <img
                  className="review-image"
                  src={reviews.review_img_url}
                  alt={reviews.title}
                />
                <br />
                Category: {reviews.category}
                <br />
                Created: {reviews.created_at}
                <br />
                Votes: {reviews.votes}
                <br />
                Comments: {reviews.comment_count}
                <br />
                <Link to={`/reviews/${reviews.review_id}`}>
                  <button className="button"> See This Review! </button>
                </Link>
              </li>
            );
          })}
        </ul>
      </h3>
    </main>
  );
}

export default Reviews;
