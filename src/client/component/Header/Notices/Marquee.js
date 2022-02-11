import React from 'react';
import { Box, Typography } from '@mui/material';

const Marquee = (props) => {
    const { refTitle, isRenew, isHovered, content, marqueeIndex } = props;

    return (
        (isRenew)
            ? null
            : <Box sx={{
                animationDelay: '0s',
                animationDuration: '30s',
                animationFillMode: 'forwards',
                animationTimingFunction: 'linear',
                animationIterationCount: 'infinite',
                animationPlayState: `${isHovered ? 'paused' : 'running'}`,
                WebkitAnimationName: `${((marqueeIndex / 2) === 0) ? 'marquee' : 'marqueeLeft'}`,
                animationName: `${((marqueeIndex / 2) === 0) ? 'marquee' : 'marqueeLeft'}`,

                display: 'flex',
                position: 'relative',
                whiteSpace: 'nowrap'
            }}
            >
                {
                    <Typography
                        ref={refTitle}
                        sx={{ fontSize: '1.25rem' }}
                    >
                        {content}
                    </Typography>
                }
            </Box>
    );
}

export default Marquee;