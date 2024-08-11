import React, { useEffect, useState } from 'react'
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography, Grid } from '@mui/material/';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';
// exercisesOptions and fetchData are abstractions of a function to
// send a request to an endpoint and receive data

/*for showing the results of a search. Create a stack component
to display the results of the search in a row.
Inside of the stack we can map over all of the exercises. We do this
using a map to get the individual exercises returned in the search
*/
const Exercises = ({ exercises }) => {
    return (
        <Box id="exercises">
            <Typography variant='h3' mb='50px'>
                Showing Results
            </Typography>
            <Grid container spacing={4} justifyContent="center" gap='10px'>
                {exercises.map((exercise, index) => (
                    <ExerciseCard key={index} exercise={exercise}/>
                ))}
            </Grid>
        </Box>
    )
}

export default Exercises;