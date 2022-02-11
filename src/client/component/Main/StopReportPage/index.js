import React from 'react';
import { Box, Typography } from '@mui/material';

import styleLayout from '../../../../../assets/js/config/styleLayout';

const StopReportPage = () => {
    return (
        <Box
            sx={(theme) => ({
                height: {
                    sm: styleLayout.mainHeight
                },
                [theme.breakpoints.down('sm')]: {
                    minHeight: styleLayout.mainHeight
                },
                display: 'flex',
                flexDirection: 'column',

                justifyContent: 'start',
                alignItems: 'center',
            })}>
            <Typography>StopReportPage</Typography>
        </Box>
    )
}

export default StopReportPage;