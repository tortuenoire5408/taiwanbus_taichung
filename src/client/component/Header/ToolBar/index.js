import React, { useState } from 'react';
import { Toolbar, IconButton, Drawer } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';

import MenuLists from './MenuLists';
import { actionBarAnchor } from '../../../../../assets/js/config/header';

const ToolBar = () => {
    const theme = useTheme();
    const [state, setState] = useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const anchor = actionBarAnchor.anchor;

    const toggleDrawer = (isOpen) => (event) => {
        if(event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({ ...state, [anchor]: isOpen });
    };

    return (
        <Toolbar
            variant='dense'
            sx={{ pl: 1, pr: 0, display: { sm: 'none', xs: 'block' } }}
        >
            <IconButton
                size='large'
                aria-label='menu'
                onClick={toggleDrawer(true)}
                sx={{ color: theme.header.app.icon }}
            >
                <MenuIcon />
            </IconButton>
            <Drawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(false)}
            >
                <MenuLists
                    handleClose={toggleDrawer(false)}
                />
            </Drawer>
        </Toolbar>
    )
}

export default ToolBar;

