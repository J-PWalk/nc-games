import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loader from './Loader';
import * as api from "../api";
import "./CategoryList.css"; 

const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    api
      .fetchCategories()
      .then((data) => {
        setCategories(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error);
      });
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <p>Error: {error.message}</p>; 
  }

  return (
    <main>
      <h2 className="categories-header">Categories</h2>
      <ul className="category-list">
        {categories.map((category) => (
          <li className="category-item" key={category.slug}>
            <Link to={`/categories/${category.slug}`}>{category.slug}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default CategoryList;