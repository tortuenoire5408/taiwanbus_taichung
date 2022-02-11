import React from 'react';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import styleLayout from '../../../../../assets/js/config/styleLayout';

const Emptyboard = (props) => {
    const { message } = props;
    const theme = useTheme();

    return (
        <Box sx={{
            mb: 1,
            p: 2,
            borderRadius: 1.5,
            overflow: { xs: 'auto' },
            width: {
                xs: styleLayout.blogBoardWidth.xs,
                lg: styleLayout.blogBoardWidth.lg
            },
            height: {
                xs: '100%',
            },
            [theme.breakpoints.down('sm')]: {
                minHeight: styleLayout.blogBoardHeight
            },
            background: theme.main.blog.board.background || theme.main.surface,
        }}>
            <Typography
                variant='h6'
                sx={{
                    color: theme.main.homepage.board.fontColor || 'primary.contrastText',
                }}
            >
                {message}
            </Typography>
        </Box>
    );
};

export default Emptyboard;