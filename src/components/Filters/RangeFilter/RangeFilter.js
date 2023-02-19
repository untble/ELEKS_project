import React from 'react';
import Slider from '@mui/material/Slider';
import {Box} from "@mui/material";

const RangeFilter = ({title, handleRangePrice, selectedPrice}) => {
    return (
        <Box className="filter__item">
            <h5 className="filter__item-title">{title}</h5>
            <Slider
                sx={{width: '90%'}}
                value={selectedPrice}
                onChange={handleRangePrice}
                valueLabelDisplay="auto"
                min={0}
                max={100000}
                disableSwap
                marks={[{
                    value: 0,
                    label: '0$'
                }, {
                    value: 100000,
                    label: '100000$'
                }]}
            />
        </Box>
    );
};

export default RangeFilter;