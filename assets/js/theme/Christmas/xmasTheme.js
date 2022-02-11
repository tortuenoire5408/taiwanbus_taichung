import { createTheme } from '@mui/material/styles';
import goldTheme from '../Normal/goldTheme';
import img from '../../config/img/Christmas';

export const shelfPeriod = {
    onShelf: {
        year: 2021,
        month: 12,
        date: 10,
    },
    offShelf: {
        year: 2021,
        month: 12,
        date: 26,
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

const xmasTheme = createTheme({
    ...goldTheme,
    name: 'xmas',
    images: {
        ...img
    },
    palette: {
        ...goldTheme.palette,
        primary,
        secondary,
    },
    main: {
        ...goldTheme.main,
        background: `url(${img.background.bg}), linear-gradient(180deg, #960000 0%, #580000 100%)`,
        surface: 'linear-gradient(0deg, #ffffff 0%, #ffebc6 100%)',
        homepage: {
            ...goldTheme.main.homepage,
            otherLinks: {
                ...goldTheme.main.homepage.otherLinks,
                bgColor: 'rgb(204, 166, 166)'
            }
        }
    }
});

export default xmasTheme;