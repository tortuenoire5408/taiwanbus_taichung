import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Button, Typography, Menu, MenuItem } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import ItemContainer from '../../Common/ItemContainer';
import matchPathHandler from '../../../../../lib/handler/matchPathHandler';

const NavItem = (props) => {
    const { item } = props;
    const theme = useTheme();
    return (
        <ItemContainer item={item}>
            <Button sx={{ ':hover': { bgcolor: theme.header.nav.itemHoverColor || 'action.hover' } }} >
                <Typography
                    sx={{
                        color: theme.header.nav.itemFontColor
                            || theme.palette.primary.contrastText,
                        fontSize: 16,
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
                    bgcolor: theme.header.nav.menuColor || theme.palette.contrastBg.paper
                }
            }}
        >
            {
                lists.map((item) => {
                    return (
                        <MenuItem
                            key={item.key}
                            onClick={handleClose}
                            sx={{ py: 0.5, justifyContent: 'center' }}
                        >
                            <NavItem item={item} />
                        </MenuItem>
                    );
                })
            }
        </Menu>
    )
}

const NavLists = (props) => {
    const { item } = props;
    const theme = useTheme();
    const lang = useSelector(state => state.lang);
    const router = useSelector(state => state.router);
    const pathname = router.get('location').get('pathname');
    const isMatch = matchPathHandler(pathname, item);

    const [anchorEl, setAnchorEl] = useState(null);
    const isOpen = Boolean(anchorEl);
    const _handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const _handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <ItemContainer item={item}>
            <Button
                onClick={_handleClick}
                endIcon={<ArrowDropDownIcon
                    sx={{
                        color: theme.header.nav.fontSelectColor || 'action.disabled',
                        ml: -1
                    }}
                />}
                sx={{
                    borderRadius: 1,
                    boxShadow: theme.header.nav.borderShadow,
                    py: { bml: 0.5, bsm: 0.25, xs: 0 },
                    px: { bml: 1, bsm: 0.5, xs: 0 },
                    m: { bml: 0.5, xs: 0.25 },
                    background: `${(isMatch)
                        ? theme.header.nav.bgSelectColor || 'transparent'
                        : theme.header.nav.bgColor || 'transparent'}`,
                    ':hover': {
                        bgcolor: theme.header.nav.bgHoverColor || 'primary.main',
                    },
                }}
            >
                <Typography
                    sx={{
                        color: `${(isMatch)
                            ? theme.header.nav.fontSelectColor || 'action.disabled'
                            : theme.header.nav.fontColor || 'text.primary'}`,
                        fontWeight: 500,
                        textTransform: 'uppercase',
                        fontSize: { bml: '21px', bsm: '16px', xs: '8px' },
                        width: {
                            bml: '100%',
                            bsm: `${(lang === 'en_US') ? '120px' : '45px'}`,
                            sm: `${(lang === 'en_US') ? '85px' : '30px'}`,
                            xs: `${(lang === 'en_US') ? null : '30px'}`,
                        }
                    }}>
                    {item.title}
                </Typography>
            </Button >
            <MenuLists
                lists={item.lists}
                anchorEl={anchorEl}
                isOpen={isOpen}
                handleClose={_handleClose}
            />
        </ItemContainer>
    )
}

export default NavLists;
