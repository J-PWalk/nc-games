import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import * as api from "../api";
import "./Reviews.css";


function ReviewCard() {
  const { review_id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [review, setReview] = useState();
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviewData = async () => {
      try {
        const data = await api.fetchReview(review_id);
        setReview(data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setError(error);
        console.error(`Error fetching review ${review_id}:`, error);
      }
    };

    fetchReviewData();
  }, [review_id]);

  if (isLoading) {
    return <p>Page Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>; 
  }
  

  return (
    <main>
      <h3>
        <ul id="review">
          <li className="review" key={review.review_id}>
            <br />
            Author: {review.owner}
            <br />
            Title: {review.title}
            <br />
            Designer: {review.designer}
            <br />
            <img
              className="review-image"
              src={review.review_img_url}
              alt={review.title}
            />
            <br />
            Category: {review.category}
            <br />
            Created: {review.created_at}
            <br />
            Votes: {review.votes}
            <br />
            <Link to={`/reviews/${review.review_id}/comments`}>
                  <button className="button"> Comments </button>
                </Link>
          </li>
        </ul>
      </h3>
    </main>
  );
}

export default ReviewCard;
