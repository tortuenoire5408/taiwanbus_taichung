const langHandler = () => {
    const langLSKey = 'ibus-tc-lang';
    const defaultLang = 'zh_TW';

    const getLangLSKey = () => {
        return localStorage.getItem(langLSKey) || defaultLang;
    };

    const setLangLSKey = (lang) => {
        localStorage.setItem(langLSKey, lang);
    };

    return {
        setLang(lang) {
            setLangLSKey(lang);
        },
        detectLangAndSet() {
            const lang = getLangLSKey();
            setLangLSKey(lang);
            return lang;
        }
    }
}

export default langHandler();