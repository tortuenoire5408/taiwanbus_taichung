import React from 'react';
import { Box, AppBar } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import ActionBar from './ActionBar';
import TitleLogo from './TitleLogo';
import ToolBar from './ToolBar';
import Notices from './Notices';

const Header = () => {
    const theme = useTheme();
    return (
        <Box>
            <AppBar
                position='static'
                sx={{
                    background: theme.header.background,
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: {
                        xs: 'flex-start',
                        sm: 'space-between',
                    },
                    alignItems: {
                        xs: 'center',
                        sm: 'start'
                    }
                }}
            >
                <ToolBar />
                <TitleLogo />
                <ActionBar />
            </AppBar>
            <Notices />
        </Box>
    )
}

export default Header;

