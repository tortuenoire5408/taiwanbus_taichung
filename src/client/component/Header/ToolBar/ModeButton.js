import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ListItem, Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import ItemContainer from '../../Common/ItemContainer';
import displayModeHandler from '../../../../../lib/handler/displayModeHandler';
import { displayMode } from '../../../../../assets/js/config/header';

const ModeButton = () => {
    const theme = useTheme();
    const [index, setIndex] = useState(0);
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
    });

    return (
        <ItemContainer>
            <ListItem
                button key={index}
                onClick={_handleClick}
                sx={{
                    px: 1,
                    py: 0.5,
                    ':hover': {
                        bgcolor: theme.header.func.bgHoverColor || 'action.hover'
                    },
                }}
            >
                <Box sx={{ width: '100%', justifyContent: 'center' }}>
                    <Typography
                        sx={{
                            color: theme.header.func.fontColor || 'text.primary',
                            textTransform: 'uppercase',
                            fontWeight: 500,
                            textAlign: 'center',
                        }}
                    >
                        {displayMode[lang][index]}
                    </Typography>
                </Box>
            </ListItem>
        </ItemContainer>
    );
}

export default ModeButton;