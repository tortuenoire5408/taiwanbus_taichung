import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import Blogs from './Blogs';
import { getBlogs } from '../../../actions';
import { titleData_blog } from '../../../../../assets/js/config/home-page';

const BlogsBoard = () => {
    const theme = useTheme();
    const dispatch = useDispatch();
    const $$blogs = useSelector(state => state.blogs);

    useEffect(() => {
        dispatch(getBlogs());
    }, []);

    return (
        <Box sx={{
            my: 1,
            px: 1,
            [theme.breakpoints.up('xs')]: {
                width: '100%'
            },
            [theme.breakpoints.up('lg')]: {
                width: '70%'
            },
        }}>
            <Box sx={{ ml: 1, display: 'flex', }}>
                <Box
                    sx={{
                        width: `${(theme.main.homepage.board.bullet.match(/[rgba#]/))
                            ? '6px' : '36px'}`,
                        mr: 1,
                        background: theme.main.homepage.board.bullet || theme.palette.text.primary,
                        backgroundSize: '100%'
                    }}
                >
                </Box>
                <Typography
                    sx={{
                        color: theme.main.homepage.board.titleColor || 'text.primary',
                        fontSize: '1.5rem',
                    }}
                >
                    {titleData_blog['zh_TW']}
                </Typography>
                <Typography
                    sx={{
                        color: theme.main.homepage.board.titleColor || 'text.primary',
                        display: 'inline',
                        fontSize: '1.25rem',
                        lineHeight: 1.8,
                        ml: 0.75,
                    }}
                >
                    {titleData_blog['en_US']}
                </Typography>
            </Box>
            <Box sx={{ p: 0.75 }}>
                <Blogs $$blogs={$$blogs} />
            </Box>
        </Box >
    );
}

export default BlogsBoard;