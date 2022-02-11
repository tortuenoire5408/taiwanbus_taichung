import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { ListItem, Button, Typography, Menu, MenuItem } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import ItemContainer from '../../Common/ItemContainer';
import matchPathHandler from '../../../../../lib/handler/matchPathHandler';

const NavItem = (props) => {
    const { item } = props;
    const theme = useTheme();
    return (
        <ItemContainer key={item.key} item={item} >
            <Button sx={{ ':hover': { bgcolor: theme.header.nav.itemHoverColor || 'action.hover' } }} >
                <Typography
                    variant='span'
                    sx={{
                        color: theme.header.nav.itemFontColor
                            || theme.palette.primary.contrastText,
                        fontSize: '16px',
                        fontWeight: 400,
                        lineHeight: 1.6,
                        textTransform: 'none',
                    }}
                >
                    {item.title}
                </Typography>
            </Button>
        </ItemContainer>
    )
}

const MenuLists = (props) => {
    const { lists, anchorEl, isOpen, handleClose } = props;
    const theme = useTheme();
    return (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'bottom', horizontal: 'center',
            }}
            transformOrigin={{
                vertical: 'top', horizontal: 'center',
            }}
            open={isOpen}
            onClose={handleClose}
            sx={{
                '& .MuiPaper-root': {
                    minWidth: 'calc(100% - 32px)',
                    bgcolor: theme.header.nav.menuColor || theme.palette.contrastBg.paper
                }
            }}
        >
            {
                lists.map((item, i) => {
                    return (
                        <MenuItem
                            key={item.key}
                            onClick={handleClose}
                            sx={{ px: 0.5, py: 0.5, justifyContent: 'center' }}
                        >
                            <NavItem
                                item={item}
                            />
                        </MenuItem>
                    );
                })
            }
        </Menu>
    );
}

const NavLists = (props) => {
    const { item } = props;
    const theme = useTheme();
    const router = useSelector(state => state.router);
    const pathname = router.get('location').get('pathname');
    const isMatch = matchPathHandler(pathname, item);

    const [anchorEl, setAnchorEl] = useState(null);
    const isOpen = Boolean(anchorEl);
    const _handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        event.stopPropagation();
    };
    const _handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <ItemContainer key={item.key} item={item}>
            <ListItem
                button key={item.key}
                onClick={_handleClick}
                sx={{
                    justifyContent: 'center',
                    background: `${(isMatch)
                        ? theme.header.nav.bgSelectColor || 'transparent'
                        : theme.header.nav.bgColor || 'transparent'}`,
                    ':hover': {
                        bgcolor: theme.header.nav.bgHoverColor || 'primary.main',
                    },
                }}
            >
                <Typography
                    variant='h6'
                    sx={{
                        color: `${(isMatch)
                            ? theme.header.nav.fontSelectColor || 'action.disabled'
                            : theme.header.nav.fontColor || 'text.primary'}`,
                        fontWeight: 500,
                        textTransform: 'uppercase',
                        textAlign: 'center',
                    }}
                >
                    {item.title}
                </Typography>
                <ArrowDropDownIcon sx={{ color: theme.header.nav.fontSelectColor || 'action.disabled' }} />
            </ListItem>
            <MenuLists
                lists={item.lists}
                anchorEl={anchorEl}
                isOpen={isOpen}
                handleClose={_handleClose}
            />
        </ItemContainer>
    );
}

export default NavLists;