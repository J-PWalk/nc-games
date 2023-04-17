import axios from "axios";

export const fetchReviews = () => {
  return axios
    .get(`https://nc-jpportfolio.onrender.com/api/reviews`)
    .then((response) => {
      return response.data.reviews;
    })
    .catch((error) => {
      console.error("Error fetching reviews:", error);
      throw error;
    });
};