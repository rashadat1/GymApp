import React from 'react';
import '../App.css';

const HomePage = () => {
    return (
        <div>
            <header className="hero-banner">
                <h1>Your Ultimate Bodybuilding Companion</h1>
                <p>Discover exercises, join our community, get tips and log your workouts. Achieve results faster with our comprehensive support.</p>
            </header>
            <section className="featured-exercises container">
                <h2>Featured Exercises</h2>
                <div className="exercise-list"></div>
                    <div className="exercise-card"></div>
                    <div className="exercise-card"></div>
                    <div className="exercise-card"></div>
            </section>
            <section className="popular-blog-posts container">
                <h2>Popular Blog Posts</h2>
                <div className="post-list"></div>
                    <div className="post-card"></div>
                    <div className="post-card"></div>
                    <div className="post-card"></div>
            </section>
        </div>
    )
}

export default HomePage;