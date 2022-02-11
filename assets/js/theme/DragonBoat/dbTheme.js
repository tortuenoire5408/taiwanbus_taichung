import { createTheme } from '@mui/material/styles';
import goldTheme from '../Normal/goldTheme';
import img from '../../config/img/DragonBoat';
// Just test data
export const shelfPeriod = {
    onShelf: {
        year: 2021,
        month: 4,
        date: 20,
    },
    offShelf: {
        year: 2021,
        month: 5,
        date: 10,
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

const dbTheme = createTheme({
    ...goldTheme,
    name: 'dragon-boat',
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

export default dbTheme;