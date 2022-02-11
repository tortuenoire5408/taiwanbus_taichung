import React from 'react';
import { useSelector } from 'react-redux';
import { Box } from '@mui/material';

import NavButton from './NavButton';
import NavLists from './NavLists';

const NavBar = (props) => {
    const { navbar } = props;
    const lang = useSelector(state => state.lang);
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-end'
            }}
        >
            {
                navbar[lang].map((item) => {
                    return (
                        item.nav &&
                        <NavButton
                            key={item.key}
                            item={item}
                        /> ||
                        item.lists &&
                        <NavLists
                            key={item.key}
                            item={item}
                        />
                    )
                })
            }
        </Box>
    )
}

export default NavBar;
