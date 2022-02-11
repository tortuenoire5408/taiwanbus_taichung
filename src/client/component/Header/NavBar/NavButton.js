import React from 'react';
import { useSelector } from 'react-redux';
import { Button, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import ItemContainer from '../../Common/ItemContainer';
import matchPathHandler from '../../../../../lib/handler/matchPathHandler';

const NavButton = (props) => {
    const { item } = props;
    const theme = useTheme();
    const lang = useSelector(state => state.lang);
    const router = useSelector(state => state.router);
    const pathname = router.get('location').get('pathname');
    const isMatch = matchPathHandler(pathname, item);

    return (
        <ItemContainer item={item}>
            <Button
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
                    }
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
                            bsm: `${(lang === 'en_US') ? '80px' : '45px'}`,
                            sm: `${(lang === 'en_US') ? '60px' : '30px'}`,
                            xs: `${(lang === 'en_US') ? null : '30px'}`,
                        }
                    }}
                >
                    {item.title}
                </Typography>
            </Button>
        </ItemContainer>
    )
}

export default NavButton;
