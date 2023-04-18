import React from 'react';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Reviews from './components/Reviews';
import ReviewCard from './components/ReviewCard'
import CommentList from './components/CommentList'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Navbar />
        <Routes>
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/reviews/:review_id" element={<ReviewCard />} />
          <Route path="/reviews/:review_id/comments" element={<CommentList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
