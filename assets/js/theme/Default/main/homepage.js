import palette from '../palette';

const homepage = {
    welcomeTitleColor: '#fff',
    middleNav: {
        background: palette.complementary.main,
        navHoverColor: 'rgba(255, 255, 255, 0.2)',
        navFontColor: '#fff'
    },
    board: {
        bullet: '#fff',
        titleColor: '#fff',
        background: '', // default theme.main.surface
        paperColor: '#fff',
        fontColor: palette.primary.contrastText,
        hoverColor: '#ddd',
    },
    otherLinks: {
        fontColor: '#fff',
        borderColor: '#fff',
        bgColor: '',
        bgHoverColor: '',
    }
};

export default homepage;