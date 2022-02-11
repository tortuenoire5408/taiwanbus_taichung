import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Box } from '@mui/material';
import loadable from '@loadable/component';

import theme from '../../../../assets/js/theme';

const Header = loadable(() => import('../Header'));
const Main = loadable(() => import('../Main'));
const Footer = loadable(() => import('../Footer'));
//@babel/plugin-syntax-dynamic-import is included in @babel/preset-env, in ES2020

const Root = (props) => {
    const { autoTheme } = props;
    return (
        <ThemeProvider theme={autoTheme ? autoTheme : theme}>
            <CssBaseline />
            <Box sx={{
                minHeight: '100vh',
            }}>
                <Header />
                <Main />
                <Footer />
            </Box>
        </ThemeProvider>
    );
}

export default Root;