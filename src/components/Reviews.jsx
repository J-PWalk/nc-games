import { useEffect, useState } from "react";
import { fetchReviews } from "../api"; 

function Reviews() {
  const [isLoading, setIsLoading] = useState(true);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetchReviews() 
      .then((data) => {
        setReviews(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <p>Page Loading...</p>;
  }
  return (
    <main>
      <h3 className="App-header">
        <ul id="review-list">
          {reviews.map((reviews) => {
            return (
              <li className="each-review" key={reviews.review_id}>
                <br />
                Author: {reviews.owner}
                <br />
                Title: {reviews.title}
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
                <br />
                Created: {reviews.created_at}
                <br />
                <br />
                Votes: {reviews.votes}
                <br />
                <br />
                Comments: {reviews.comment_count}
                <br />
              </li>
            );
          })}
        </ul>
      </h3>
    </main>
  );
}

export default Reviews;