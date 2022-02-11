import routes from './routes';

export const establish = {
    zh_TW: '建立時間:',
    en_US: 'Create Time:',
};

export const pathZh = [
    {
        key: 'base.path.1',
        title: '首頁',
        nav: routes.homePage,
    }, {
        key: 'base.path.2',
        title: '最新消息',
        nav: routes.blog,
    }
];

export const pathEng = [
    {
        key: 'base.path.1',
        title: 'Homepage',
        nav: routes.homePage,
    }, {
        key: 'base.path.2',
        title: 'News',
        nav: routes.blog,
    }
];

export const path = {
    zh_TW: pathZh,
    en_US: pathEng,
    separator: '/'
}

export const blogsLoading = {
    zh_TW: '最新消息更新中...',
    en_US: 'News Loading...',
};

export const withoutBlogs = {
    zh_TW: '抱歉！沒有最新消息',
    en_US: 'Sorry, We have no news.'
};

export const withoutContent = {
    zh_TW: '很抱歉，目前無此消息.',
    en_US: 'Sorry, this blog is not found.'
};