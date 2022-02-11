import React from 'react';
import { useSelector } from 'react-redux';
import { Button, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import ItemContainer from '../../Common/ItemContainer';

const FuncLink = (props) => {
    const { item } = props;
    const theme = useTheme();
    const lang = useSelector(state => state.lang);
    return (
        <ItemContainer item={item}>
            <Button
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
                            xs: `${(lang === 'en_US') ? null : '40px'}`,
                            bsm: `${(lang === 'en_US') ? null : '45px'}`,
                            bml: '100%',
                        }
                    }}
                >
                    {item.title}
                </Typography>
            </Button>
        </ItemContainer>
    )
}

export default FuncLink;
