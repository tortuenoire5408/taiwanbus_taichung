import ActionTypes from '../constants/ActionTypes';

export const detectLang = () => {
    return {
        type: ActionTypes.Lang.LANG_DETECT,
    }
}

export const changeLang = (lang) => {
    return {
        type: ActionTypes.Lang.LANG_CHANGE,
        lang: lang
    }
}