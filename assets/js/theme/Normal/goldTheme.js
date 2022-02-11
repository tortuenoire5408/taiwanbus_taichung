import { createTheme } from '@mui/material/styles';

import palette from '../Default/palette';
import header from '../Default/header';
import main from '../Default/main';
import footer from '../Default/footer';
import defaultTheme from '../Default/defaultTheme';
import img from '../../config/img/Normal';

const goldTheme = createTheme({
    ...defaultTheme,
    name: 'gold',
    images: {
        ...img
    },
    palette: palette,
    header: header,
    main: main,
    footer: footer,
});

export default goldTheme;