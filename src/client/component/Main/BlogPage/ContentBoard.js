import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Box, Typography, Divider } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import parseDOMHandler from '../../../../../lib/handler/parseDOMHandler';
import { establish } from '../../../../../assets/js/config/blog';
import styleLayout from '../../../../../assets/js/config/styleLayout';

const ContentBoard = (props) => {
    const { title, time, content } = props;
    const theme = useTheme();
    const [contentDOM, setContentDOM] = useState([]);
    const lang = useSelector(state => state.lang);

    useEffect(() => {
        setContentDOM(parseDOMHandler(content));
    }, []);

    const blogTitle = (
        <Typography
            variant='h6'
            sx={{
                color: theme.main.homepage.board.fontColor || 'primary.contrastText',
            }}
        >
            {title}
        </Typography>
    );

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
            {blogTitle}
            <Typography
                sx={{ color: theme.main.blog.board.fontColor || 'primary.contrastText' }}
            >
                {establish[lang]} {time}
            </Typography>
            <Divider variant='middle' sx={{
                pt: 1,
                borderColor: theme.main.blog.board.dividerColor || 'primary.contrastText',
            }} />
            <Box sx={{ pt: 1 }}>
                {
                    contentDOM.map((element, index) => (
                        <Typography
                            key={index}
                            sx={{ color: theme.main.blog.board.fontColor || 'primary.contrastText' }}
                        >
                            {element}
                        </Typography>
                    ))
                }
            </Box>
        </Box>
    );
};

export default ContentBoard;