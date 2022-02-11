import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ListItem, Box, Button, Typography, Menu, MenuItem } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import { changeLang } from '../../../actions';
import ItemContainer from '../../Common/ItemContainer';

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
                    color: (theme) => theme.palette.common.black,
                    fontSize: '16px',
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
                    minWidth: 'calc(100% - 32px)',
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
                            sx={{ px: 0.5, py: 0.5, justifyContent: 'center' }}
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
    );
}

const LangLists = (props) => {
    const { item } = props;
    const theme = useTheme();

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
        <ItemContainer key={item.key} item={item} >
            <ListItem
                button key={item.key}
                onClick={_handleClick}
                sx={{
                    px: 1,
                    py: 0.5,
                    ':hover': {
                        bgcolor: theme.header.func.bgHoverColor || 'action.hover'
                    },
                }}
            >
                <Box
                    sx={{
                        width: '100%',
                        borderRadius: 1,
                        borderWidth: '1px',
                        borderStyle: 'solid',
                        borderColor: theme.header.func.borderColor || 'text.primary',
                        bgcolor: theme.header.func.bgColor || 'transparent',
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    <Typography
                        sx={{
                            color: theme.header.func.fontColor || 'text.primary',
                            textTransform: 'uppercase',
                            textAlign: 'center',
                        }}
                    >
                        {item.title}
                    </Typography>
                    <ArrowDropDownIcon sx={{ color: theme.header.func.fontColor || 'text.primary' }} />
                </Box>
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

export default LangLists;