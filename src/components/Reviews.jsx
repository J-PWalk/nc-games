import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import * as api from "../api";
import "./Reviews.css";

function Reviews({ comments }) {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortCategory, setSortCategory] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    api
      .fetchReviews(sortCategory, sortOrder, startIndex, endIndex)
      .then((data) => {
        setReviews(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error);
      });
  }, [sortCategory, sortOrder, currentPage]); //dependancies to trigger fetchreviews with/without queries

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [sortCategory, sortOrder]);

  const totalPages = Math.ceil(reviews.length / itemsPerPage); /// simple maths to establish total pages, adjusts when page is rerendered

  const handleSortChange = (event) => {
    if (event.target.name === "category") {
      setSortCategory(event.target.value);
    } else if (event.target.name === "order") {
      setSortOrder(event.target.value);
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  // Calculates the reviews for the current page
  const startIndex = (currentPage - 1) * itemsPerPage; 
  const endIndex = startIndex + itemsPerPage;// Calculates the ending index of the reviews for the current page
  const currentPageReviews = reviews.slice(startIndex, endIndex); // Extracts the reviews for the current page from the reviews array

  return (
    <main>
      <h3 className="App-header">
        <div className="sorting-options">
          <label htmlFor="category">Sort by Category: </label>
          <select name="category" id="category" onChange={handleSortChange}>
            <option value="">All</option>
            <option value="engine-building">Engine Building</option>
            <option value="push-your-luck">Push Your Luck</option>
            <option value="roll-and-write">Roll and Write</option>
            <option value="hidden-roles">Hidden Roles</option>
            <option value="dexterity">Dexterity</option>
            <option value="strategy">Strategy</option>
            <option value="deck-building">Deck Building</option>
            <option value="push-your-luck">Push Your Luck</option>
          </select>
          <div></div>
          <label htmlFor="order"> Sort Order:</label>
          <select name="order" id="order" onChange={handleSortChange}>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
        <div className="pagination">
          {currentPage > 1 && (
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              className="pagination-button"
            >
              Prev
            </button>
          )}
          {Array.from({ length: totalPages }, (_, index) => index + 1)
            .slice(currentPage - 1, currentPage + 4)
            .map((pageNumber) => (
              <button
                key={pageNumber}
                onClick={() => handlePageChange(pageNumber)}
                className={
                  currentPage === pageNumber ? "active pagination-button" : "pagination-button"
                }
              >
                {pageNumber}
              </button>
            ))}
          {currentPage < totalPages && (
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              className="pagination-button"
            >
              Next
            </button>
          )}
        </div>
        <ul id="review-list">
          {currentPageReviews.map((review) => (
            <li className="each-review" key={review.review_id}>
              <h2 className = "review-title">{review.title}</h2>
              <h3>By: {review.owner}</h3>
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
              Posted: {new Date(review.created_at).toLocaleString()}
              <br />
              <p className="votes">Likes: {review.votes}</p>
              Comments: {review.comment_count}
              <br />
              <Link to={`/reviews/${review.review_id}`}>
                <button className="button"> See This Review! </button>
              </Link>
            </li>
          ))}
        </ul>
      </h3>
    </main>
  );
}

export default Reviews;
