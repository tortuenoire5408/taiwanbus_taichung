import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import styleLayout from '../../../../../assets/js/config/styleLayout';
import ItemContainer from '../../Common/ItemContainer';
import { path } from '../../../../../assets/js/config/blog';

const Path = (props) => {
    const { subDirectory } = props;
    const theme = useTheme();
    const lang = useSelector(state => state.lang);
    // let _path = JSON.parse(JSON.stringify(path[lang])); // 複製Array Deep Copy
    let _path = path[lang].slice(0); // 複製Array Shallow Copy
    const [pathName, setPathName] = useState(_path);

    useEffect(() => {
        _path = JSON.parse(JSON.stringify(path[lang]));// 複製Array Deep Copy
        if(subDirectory) {
            _path.push({ title: subDirectory });
        } else {
            _path[1].nav = '';
        }
        setPathName(_path);
    }, [subDirectory, lang]);

    return (
        <Box sx={{
            m: 1,
            pl: 1,
            width: styleLayout.blogBoardWidth,
            bgcolor: theme.main.blog.path.background || theme.palette.grey[400],
        }}>
            {
                pathName.map((item, i) => (
                    <Box key={i} sx={{ display: 'inline' }}>
                        <ItemContainer item={item}>
                            <Typography
                                component={'span'}
                                sx={{
                                    wordBreak: 'break-all',
                                    color: (!item.nav)
                                        ? theme.main.blog.path.fontColor || 'primary.contrastText'
                                        : theme.main.blog.path.navFontColor || 'primary.contrastText',
                                    ':hover': {
                                        color: `${(!item.nav)
                                            ? theme.main.blog.path.fontHoverColor || 'primary.contrastText'
                                            : theme.main.blog.path.navFontHoverColor || 'primary.contrastText'}`,
                                    },
                                }}
                            >{item.title}</Typography>
                        </ItemContainer>
                        {
                            (i !== pathName.length - 1) && <Typography
                                component={'span'}
                                sx={{
                                    mx: 0.5,
                                    color: theme.main.blog.path.fontColor || 'primary.contrastText'
                                }}
                            >{path.separator}</Typography>
                        }
                    </Box>
                ))
            }
        </Box >
    );
}

export default Path;