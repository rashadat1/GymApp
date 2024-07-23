import React, { useEffect, useState } from 'react';
import '../App.css';
import {Stack, Box} from '@mui/material';
import HorizontalScroll from './HorizontalScroll';

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {

    const [search, setSearch] = useState('');

    // create list of categories of exercises with a useEffect
    // fetch the categories as soon as the page loads

    useEffect(() => {
        const fetchExercisesData = async () => {
            const response = await fetch('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
            const bodyPart = await response.json();
            setBodyPart(['all', ...bodyPart]);
        }

        fetchExercisesData();
    }, [])

    const exerciseOptions = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY,
            'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
        }
    };
    // onClick we trigger handleSearch
    const handleSearch = async() => {
        if (search) {
            const response = await fetch('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
            const exercisesData = await response.json();

            const filteredExercises = exercisesData.filter(
                (exercise) => exercise.name.toLowerCase().includes(search) ||
                    exercise.bodyPart.toLowerCase().includes(search) ||
                    exercise.target.toLowerCase().includes(search) ||
                    exercise.equipment.toLowerCase().includes(search)
            );

            setSearch('');
            setExercises(filteredExercises);
            console.log(filteredExercises);

        }
    };

    return (
        <Stack alignItems="center" justifyContent="center" p="20px">
            <Box sx={{ position: 'relative', width: '75%', p: '10px', mb: '20px' }}>
                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="Search Exercises"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <button onClick={handleSearch}>Search</button>
                </div>
            </Box>
            <Box sx={{ position: 'relative', width: '100%' }}>
                <HorizontalScroll data={bodyPart} bodyPart={bodyPart} setBodyPart={setBodyPart}/> 
            </Box>
        </Stack>

    )

}

export default SearchExercises;