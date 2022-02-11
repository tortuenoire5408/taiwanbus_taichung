import React from 'react';
import { useSelector } from 'react-redux';
import { Box } from '@mui/material';

import { navbar } from '../../../../../assets/js/config/home-page';
import NavButton from './NavButton';

const MiddleNav = () => {
    const lang = useSelector(state => state.lang);
    return (
        <Box
            sx={(theme) => ({
                display: 'flex',
                flexWrap: 'wrap',
                flexDirection: 'row',
                justifyContent: 'space-evenly',

                p: 0.5,
                m: 0.5,
                background: theme.main.homepage.middleNav.background,
                borderRadius: 2, // 8px
            })}
        >
            {
                navbar[lang].map((item) => {
                    return (
                        <NavButton
                            key={item.key}
                            item={item}
                        />
                    );
                })
            }
        </Box>
    );
}

export default MiddleNav;