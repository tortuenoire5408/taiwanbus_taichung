import { createTheme } from '@mui/material/styles';
import goldTheme from '../Normal/goldTheme';
import img from '../../config/img/CustomizeHoliday';
// Just test data
export const shelfPeriod = {
    onShelf: {
        year: 2021,
        month: 1,
        date: 18,
    },
    offShelf: {
        year: 2021,
        month: 1,
        date: 18,
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

const chTheme = createTheme({
    ...goldTheme,
    name: 'customized-holiday',
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

export default chTheme;