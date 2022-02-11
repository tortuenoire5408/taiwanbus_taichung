import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box } from '@mui/material';

import Path from './Path';
import ListBoard from './ListBoard';
import { getBlogs } from '../../../actions/FetchActions';
import styleLayout from '../../../../../assets/js/config/styleLayout';

const Blog = () => {
    const dispatch = useDispatch();
    const $$blogs = useSelector(state => state.blogs);

    useEffect(() => {
        dispatch(getBlogs());
    }, []);

    return (
        <Box
            sx={{
                maxHeight: {
                    sm: styleLayout.mainHeight
                },
                display: 'flex',
                flexDirection: 'column',

                justifyContent: 'start',
                alignItems: 'center',
            }}>
            <Path />
            <ListBoard $$blogs={$$blogs} />
        </Box>
    );
}

export default Blog;