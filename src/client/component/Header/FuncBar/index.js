import React from 'react';
import { useSelector } from 'react-redux';
import { Box } from '@mui/material';

import FuncNav from './FuncNav';
import FuncLink from './FuncLink';
import LangLists from './LangLists';
import FuncButton from './FuncButton';

const FuncBar = (props) => {
    const { appbar } = props;
    const lang = useSelector(state => state.lang);
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-end'
            }}
        >
            {
                appbar[lang].map((item) => {
                    return (
                        item.nav &&
                        <FuncNav
                            key={item.key}
                            item={item}
                        /> ||
                        item.link &&
                        <FuncLink
                            key={item.key}
                            item={item}
                        /> ||
                        item.lists &&
                        <LangLists
                            key={item.key}
                            item={item}
                        />
                    )
                })
            }
            {
                <FuncButton />
            }
        </Box>
    )
}

export default FuncBar;

