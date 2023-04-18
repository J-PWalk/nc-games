import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as api from '../api';

function CommentList() {
  const { review_id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [comments, setComments] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCommentsData = async () => {
      try {
        const data = await api.fetchComments(review_id);
        setComments(data.comments);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setError(error);
        console.error(`Error fetching comments for review ${review_id}:`, error);
      }
    };

    fetchCommentsData();
  }, [review_id]);

  if (isLoading) {
    return <p>Comments Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <h3>Welcome to the Comments</h3>
      <ul className="review">
        {comments?.map((comment) => (
          <li key={comment.comment_id}>
            <p>
              <strong>Author: {comment.author}</strong>
            </p>
            <p>Body: {comment.body}</p>
            <p>Created at: {comment.created_at}</p>
            <p>Votes: {comment.votes}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CommentList;
