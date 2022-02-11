import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Breadcrumbs, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import ItemContainer from '../Common/ItemContainer';
import { breadCrumbs } from '../../../../assets/js/config/footer';

const Footer = () => {
    const theme = useTheme();
    const lang = useSelector(state => state.lang);
    return (
        <Box
            sx={{
                p: 1,
                width: '100%',
                background: theme.footer.background,
            }}
        >
            <Breadcrumbs
                separator='|'
                sx={{
                    '& .MuiBreadcrumbs-ol': {
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        textAlign: 'center',
                    },
                }}
            >
                {
                    breadCrumbs[lang].map((item, i) => (
                        <ItemContainer
                            key={i}
                            item={item}
                        >
                            <Typography
                                component='p'
                                sx={{
                                    color: `${(!item.link)
                                        ? theme.footer.fontColor || 'text.primary'
                                        : theme.footer.navFontColor || 'text.primary'}`,
                                    ':hover': {
                                        color: `${(!item.link)
                                            ? theme.footer.fontHoverColor || 'text.primary'
                                            : theme.footer.navFontHoverColor || 'inherit'}`,
                                    }
                                }}
                            >
                                {item.title}
                            </Typography>
                        </ItemContainer>
                    ))
                }
            </Breadcrumbs>
        </Box>
    );
}

export default Footer;
