import routes from './routes';
import theme from '../theme';

const nav_driving_map = theme.images.nav.navDrivingMap;
const nav_news = theme.images.nav.navNews;
const nav_plan = theme.images.nav.navPlan;
const nav_travel_time = theme.images.nav.navTravelTime;
const nav_ticket_price = theme.images.nav.navTicketPrice;
const app_ios = theme.images.app.appiOS;
const app_android = theme.images.app.appAndroid;

export { blogsLoading, withoutBlogs } from './blog';

export const homePageTitle = {
    zh_TW: '歡迎使用台中市即時公車動態系統',
    en_US: 'Welcome to Taichung Bus Information System.'
}

export const navbarZh = [
    {
        key: 'nav.link.1',
        title: '公車動態',
        nav: routes.drivingMap,
        src: nav_driving_map
    },
    {
        key: 'nav.link.2',
        title: '最新消息',
        nav: routes.blog,
        src: nav_news
    },
    {
        key: 'nav.link.3',
        title: '旅運規劃',
        nav: routes.travelPlanner,
        src: nav_plan
    },
    {
        key: 'nav.link.4',
        title: '旅行時間',
        nav: routes.collinearRoutes,
        src: nav_travel_time
    },
    {
        key: 'nav.link.5',
        title: '票價查詢',
        nav: routes.fareAll,
        src: nav_ticket_price
    }
];

export const navbarEng = [
    {
        key: 'nav.link.1',
        title: 'Driving Map',
        nav: routes.drivingMap,
        src: nav_driving_map
    },
    {
        key: 'nav.link.2',
        title: 'News',
        nav: routes.blog,
        src: nav_news
    },
    {
        key: 'nav.link.3',
        title: 'Travel Planner',
        nav: routes.travelPlanner,
        src: nav_plan
    },
    {
        key: 'nav.link.4',
        title: 'Travel Time',
        nav: routes.collinearRoutes,
        src: nav_travel_time
    },
    {
        key: 'nav.link.5',
        title: 'Ticket Info',
        nav: routes.fareAll,
        src: nav_ticket_price
    }
];

export const navbar = {
    zh_TW: navbarZh,
    en_US: navbarEng
}

export const titleData_blog = {
    zh_TW: '最新消息',
    en_US: 'News'
};

export const titleData_qrcode = {
    zh_TW: '台中公車App載點',
    en_US: 'App Download'
};

export const googlePlayAppUrl = 'https://play.google.com/store/apps/details?id=tms.tw.publictransit.TaichungCityBus';
export const appStoreAppUrl = 'https://apps.apple.com/tw/app/%E5%8F%B0%E4%B8%AD%E5%85%AC%E8%BB%8A/id590226800?l=zh';

const googlePlayQRCode = {
    url: googlePlayAppUrl,
    qrcodeSrc: `https://chart.googleapis.com/chart?cht=qr&chl=${googlePlayAppUrl}&chs=150x150`,
};

const appStoreQRCode = {
    url: appStoreAppUrl,
    qrcodeSrc: `https://chart.googleapis.com/chart?cht=qr&chl=${appStoreAppUrl}&chs=150x150`,
};

export const qrcodesData = [
    {
        title: 'Google Play',
        link: googlePlayQRCode.url,
        qrcodeSrc: googlePlayQRCode.qrcodeSrc,
        qrcodeBaseImgSrc: app_android
    },
    {
        title: 'App Store',
        link: appStoreQRCode.url,
        qrcodeSrc: appStoreQRCode.qrcodeSrc,
        qrcodeBaseImgSrc: app_ios
    }
];

export const otherLinksZh = [
    {
        key: 'link.1',
        title: '相關連結',
        nav: routes.otherLinks,
    },
    {
        key: 'link.3',
        title: '路線圖',
        nav: routes.routeMapList,
    },
    {
        key: 'link.4',
        title: '站牌（候車亭）報修',
        nav: routes.stopReport,
    },
];

export const otherLinksEng = [
    {
        key: 'link.1',
        title: 'Links',
        nav: routes.otherLinks,
    },
    {
        key: 'link.3',
        title: 'Route map',
        nav: routes.routeMapList,
    },
    {
        key: 'link.4',
        title: 'Bus stop report',
        nav: routes.stopReport,
    },
];

export const otherLinks = {
    zh_TW: otherLinksZh,
    en_US: otherLinksEng
};