import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Box } from '@mui/material';

import Path from './Path';
import Emptyboard from './Emptyboard';
import ContentBoard from './ContentBoard';
import { getBlogs } from '../../../actions/FetchActions';
import { blogsLoading, withoutContent } from '../../../../../assets/js/config/blog';
import styleLayout from '../../../../../assets/js/config/styleLayout';

const BlogContentPage = () => {
    const { blogId } = useParams();
    const dispatch = useDispatch();
    const lang = useSelector(state => state.lang);
    const $$lists = useSelector(state => state.blogs);
    const $$status = $$lists.get('status');
    const $$targetBlog = $$lists.get('blogs').find((item) => (item.id === blogId));

    useEffect(() => {
        dispatch(getBlogs());
    }, []);

    const subDirectory = ($$status === 'PENDING' || !$$targetBlog)
        ? blogId
        : $$targetBlog.get('title');

    const message = ($$status === 'PENDING')
        ? blogsLoading[lang]
        : !$$targetBlog
            ? withoutContent[lang]
            : null;

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
            <Path subDirectory={subDirectory} />
            {
                ($$status === 'PENDING' || !$$targetBlog)
                    ? <Emptyboard message={message} />
                    : <ContentBoard
                        title={$$targetBlog.get('title')}
                        time={$$targetBlog.get('onShelfAt')}
                        content={$$targetBlog.get('content')}
                    />
            }
        </Box>
    );
};

export default BlogContentPage;