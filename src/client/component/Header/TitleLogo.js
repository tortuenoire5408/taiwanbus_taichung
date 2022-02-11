import React from 'react';
import { Box, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import ItemContainer from '../Common/ItemContainer';
import { titleLogo } from '../../../../assets/js/config/header';

const TitleLogo = () => {
    const theme = useTheme();
    return (
        <Box sx={{ my: 'auto', width: { bsm: 356, xs: 270 } }}>
            <ItemContainer item={titleLogo}>
                <Button
                    disableRipple={true}
                    sx={{ opacity: 1, ':hover': { bgcolor: theme.header.app.titleBg || 'action.hover' } }}
                >
                    <img
                        alt={titleLogo.title}
                        src={titleLogo.src}
                        style={{ width: '100%' }}
                    />
                </Button>
            </ItemContainer>
        </Box>

    )
}

export default TitleLogo;

