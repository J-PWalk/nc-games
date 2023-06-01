import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Reviews from './components/Reviews';
import ReviewCard from './components/ReviewCard';
import CommentList from './components/CommentList';
import CategoryList from './components/CategoryList';
import HomePage from './components/HomePage';
import Games from './components/Games';
import NoughtsAndCrosses from './components/NoughtsAndCrosses'
import Hangman from './components/Hangman'
import Crossword from './components/Crossword'
import Sudoku from './components/Sudoku'
import About from './components/About';
import Footer from './components/Footer'
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/reviews/:review_id" element={<ReviewCard />} />
          <Route path="/reviews/:review_id/comments" element={<CommentList />} />
          <Route path="/categories" element={<CategoryList />} />
          <Route path="/games" element={<Games />} />
          <Route path="/noughts-and-crosses" element={<NoughtsAndCrosses />} />
          <Route path="/hangman" element={<Hangman />} />
          <Route path="/crossword" element={<Crossword />} />
          <Route path="/sudoku" element={<Sudoku />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer /> {Footer}
      </div>
    </Router>
  );
}

export default App;
