import langHandler from '../../../lib/handler/langHandler';
import ActionTypes from '../constants/ActionTypes';

const lang = (state = 'zh_TW', action) => {
    switch(action.type) {
        case ActionTypes.Lang.LANG_DETECT:
            return langHandler.detectLangAndSet()
        case ActionTypes.Lang.LANG_CHANGE:
            langHandler.setLang(action.lang);
            return action.lang
        default:
            return state
    }
}

export default lang;