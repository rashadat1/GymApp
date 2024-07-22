import React from 'react'
import { Box } from '@mui/material';
import BodyPart from './BodyPart';

// we loop through the data will map. We look at each item passed in
// which will be the list of exercise body parts
const HorizontalScroll = ( { data, bodyPart, setBodyPart } ) => {
    return (
        <div>
            {data.map((item) => (
                <Box
                    key={item.id || item}
                    itemId={item.id || item}
                    title={item.id || item}
                    m="0 40px"
                >
                    <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
                </Box>
            )
        )}
        </div>
    )
}


export default HorizontalScroll;