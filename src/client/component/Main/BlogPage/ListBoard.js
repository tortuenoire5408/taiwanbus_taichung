import React from 'react';
import { useSelector } from 'react-redux';
import { Paper, Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { ImmutableItemContainer } from '../../Common/ItemContainer';
import { blogsLoading, withoutBlogs } from '../../../../../assets/js/config/blog';
import styleLayout from '../../../../../assets/js/config/styleLayout';


const TopFlag = () => {
    return (
        <Box
            sx={(theme) => ({
                width: '16px',
                height: '16px',
                background: `url(${theme.images.blog.topFlag})`,
                backgroundRepeat: 'none',
                borderRadius: 10000,
            })}
        >
        </Box>
    );
}

const BlogItem = (props) => {
    const { $$item } = props;
    const theme = useTheme();

    const blogContent = (
        <Box sx={{ display: 'flex', width: '100%', alignItems: 'center' }}>
            {$$item.get('flag') === 'top' && <TopFlag />}
            <Typography
                sx={{
                    flex: 1,
                    color: theme.main.blog.board.fontColor || 'primary.contrastText',
                    fontSize: '1.05rem',
                }}
            >
                {$$item.get('title')}
            </Typography>
        </Box>
    );

    return (
        <Paper
            sx={{
                p: 1.25,
                mb: 1.5,
                transition: '0.2s',
                boxShadow: 1,
                borderRadius: 1.5,
                bgcolor: theme.main.blog.board.paperColor || theme.palette.contrastBg.paper,
                ':hover': { bgcolor: theme.main.blog.board.paperHoverColor }
            }}
        >
            <ImmutableItemContainer $$item={$$item}>
                <Box>
                    <Typography
                        sx={{
                            color: theme.main.blog.board.fontColor || 'primary.contrastText',
                            fontSize: '1.6rem',
                        }}
                    >
                        {$$item.get('title')}
                    </Typography>
                    {blogContent}
                </Box>
            </ImmutableItemContainer>
        </Paper >
    );
};

const BlogLists = (props) => {
    const { $$lists } = props;
    const theme = useTheme();
    const lang = useSelector(state => state.lang);
    const $$status = $$lists.get('status');
    const $$blogs = $$lists.get('blogs').filter((item) => item.get('locale') === (lang));

    const boardStyle = {
        mb: 1,
        p: 1,
        borderRadius: 1.5,
        overflow: { sm: 'auto' },
        width: {
            xs: styleLayout.blogBoardWidth.xs,
            lg: styleLayout.blogBoardWidth.lg
        },
        minHeight: {
            xs: styleLayout.blogBoardHeight
        },
        background: theme.main.blog.board.background || theme.main.surface,
    };

    if($$status === 'PENDING') {
        return (
            <Box sx={boardStyle}>
                <Typography
                    sx={{
                        color: theme.main.homepage.board.fontColor || 'primary.contrastText',
                        fontSize: '1.34rem',
                        fontWeight: 500,
                    }}
                >
                    {blogsLoading[lang]}
                </Typography>
            </Box>
        );
    } else if($$blogs.size === 0) {
        return (
            <Box sx={boardStyle}>
                <Typography
                    sx={{
                        color: theme.main.blog.board.fontColor || 'primary.contrastText',
                        fontSize: '1.34rem',
                        fontWeight: 500,
                    }}
                >
                    {withoutBlogs[lang]}
                </Typography>
            </Box>
        );
    }

    return (
        <Box sx={boardStyle}>
            {
                $$blogs.map(($$item, i) => {
                    return (
                        <BlogItem
                            key={i}
                            $$item={$$item}
                        />
                    );
                })
            }
        </Box>
    );
};

const ListBoard = (props) => {
    const { $$blogs } = props;
    return (<BlogLists $$lists={$$blogs} />);
}

export default ListBoard;