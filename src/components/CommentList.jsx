import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Loader from '../components/Loader'
import * as api from '../api';
import "./Reviews.css";

function CommentList() {
  const { review_id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [comments, setComments] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCommentsData = async () => {
      try {
        const data = await api.fetchComments(review_id);
        setComments(data);
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
    return <Loader />;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <br />
      <Link to={`/reviews/${review_id}`}>
        <button className="button"> Back to Review! </button>
      </Link>
      <h3>   Comments Section</h3>
      <ul>
      {comments.map((comment) => (
  <li className="comments" key={comment.comment_id}>
    <p>
      <u><strong>Author:</strong> {comment.author}</u>
    </p>
    <p>{comment.body}</p>
    <p className="created-at">Commented: {new Date(comment.created_at).toLocaleDateString()}, {new Date(comment.created_at).toLocaleTimeString()}</p>
    <p className="votes">Likes: {comment.votes} </p>
  </li>
))}
      </ul>
    </div>
  );
}


export default CommentList;
