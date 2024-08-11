import React, { useContext } from 'react'
import BodyPart from './BodyPart';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { Box, Typography } from '@mui/material';
import RightArrowIcon from '../assets/icons/arrow-right-3098.png';
import LeftArrowIcon from '../assets/icons/arrow-left-3099.png';
import 'react-horizontal-scrolling-menu/dist/styles.css';

const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);

    const handleScrollPrev = (e) => {
        e.stopPropagation();
        e.preventDefault();
        scrollPrev();
    };

    return (
        <Typography onClick={handleScrollPrev} className="right-arrow">
            <img src={LeftArrowIcon} alt="left-arrow" />
        </Typography>
    );
};

const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);

    const handleScrollNext = (e) => {
        e.stopPropagation();
        e.preventDefault();
        scrollNext();
    };

    return (
        <Typography onClick={handleScrollNext} className="left-arrow">
            <img src={RightArrowIcon} alt="right-arrow" />
        </Typography>
    );
};

const HorizontalScroll = ({ data = [], bodyPart, setBodyPart, bodyParts }) => {
    console.log('Data is value:',data);
    if (!Array.isArray(data) || data.length === 0) {
        return <p>Loading...</p>; // Customize this as needed
    }
    return (
        <div className="horizontal-scroll-container">
            <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
                {data.map((item) => (
                    <Box
                        key={item.id || item}
                        itemId={item.id || item}
                        title={item.id || item}
                        m="0 40px"
                    >
                        <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
                    </Box>
                ))}
            </ScrollMenu>
        </div>
    );
};

export default HorizontalScroll;
