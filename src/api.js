import axios from "axios";

const ncGamesAPI = axios.create({
    baseURL: 'https://nc-jpportfolio.onrender.com/api'
});

export const fetchReviews = (category, sortOrder) => {
  const params = {};

  if (category) {
    params.category = category;
  }

  if (sortOrder) {
    params.sort_by = "created_at";
    params.order = sortOrder;
  }

  return ncGamesAPI
    .get(`/reviews`, { params })
    .then((response) => {
      return response.data.reviews;
    });
};

export const fetchReview = (review_id) => {
    return ncGamesAPI
      .get(`/reviews/${review_id}`)
      .then((response) => {
        return response.data.review;
      })
  };

  export const fetchComments = (review_id, limit = 2) => {
    return ncGamesAPI
      .get(`/reviews/${review_id}/comments?limit=${limit}`)
      .then((response) => {
        return response.data.comments;
      });
  };

  export const patchReviewLikes = async (reviewId) => {
    const response = await ncGamesAPI.patch(`/reviews/${reviewId}`, { inc_votes: 1 });
    return response.data.review;
  };
  
  

  export const fetchCategories = () => {
    return ncGamesAPI.get("/categories").then((response) => {
      return response.data.categories;
    });
  };

  export const fetchReviewsByCategory = (category) => {
    return ncGamesAPI.get(`/reviews?category=${category}`).then((response) => {
      return response.data.reviews;
    });
  };