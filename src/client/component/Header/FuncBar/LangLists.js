import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Typography, Menu, MenuItem } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import ItemContainer from '../../Common/ItemContainer';
import { detectLang, changeLang } from '../../../actions';

const LangItem = (props) => {
    const { title, unicode } = props;
    const theme = useTheme();
    const dispatch = useDispatch();
    return (
        <Button
            onClick={() => { dispatch(changeLang(unicode)); }}
            sx={{ ':hover': { bgcolor: theme.header.func.itemHoverColor || 'action.hover' } }}
        >
            <Typography
                variant='span'
                sx={{
                    color: theme.header.func.itemFontColor
                        || theme.palette.primary.contrastText,
                    fontSize: 16,
                    fontWeight: 400,
                    lineHeight: 1.6,
                    textTransform: 'none',
                }}
            >
                {title}
            </Typography>
        </Button>
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
                    bgcolor: theme.header.func.menuColor || theme.palette.contrastBg.paper
                }
            }}
        >
            {
                lists.map((item, i) => {
                    return (
                        <MenuItem
                            key={item.key}
                            onClick={handleClose}
                            sx={{ py: 0.5, justifyContent: 'center', }}
                        >
                            <LangItem
                                key={i}
                                title={item.title}
                                unicode={item.unicode}
                            />
                        </MenuItem>
                    );
                })
            }
        </Menu>
    )
}

const LangLists = (props) => {
    const { item } = props;
    const theme = useTheme();
    const dispatch = useDispatch();
    const lang = useSelector(state => state.lang);

    const [anchorEl, setAnchorEl] = useState(null);
    const isOpen = Boolean(anchorEl);
    const _handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const _handleClose = () => {
        setAnchorEl(null);
    };

    useEffect(() => {
        dispatch(detectLang())
    }, []);

    return (
        <ItemContainer item={item}>
            <Button
                onClick={_handleClick}
                endIcon={
                    <ArrowDropDownIcon sx={{
                        color: theme.header.func.fontColor || 'text.primary',
                        ml: 0
                    }} />
                }
                sx={{
                    borderRadius: 1,
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    borderColor: theme.header.func.borderColor || 'text.primary',
                    bgcolor: theme.header.func.bgColor || 'transparent',
                    opacity: 1,
                    py: { bml: 0.5, bsm: 0.25, xs: 0 },
                    px: { bml: 1, bsm: 0.5, xs: 0 },
                    m: { bml: 0.5, xs: 0.25 },
                    ':hover': {
                        bgcolor: theme.header.func.bgHoverColor || 'action.hover'
                    },
                }}
            >
                <Typography
                    sx={{
                        color: theme.header.func.fontColor || 'text.primary',
                        fontWeight: 400,
                        lineHeight: 1.6,
                        textTransform: 'uppercase',
                        fontSize: { bml: '15px', bsm: '12px', xs: '10px' },
                        width: {
                            xs: `${(lang === 'en_US') ? null : '35px'}`,
                            bsm: `${(lang === 'en_US') ? null : '45px'}`,
                            bml: '100%',
                        }
                    }}>
                    {item.title}
                </Typography>
            </Button>
            <MenuLists
                lists={item.lists}
                anchorEl={anchorEl}
                isOpen={isOpen}
                handleClose={_handleClose}
            />
        </ItemContainer>
    )
}

export default LangLists;
