import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import logo from './logo.svg';
import './App.css';
import Layout from './Layout';
import LandingPage from './pages/LandingPage'
import ExerciseDetails from './pages/ExerciseDetails';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/Home" element={<HomePage/>}/>
        <Route path="/exercise/:id" element={<ExerciseDetails/>} />
      </Routes>
    </Layout>
  )
}
export default App;
