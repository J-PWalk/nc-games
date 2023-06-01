import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loader from './Loader';
import * as api from "../api";
import "./CategoryList.css";

// Category icons
import strategy from "../images/strategy-icon.jpeg";
import hiddenRoles from "../images/hidden-roles.jpeg";
import deckBuilding from "../images/deck-building.jpeg";
import dexterity from "../images/dexterity.jpeg";
import pushLuck from "../images/push-luck.jpeg";
import rollWrite from "../images/roll-write.jpeg";
import engineBuilding from "../images/engine-building.jpeg";


const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  //gets category data for maping with loading and error state 
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
//cleans up databse titles to look more natural using regex and toUpper slice
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

// Helper function to get the category icon based on index - issues if out of order
const getCategoryIcon = (index) => {
  const icons = [strategy, hiddenRoles, dexterity, pushLuck, rollWrite, deckBuilding, engineBuilding];
  return icons[index % icons.length];
};

export default CategoryList;
