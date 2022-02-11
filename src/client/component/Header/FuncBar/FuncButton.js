import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Button, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import displayModeHandler from '../../../../../lib/handler/displayModeHandler';
import { displayMode } from '../../../../../assets/js/config/header';

const FuncButton = () => {
    const theme = useTheme();
    const [index, setIndex] = useState();
    const lang = useSelector(state => state.lang);

    const _handleClick = () => {
        const mode = displayModeHandler.detectModeAndSet();
        if(mode === 'PC') {
            displayModeHandler.setModeAndReload('RWD');
        } else {
            displayModeHandler.setModeAndReload('PC');
        }
    };

    useEffect(() => {
        const mode = displayModeHandler.detectModeAndSet();
        if(mode === 'PC') setIndex(1);
        else setIndex(0);
    }, []);

    return (
        <Button
            onClick={_handleClick}
            sx={{
                opacity: 1,
                py: { bml: 0.5, bsm: 0.25, xs: 0 },
                px: { bml: 1, bsm: 0.5, xs: 0 },
                m: { bml: 0.5, bsm: 0.25, xs: 0 },
                ':hover': {
                    bgcolor: theme.header.func.bgHoverColor || 'action.hover'
                },
            }}
        >
            <Typography
                sx={{
                    color: theme.header.func.fontColor || 'text.primary',
                    fontWeight: 600,
                    lineHeight: 1.6,
                    textTransform: 'uppercase',
                    fontSize: { bml: '15px', bsm: '12px', xs: '10px' },
                    width: {
                        bml: '100%',
                        xs: `${(lang === 'en_US') ? null : '45px'}`,
                    }
                }}
            >
                {displayMode[lang][index]}
            </Typography>
        </Button>
    );
}

export default FuncButton;