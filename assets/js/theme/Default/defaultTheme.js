import { createTheme } from '@mui/material/styles';
import overrides from './overrides';

const fontFamily = [
    '微軟正黑體',
    '"Noto Sans TC"',
    'Roboto',
].join(',');

const defaultTheme = createTheme({
    ...overrides,
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            bsm: 750,//smedium
            md: 900,
            bml: 952,//between medium and large
            lg: 1200,
            xl: 1536,
        }
    },
    typography: {
        fontFamily,
        lineHeight: 1.5,
    },
    estimateTime: {
        timeStatus: {
            default: '#bbbbbb',
            almostArrival: '#c83264',
            minutesRemained: '#e68c3c',
        }
    },
    travelPlan: {
        planStatus: {
            fatest: '#ff8392',
            walkless: '#9785ff',
            direct: '#ff9933',
        }
    },
    goBack: {
        goBackStatus: {
            go: '#3a75a6',
            back: '#a63a60'
        }
    },
});

export default defaultTheme;