import React from 'react';
import { Button, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import ItemContainer from '../../Common/ItemContainer';

const NavButton = (props) => {
    const { item } = props;
    const theme = useTheme();
    return (
        <ItemContainer item={item}>
            <Button
                sx={{
                    py: 0.3,
                    px: 0.5,
                    flexDirection: 'column',

                    '&:hover': {
                        transition: '0.2s',
                        borderRadius: 1,
                        backgroundColor: theme.main.homepage.middleNav.navHoverColor || 'action.hover',
                    }
                }}
            >
                <img src={item.src} />
                <Typography sx={{
                    color: theme.main.homepage.middleNav.navFontColor || 'text.primary',
                    fontSize: '1.2rem', fontWeight: 500, textTransform: 'capitalize',
                }}>
                    {item.title}
                </Typography>
            </Button>
        </ItemContainer >
    );
}

export default NavButton;