import * as config from '../../src/config';
import routes from '../../assets/js/config/routes';

const compare = (pathname, target) => {
    if(target.nav) { //nav
        return (target.nav !== routes.homePage && pathname.match(new RegExp(`${target.nav}`)))
    } else if(target.lists) { //lists
        const index = target.lists.findIndex(
            (element, index) =>
                element.nav !== routes.homePage && (pathname.match(new RegExp(`${element.nav}`)))
        );
        return index >= 0;
    } else return false;
};

const matchPathHandler = (pathname, target) => {
    if(target === `${config.baseHref}`) {
        if(pathname === target || pathname === target + '/') return true;
        else return false;
    } else {
        return compare(pathname, target);
    }
}

export default matchPathHandler;