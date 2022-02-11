import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Grid, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import MiddleNav from './MiddleNav';
import BlogsBoard from './BlogsBoard';
import AppsBoard from './AppsBoard';
import OtherLinks from './OtherLinks';
import { homePageTitle } from '../../../../../assets/js/config/home-page';
import styleLayout from '../../../../../assets/js/config/styleLayout';

const Item = (props) => (
    <Box
        sx={(theme) => ({
            mx: 'auto',
            paddingX: theme.spacing(0),
            textAlign: 'center',
        })}
    >{props.children}</Box>
);

const ImageItem = (props) => (
    <Box
        sx={(theme) => ({
            mx: 'auto',
            paddingX: theme.spacing(0),
            textAlign: 'center',

            maxWidth: { lg: '100%', bml: '100%', xs: '50%' },
            maxHeight: { xs: '240px' }
        })}
    >{props.children}</Box>
);

const HomePage = () => {
    const theme = useTheme();
    const lang = useSelector(state => state.lang);
    return (
        <Box
            sx={{
                minHeight: { lg: styleLayout.mainHeight },
                backgroundImage: `url(${theme.images.background.bgBottomLeft})`,
                backgroundSize: { lg: '20%', xs: '40%' },
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'left 0% bottom 0%',
            }}
        >
            <Grid container sx={{ alignItems: 'center' }}>
                <Grid item xs={12} bml={6} lg={3}
                    sx={{ order: { xs: 1, lg: 1 } }}
                >
                    <ImageItem>
                        <img src={theme.images.background.bgTopLeft} style={{ width: '100%' }} />
                    </ImageItem>
                </Grid>
                <Grid item xs={12} lg={6}
                    sx={{ order: { xs: 3, lg: 2 } }}
                >
                    <Item>
                        <Typography
                            variant='h4'
                            sx={(theme) => ({
                                my: 2,
                                mx: 'auto',
                                color: theme.main.homepage.welcomeTitleColor || 'text.primary',
                                fontSize: (lang === 'en_US') ? '28px' : '34px',
                                fontWeight: 500,
                            })}
                        >
                            {homePageTitle[`${lang}`]}
                        </Typography>
                        <MiddleNav />
                    </Item>
                </Grid>
                <Grid item xs={12} bml={6} lg={3}
                    sx={{ order: { xs: 2, lg: 3 } }}
                >
                    <ImageItem>
                        <img src={theme.images.background.bgTopRight} style={{ width: '100%' }} />
                    </ImageItem>
                </Grid>
            </Grid>
            <Grid container >
                <Grid item xs={12} lg={6}
                    sx={{
                        [theme.breakpoints.up('xs')]: {
                            order: 4, display: 'flex', justifyContent: 'center'
                        },
                        [theme.breakpoints.up('lg')]: {
                            display: 'flex', justifyContent: 'flex-end'
                        },
                    }}
                >
                    <BlogsBoard />
                </Grid>
                <Grid item xs={12} sm={6} lg={2.3}
                    sx={{
                        [theme.breakpoints.up('xs')]: {
                            order: 5, display: 'flex', justifyContent: 'center'
                        }
                    }}
                >
                    <AppsBoard />
                </Grid>
                <Grid item xs={12} sm={6} lg={3.7}
                    sx={{
                        [theme.breakpoints.up('xs')]: {
                            order: 6, display: 'flex', justifyContent: 'center'
                        },
                        [theme.breakpoints.up('lg')]: {
                            display: 'flex', justifyContent: 'flex-start'
                        },
                    }}
                >
                    <OtherLinks />
                </Grid>
            </Grid>
        </Box>
    );
}

export default HomePage;