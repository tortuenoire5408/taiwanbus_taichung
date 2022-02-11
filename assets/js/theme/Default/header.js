import palette from './palette';

const header = {
    background: palette.complementary.dark,
    app: {
        icon: palette.primary.contrastText,
        titleBg: 'transparent',
    },
    func: {
        fontColor: '#fff',
        fontSelectColor: 'rgba(255, 255, 255, 0.5)',

        borderColor: '#fff',
        borderSelectColor: 'rgba(255, 255, 255, 0.5)',

        bgColor: 'transparent',
        bgHoverColor: 'rgba(0, 0, 0, 0.04)',
        bgSelectColor: 'transparent',

        menuColor: '#fff',
        itemFontColor: '#121212',
        itemHoverColor: 'transparent'
    },
    nav: {
        fontColor: '#fff',
        fontSelectColor: '#fff',

        borderShadow: 1,

        bgColor: 'transparent',
        bgHoverColor: palette.primary.main,
        bgSelectColor: palette.complementary.main,

        menuColor: '#fff',
        itemFontColor: '#007bff',
        itemHoverColor: 'transparent'
    },
    notices: {
        background: palette.primary.main,
        fontColor: '#fff',
    }
};

export default header;