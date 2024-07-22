import React from 'react'
import { Stack, Typography } from '@mui/material';
import logo from '../assets/icons/logo_dumbbell.png';

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
    return (
        <Stack
            type="button"
            alignItems="center"
            justifyContent="center"
            className="bodyPart-card"
            sx={
                bodyPart === item ? {
                    borderTop: '5px solid #ff2625',
                    backgroundColor: '#fff',
                    borderBottomLeftRadius: '20px',
                    width: '270px',
                    height: '270px',
                    cursor: 'pointer',
                    gap: '47px'
                } : {
                    background: '#fff',
                    borderBottomLeftRadius: '20px',
                    width: '270px',
                    height: '270px',
                    cursor: 'pointer',
                    gap: '47px'
                }

            }
        >
            <img src={logo} alt="gymimage" styles={{}}></img>
        </Stack>
    )
}

export default BodyPart;