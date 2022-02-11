import * as envConfig from '../../../src/config';

export const charset = 'UTF-8';

export const title = '台中即時公車動態資訊';

export const description = '台中即時公車動態資訊';

export const viewport = {
    pcMode: 'width=1280, initial-scale=1, minimum-scale=0.5',
    rwdMode: 'width=device-width, initial-scale=1'
};

export const baseHref = `${envConfig.baseHref}`;

export const appleTouchIcon = `${envConfig.baseHref}/ebus-icon-gold-theme-128-128.png`;

export const shortcutIcon = `${envConfig.baseHref}/favicon.ico`;

export const manifest = `${envConfig.baseHref}/manifest.json`;


