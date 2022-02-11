import React from 'react';
import { useSelector } from 'react-redux';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import LinksButton from './LinksButton';
import { otherLinks } from '../../../../../assets/js/config/home-page';

const OtherLinks = () => {
    const theme = useTheme();
    const lang = useSelector(state => state.lang);
    return (
        <Box sx={{ my: 1, px: 1 }}>
            <Box sx={{
                p: 0.75,
                mt: 5,
                width: '150px',
                alignItems: 'center'
            }}>
                {
                    otherLinks[lang].map((item, i) => (
                        <LinksButton key={i} item={item} />
                    ))
                }
                <img src={theme.images.background.bgBottomRight}
                    style={{ maxWidth: '270px', marginLeft: '-63px' }}
                />
            </Box>
        </Box >
    );
}

export default OtherLinks;