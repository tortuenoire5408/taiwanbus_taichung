import { createTheme } from '@mui/material/styles';
import goldTheme from '../Normal/goldTheme';
import img from '../../config/img/NewYearRed';
// Just test data
export const shelfPeriod = {
    onShelf: {
        year: 2021,
        month: 2,
        date: 1,
    },
    offShelf: {
        year: 2021,
        month: 2,
        date: 30,
    }
};

const primary = {
    light: '#FF5036',
    main: '#D00009',
    dark: '#960000',
};

const secondary = {
    main: '#fff',
};

const nyrTheme = createTheme({
    ...goldTheme,
    name: 'new-year-red',
    images: {
        ...img
    },
    background: {
        surface: 'linear-gradient(0deg, #ffffff 0%, #ffebc6 100%)',
        main: `url(${img.background.bg}),
                  linear-gradient(180deg, #960000 0%, #580000 100%)`,
    },
    palette: {
        primary,
        secondary,
    }
});

export default nyrTheme;