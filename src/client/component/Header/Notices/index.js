import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import Ticker from './Ticker';
import { noticesLoading } from '../../../../../assets/js/config/header';
import { getNotices } from '../../../actions';

const Notices = () => {
    const theme = useTheme();
    const dispatch = useDispatch();
    const notices = useSelector(state => state.notices);

    useEffect(() => {
        dispatch(getNotices());
    }, []);

    return (
        <Box
            sx={{
                p: 0.5,
                alignItems: 'center',
                display: 'flex',
                background: theme.header.notices.background,
                color: theme.header.notices.fontColor || 'text.primary'
            }}
        >
            <Box sx={{ p: 0.5, pl: 1 }}>
                <img
                    src={noticesLoading.src}
                    style={{ width: '30px', verticalAlign: 'middle' }}
                />
            </Box>
            <Ticker
                notices={notices}
            />
        </Box>
    )
}

export default Notices;

