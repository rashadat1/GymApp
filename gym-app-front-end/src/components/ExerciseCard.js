import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';

// get the individual exercise passed into this in the exercises component
// gifUrl is a component of the exercise object
const ExerciseCard = ( {exercise} ) => {
    return (
        <Link className="exercise-card" to={`/exercise/${exercise.id}`} style={{ textDecoration: 'none', width: '50%'}}>
            <img src={exercise.gifUrl} alt={exercise.name} loading="lazy"/>
            <Stack direction='row'>
                <Button sx={{ ml: '21px', color: '#fff', background: '#274bb0', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize'}}>
                    {exercise.bodyPart}
                </Button>
                <Button sx={{ ml: '21px', color: '#fff', background: '#274bb0', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize'}}>
                    {exercise.target}
                </Button>
            </Stack>
            <Typography>
                {exercise.name}
            </Typography>
        </Link>
    )
}

export default ExerciseCard;