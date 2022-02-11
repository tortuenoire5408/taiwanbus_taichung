const paletteMode = 'dark';

const primary = (mode) => ({
    light: '#ffe7a1',
    main: '#d4b572',
    dark: '#a18545',
    contrastText: (mode == 'light') ? '#fff' : 'rgba(0, 0, 0, 0.87)'
});

const contrastBg = (mode) => ({
    paper: (mode == 'light') ? '#121212' : '#fff',
    default: (mode == 'light') ? '#121212' : '#fff',
});

const complementary = {
    light: 'linear-gradient(90deg, rgba(252,250,240,1) 58%, rgba(230,214,167,1) 100%)',
    dark: 'linear-gradient(90deg, rgba(60,60,60,1) 0%, rgba(84,84,84,1) 12%, rgba(15,15,15,1) 49%, rgba(91,91,91,1) 77%, rgba(52,52,52,1) 100%)',
    main: 'linear-gradient(90deg, rgba(240,203,67,1) 0%, rgba(208,151,37,1) 100%)',
};

const palette = {
    mode: paletteMode,
    primary: primary(paletteMode),
    contrastBg: contrastBg(paletteMode),
    complementary: complementary
};

export default palette;