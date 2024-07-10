import React, { useState } from 'react';
//import { Route, Routes } from 'react-router-dom';
import '../App.css';
import { Link } from 'react-router-dom';
import { ReactTyped as Typed } from 'react-typed';

const LandingPage = () => {
    const [showButton, setShowButton] = useState(false);

    const handleTypingComplete = () => {
        setShowButton(true);
    };

    return (
        
        <div className="landingpage-container">
            <div className="text-content">
                <div className="typing-effect">
                    <Typed
                        strings={[
                            'Welcome to the Bodybuilding Collective',
                            'Plan and track your workouts',
                            'Find new exercises and get tips',
                            'Achieve your goals'
                        ]}
                        typeSpeed={10}
                        backSpeed={10}
                        loop={false}
                        onComplete={handleTypingComplete}
                    />
                </div>
            </div>
            <div className="button-container">
                <Link to="/Home" className="btn-primary">Enter</Link>
            </div>
        </div>

    );
};

export default LandingPage;