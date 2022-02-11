import React from 'react';
import { useSelector } from 'react-redux';
import { Box } from '@mui/material';

import NavBar from './NavBar';
import FuncBar from './FuncBar';
import { appbar, navbar } from '../../../../assets/js/config/header';
import * as config from '../../../config';
import matchPathHandler from '../../../../lib/handler/matchPathHandler';

const ActionBar = () => {
    const router = useSelector(state => state.router);
    const pathname = router.get('location').get('pathname');
    const isMatch = matchPathHandler(pathname, `${config.baseHref}`);
    return (
        <Box
            sx={{
                pr: 2,
                mt: { bml: 1, xs: 0.25 },
                display: { sm: 'flex', xs: 'none' },
                flexDirection: 'column',
                justifyContent: 'center',
            }}
        >
            <FuncBar appbar={appbar} />
            {(isMatch) ? null : <NavBar navbar={navbar} />}
        </Box>
    )
}

export default ActionBar;