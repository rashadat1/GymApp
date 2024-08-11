// src/pages/HomePage.js
import React, { useState, useEffect } from 'react';
import '../App.css';
import logo from '../assets/icons/bodybuilding-collective-favicon-black.png';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import SearchExercises from '../components/SearchExercises';
import Exercises from '../components/Exercises';

const HomePage = () => {
    const [exercises, setExercises] = useState([]);
    const [bodyPart, setBodyParts] = useState([]);

    return (
        <div className="wrapper">
            <nav className="navbar">
                <div className="logo">
                    <img src={logo} alt="Bodybuilding Collective" className="logo-img"/>
                </div>
                <div className="nav-links">
                    <a href="#home">Home</a>
                    <a href="#featured-exercises">Exercises</a>
                    <a href="/forum">Forum</a>
                    <a href="/contact">Contact</a>
                </div>
            </nav>
            <div className="hero-wrapper">
                <section id="home" className="hero-section">
                    <div className="hero-text">
                        <h1>Your Ultimate Bodybuilding Companion</h1>
                        <p>Discover exercises, join our community, get tips, and log your workouts. Achieve results faster with our comprehensive support.</p>
                        <a href="#featured-exercises" className="btn-secondary">Get Started</a>
                    </div>
                </section>
                <div className="hero-image">
                    <img src="https://yt3.googleusercontent.com/ytc/AIdro_kibgbKkmhLzR8Y55jIqRd3hjAJNs1BXJMlsPbe3w41ZTE=s900-c-k-c0x00ffffff-no-rj" alt="Bodybuilding" />
                </div>
            </div>
            <section id="featured-exercises" className="featured-exercises container">
                <h2>Featured Exercises</h2>
            </section>
            <section id="exercise-search" className="exercise-search container">
                <h2>Find Your Favorite Exercises</h2>
                <SearchExercises exercises={exercises} setExercises={setExercises} bodyPart={bodyPart}
                setBodyPart={setBodyParts} />
            </section>
            <section id="exercise-search-results" className="exercises-search-results-container">
                <Exercises exercises={exercises} setExercises={setExercises} bodyPart={bodyPart}/>
            </section>
            <section className="popular-blog-posts container">
                <h2>Popular Blog Posts</h2>
                <div className="post-list">
                    <div className="post-card">Post 1</div>
                    <div className="post-card">Post 2</div>
                    <div className="post-card">Post 3</div>
                </div>
            </section>
        </div>
    )
}

export default HomePage;