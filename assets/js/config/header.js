import routes from './routes';
import { langList } from './lang';
import theme from '../theme';

export const titleLogo = {
    title: 'Home',
    nav: routes.homePage,
    src: theme.images.header.titleLogo
}

export const noticesLoading = {
    zh_TW: '跑馬燈更新中...',
    en_US: 'Notices Loading...',
    src: theme.images.header.MegaPhone
};

export const withoutNotices = {
    zh_TW: '今天是美好的一天!',
    en_US: 'Have a nice day!',
};

export const routePlanZh = [
    {
        key: 'route.plan.1',
        title: '旅運規劃',
        nav: routes.travelPlanner,
    },
    {
        key: 'route.plan.2',
        title: '旅行時間',
        nav: routes.collinearRoutes,
    },
    {
        key: 'route.plan.3',
        title: '路線圖',
        nav: routes.routeMapList,
    }
];

export const otherLinksZh = [
    {
        key: 'other.links.1',
        title: '客運總覽',
        nav: routes.userLink,
    },
    {
        key: 'other.links.2',
        title: '其他相關連結',
        nav: routes.otherLinks,
    }
];

export const otherLinksEng = [
    {
        key: 'other.links.1',
        title: 'NEWS',
        nav: routes.blog,
    },
    {
        key: 'other.links.2',
        title: 'iTravel',
        nav: routes.homePage,
    }
];

export const navbarZh = [
    {
        key: 'nav.link.1',
        title: '最新消息',
        nav: routes.blog
    },
    {
        key: 'nav.link.2',
        title: '公車動態',
        nav: routes.drivingMap
    },
    {
        key: 'nav.link.3',
        title: '路線規劃',
        lists: routePlanZh
    },
    {
        key: 'nav.link.4',
        title: '票價查詢',
        nav: routes.fareAll
    },
    {
        key: 'nav.link.5',
        title: '相關連結',
        lists: otherLinksZh
    },
];

export const navbarEng = [
    {
        key: 'nav.link.1',
        title: 'Driving Map',
        nav: routes.drivingMap
    },
    {
        key: 'nav.link.2',
        title: 'Travel Planner',
        nav: routes.travelPlanner
    },
    {
        key: 'nav.link.3',
        title: 'Other Information',
        lists: otherLinksEng
    },
    {
        key: 'nav.link.4',
        title: 'Travel Time',
        nav: routes.collinearRoutes
    }
];

export const appbarZh = [
    {
        key: 'app.link.1',
        title: '最新消息',
        nav: routes.blog
    },
    {
        key: 'app.link.2',
        title: '無障礙友善版',
        link: 'https://citybus-free.taichung.gov.tw/'
    },
    {
        key: 'app.link.3',
        title: '中/Eng',
        lists: langList
    }
];

export const appbarEng = [
    {
        key: 'app.link.1',
        title: 'NEWS',
        nav: routes.blog
    },
    {
        key: 'app.link.3',
        title: '中/Eng',
        lists: langList
    }
];

export const appbar = {
    zh_TW: appbarZh,
    en_US: appbarEng
};

export const navbar = {
    zh_TW: navbarZh,
    en_US: navbarEng
};

export const actionBarAnchor = {
    anchor: 'top',
    // anchor: 'buttom',
    // anchor: 'left',
    // anchor: 'right',
}

export const displayMode = {
    zh_TW: ['切換為電腦版', '切換為RWD版'],
    en_US: ['Switch to PC Mode', 'Switch to RWD Mode']
};