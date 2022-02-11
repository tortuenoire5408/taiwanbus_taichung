import { viewport } from '../../assets/js/config/head';

const displayModeHandler = () => {
    const displayModeLSKey = 'ibus-tc-display-mode';
    const defaultDisplayMode = 'RWD';

    const pcModeContent = viewport.pcMode;
    const rwdModeContent = viewport.rwdMode;

    const getMetaViewportEL = () => {
        return document.querySelector('meta[name="viewport"]');
    };

    const setPcViewport = () => {
        const metaEl = getMetaViewportEL();
        metaEl && metaEl.setAttribute('content', pcModeContent);
    };

    const setRWDViewport = () => {
        const metaEl = getMetaViewportEL();
        metaEl && metaEl.setAttribute('content', rwdModeContent);
    };

    const getDisplayMode = () => {
        return localStorage.getItem(displayModeLSKey) || defaultDisplayMode;
    };

    const setDisplayMode = (mode) => {
        localStorage.setItem(displayModeLSKey, mode);
    };

    return {
        setModeAndReload(mode) {
            setDisplayMode(mode);
            window.location.reload();
        },

        detectModeAndSet() {
            const displayMode = getDisplayMode();
            if(displayMode === 'PC') setPcViewport();
            else setRWDViewport();
            return displayMode;
        }
    };
}

export default displayModeHandler();