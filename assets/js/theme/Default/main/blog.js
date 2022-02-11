import palette from '../palette';

const blog = {
    path: {
        background: '#ddd',
        fontColor: palette.primary.contrastText,
        navFontColor: '#007bff', // default palette.primary.contrastText
        fontHoverColor: palette.primary.contrastText,
        navFontHoverColor: '#007bff', // default palette.primary.contrastText
    },
    board: {
        background: '', // default theme.main.surface
        paperColor: '#fff',
        dividerColor: 'rgba(0, 0, 0, 0.12)', // default palette.primary.contrastText
        fontColor: palette.primary.contrastText,
        paperHoverColor: '#ddd',
    }
};

export default blog;