import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loader from './Loader';
import * as api from "../api";
import "./CategoryList.css";

// Sample category icons (replace with your own icons)
import strategy from "../images/strategy-icon.jpeg";
import hiddenRoles from "../images/hidden-roles.jpeg";


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

  const capitalizeFirstLetter = (word) => {
    const capitalizedWord = word.replace(/-/g, ' ');
    return capitalizedWord.charAt(0).toUpperCase() + capitalizedWord.slice(1);
  };

  return (
    <main>
      <h2 className="categories-header">Categories</h2>
      <ul className="category-list">
        {categories.map((category, index) => (
          <li className="category-item" key={category.slug}>
            <Link to={`/categories/${category.slug}`}>
            <p>{capitalizeFirstLetter(category.slug)}</p>
              <img src={getCategoryIcon(index)} alt="Category Icon" className="category-icon" />
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

// Helper function to get the category icon based on index
const getCategoryIcon = (index) => {
  // Sample icons array (replace with your own icons)
  const icons = [strategy, hiddenRoles];
  return icons[index % icons.length];
};

export default CategoryList;
