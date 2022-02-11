import React from 'react';
import { useSelector } from 'react-redux';
import { Box, List } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import FuncPart from './FuncPart';
import ModeButton from './ModeButton';
import NavPart from './NavPart';
import * as config from '../../../../config';
import matchPathHandler from '../../../../../lib/handler/matchPathHandler';

const MenuLists = (props) => {
    const { handleClose } = props;
    const theme = useTheme();
    const router = useSelector(state => state.router);
    const pathname = router.get('location').get('pathname');
    const isMatch = matchPathHandler(pathname, `${config.baseHref}`);

    return (
        <Box
            role='presentation'
            onClick={handleClose}
            onKeyDown={handleClose}
            sx={{ display: { sm: 'none' }, background: theme.header.background }}
        >
            <List>
                {<FuncPart />}
                {<ModeButton />}
                {(isMatch) ? null : <NavPart />}
            </List>
        </Box>
    );
}

export default MenuLists;