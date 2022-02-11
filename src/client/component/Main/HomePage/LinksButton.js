import React from 'react';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import ItemContainer from '../../Common/ItemContainer';

const LinksButton = (props) => {
    const { item } = props;
    const theme = useTheme();
    return (
        <ItemContainer item={item}>
            <Box
                sx={{
                    bgcolor: theme.main.homepage.otherLinks.bgColor || 'transparent',
                    ':hover': {
                        bgcolor: theme.main.homepage.otherLinks.bgHoverColor || 'transparent',
                    },

                    borderColor: theme.main.homepage.otherLinks.borderColor || 'text.primary',
                    borderStyle: 'solid',
                    borderWidth: '0.5px',
                    borderRadius: '4px 4px 4px 4px',

                    p: 0.5,
                    mb: 0.5,
                }}
            >
                <Typography
                    sx={{
                        color: theme.main.homepage.otherLinks.fontColor || 'text.primary',
                        fontSize: '1.1rem',
                        textAlign: 'center',
                        textTransform: 'uppercase'
                    }}
                >
                    {item.title}
                </Typography>
            </Box>
        </ItemContainer>
    );
};

export default LinksButton;