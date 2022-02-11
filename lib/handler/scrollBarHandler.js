const scrollBarHandler = () => {
    let scrollTop;
    if(typeof document !== 'undefined' || typeof window !== 'undefined') {
        scrollTop =
            document.documentElement.scrollTop ||
            window.pageYOfset ||
            document.body.scrollTop
    }

    return {
        scrollToTop() {
            if(typeof window !== 'undefined') window.scrollTo(0, 0);
        }
    };
}

export default scrollBarHandler();