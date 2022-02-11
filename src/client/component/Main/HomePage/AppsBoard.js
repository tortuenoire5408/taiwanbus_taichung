import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Typography } from '@mui/material';

import Apps from './Apps';
import { titleData_qrcode, qrcodesData } from '../../../../../assets/js/config/home-page';

const AppsBoard = () => {
    const lang = useSelector(state => state.lang);
    return (
        <Box sx={{ my: 1, px: 1 }}>
            <Box sx={{ ml: 1, display: 'flex', }}>
                <Box
                    sx={(theme) => ({
                        width: `${(theme.main.homepage.board.bullet.match(/[rgba#]/))
                            ? '6px' : 36}`,
                        mr: 1,
                        background: theme.main.homepage.board.bullet || theme.palette.text.primary,
                        backgroundSize: '100%'
                    })}
                >
                </Box>
                <Typography
                    sx={(theme) => ({
                        color: theme.main.homepage.board.titleColor || 'text.primary',
                        fontSize: '1.5rem',
                    })}
                >
                    {titleData_qrcode[lang]}
                </Typography>
            </Box>
            <Box sx={{ p: 0.75 }}>
                <Apps apps={qrcodesData} />
            </Box>
        </Box >
    );
}

export default AppsBoard;