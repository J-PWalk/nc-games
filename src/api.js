import axios from "axios";

const ncGamesAPI = axios.create({
    baseURL: 'https://nc-jpportfolio.onrender.com/api'
});

export const fetchReviews = () => {
  return ncGamesAPI
    .get(`/reviews`)
    .then((response) => {
      return response.data.reviews;
    })
};

export const fetchReview = (review_id) => {
    return ncGamesAPI
      .get(`/reviews/${review_id}`)
      .then((response) => {
        return response.data.review;
      })
  };

  export const fetchComments = (review_id) => {
    return ncGamesAPI
      .get(`/reviews/${review_id}/comments`)
      .then((response) => {
        return response.data
      })
  };