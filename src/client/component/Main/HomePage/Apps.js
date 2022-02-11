import React from 'react';
import { Box } from '@mui/material';

import ItemContainer from '../../Common/ItemContainer';

const Img = (props) => {
    const { item } = props;
    return (
        <Box
            sx={(theme) => ({
                maxWidth: '100px',
                mr: 1,
                display: 'flex',
                flexDirection: 'column',

                overflow: 'hidden',
                borderColor: 'transparent',
                borderStyle: 'solid',
                borderWidth: '0.5px',
                borderRadius: '4px 4px 0px 0px',

                ':hover': {
                    borderColor: theme.palette.primary.light,
                }
            })}
        >
            <img
                src={item.qrcodeSrc}
                style={{ width: '100%' }}
            />
            <img
                src={item.qrcodeBaseImgSrc}
                style={{ width: '100%' }}
            />
        </Box>
    );
}

const AppItem = (props) => {
    const { item } = props;
    return (
        <ItemContainer item={item}>
            <Img item={item} />
        </ItemContainer>
    )
}

const AppLists = (props) => {
    const { apps } = props;
    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
            {
                apps.map((item, i) => {
                    return (
                        < AppItem key={i} item={item} />
                    )
                })
            }
        </Box>
    );
}

const Apps = (props) => {
    const { apps } = props;
    return (<AppLists apps={apps} />);
}

export default Apps;