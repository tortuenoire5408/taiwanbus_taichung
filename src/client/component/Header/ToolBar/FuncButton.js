import React from 'react';
import { useSelector } from 'react-redux';
import { ListItem, Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import ItemContainer from '../../Common/ItemContainer';
import matchPathHandler from '../../../../../lib/handler/matchPathHandler';

const FuncButton = (props) => {
    const { item } = props;
    const theme = useTheme();
    const router = useSelector(state => state.router);
    const pathname = router.get('location').get('pathname');
    const isMatch = matchPathHandler(pathname, item);
    console.log(item.nav);
    return (
        <ItemContainer key={item.key} item={item}>
            <ListItem
                button key={item.key}
                sx={{
                    px: 1,
                    py: 0.5,
                    ':hover': {
                        bgcolor: theme.header.func.bgHoverColor || 'action.hover'
                    },
                }}
            >
                <Box
                    sx={{
                        width: '100%',
                        borderRadius: 1,
                        borderWidth: '1px',
                        borderStyle: 'solid',
                        borderColor: `${(isMatch)
                            ? theme.header.func.borderSelectColor || 'action.disabled'
                            : theme.header.func.borderColor || 'text.primary'}`,
                        bgcolor: `${(isMatch)
                            ? theme.header.func.bgSelectColor || 'transparent'
                            : theme.header.func.bgColor || 'transparent'}`,
                        justifyContent: 'center',
                    }}
                >
                    <Typography
                        sx={{
                            color: `${(isMatch)
                                ? theme.header.func.fontSelectColor || 'action.disabled'
                                : theme.header.func.fontColor || 'text.primary'}`,
                            textTransform: 'uppercase',
                            textAlign: 'center',
                        }}
                    >
                        {item.title}
                    </Typography>
                </Box>
            </ListItem>
        </ItemContainer>
    );
}

export default FuncButton;