import React from 'react'
import { Stack, Typography } from '@mui/material';
import logo from '../assets/icons/logo_dumbbell.png';
import '../App.css';
const BodyPart = ({ item, setBodyPart, bodyPart }) => {
        const isActive = bodyPart === item;
        
        return (
            <Stack
                type="button"
                alignItems="center"
                justifyContent="center"
                className={`bodyPart-card ${isActive ? 'active' : ''}`}
                sx={bodyPart === item ? { borderTop: '4px solid #FF2625', background: '#fff', borderBottomLeftRadius: '20px', width: '150px', height: '150px', cursor: 'pointer', gap: '20px' } : { background: '#fff', borderBottomLeftRadius: '20px', width: '150px', height: '150px', cursor: 'pointer', gap: '20px' }}
                onClick={() => {
                    console.log('Before click bodyPart:',bodyPart);
                    setBodyPart(item);
                    console.log('After click bodyPart:',item);
                    window.scrollTo({top: 1800, left: 100, behavior: 'smooth'})
                }}
            >
                <img src={logo} alt="gymimage" style={{ width: '100%', height: '100%' }}></img>
                <Typography fontSize="20px" fontWeight="bold" color="black" textTransform="capitalize">{item}</Typography>
            </Stack>
    );
}

export default BodyPart;