import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import * as api from "../api";
import "./Reviews.css";
import Loader from "../components/Loader";

function ReviewCard() {
  const { review_id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [review, setReview] = useState();
  const [comments, setComments] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviewData = async () => {
      try {
        const data = await api.fetchReview(review_id);
        console.log("Review data:", data);
        setReview(data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setError(error);
        console.error(`Error fetching review ${review_id}:`, error);
      }
    };

    const fetchCommentsData = async () => {
      try {
        const data = await api.fetchComments(review_id, 2);
        setComments(data);
      } catch (error) {
        console.error(
          `Error fetching comments for review ${review_id}:`,
          error
        );
      }
    };

    fetchReviewData();
    fetchCommentsData();
  }, [review_id]);

  const handleLikeClick = async () => {
    try {
      const updatedReview = await api.patchReviewLikes(review.review_id);
      setReview(updatedReview);
    } catch (error) {
      console.error(`Error updating review likes:`, error);
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <main className="review-card">
      <div className="review-details">
        <div className="review-info">
          <strong>Author: {review.owner}</strong>
          <br />
          Title: {review.title}
          <br />
          Designer: {review.designer}
          <br />
          Category: {review.category}
        </div>
        <img
          className="review-image"
          src={review.review_img_url}
          alt={review.title}
        />
      </div>
      <div className="review-body">
        <h2>{review.title}</h2>
        <p>{review.review_body}</p>
        <p className="created-at">
          Posted:{" "}
          {new Date(review.created_at).toLocaleDateString()},{" "}
          {new Date(review.created_at).toLocaleTimeString()}
        </p>
       
        <p className="votes">Likes: {review.votes}    <button onClick={handleLikeClick}>👍</button></p>
        <u><h3>Comments:</h3></u>
        {comments.length === 0 ? (
          <p>Be the first to comment!</p>
        ) : (
          <ul className="review-card__comments">
            {comments.slice(0, 2).map((comment) => (
              <li key={comment.comment_id}>
                <p>
                  <u>
                    <strong>Author:</strong> {comment.author}
                  </u>
                </p>
                <p>{comment.body}</p>
                <p className="created-at">
                  Comment made:{" "}
                  {new Date(comment.created_at).toLocaleDateString()},{" "}
                  {new Date(comment.created_at).toLocaleTimeString()}
                </p>
                <p>
                  <span className="votes"> Likes: {comment.votes}</span>
                </p>
              </li>
            ))}
          </ul>
        )}
        <Link to={`/reviews/${review.review_id}/comments`}>
          <button className="button"> All Comments </button>
        </Link>
      </div>
    </main>
  );
}

export default ReviewCard;
