import React from 'react';
import { useSelector } from 'react-redux';
import { ListItem, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import ItemContainer from '../../Common/ItemContainer';
import matchPathHandler from '../../../../../lib/handler/matchPathHandler';

const NavButton = (props) => {
    const { item } = props;
    const theme = useTheme();
    const router = useSelector(state => state.router);
    const pathname = router.get('location').get('pathname');
    const isMatch = matchPathHandler(pathname, item);
    return (
        <ItemContainer key={item.key} item={item}>
            <ListItem
                button key={item.key}
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
            </ListItem>
        </ItemContainer>
    )
}

export default NavButton;
