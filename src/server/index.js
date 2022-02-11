import Koa from 'koa';
import mount from 'koa-mount';
import koaServe from 'koa-static';
import path from 'path';
import webpack from 'webpack';
import router from './router/index';
import * as envConfig from '../config';
import webpackConfig from '../../webpack.dev';
import { devMiddleware, hotMiddleware } from './middlewares';
const app = new Koa();
const host = envConfig.IP;
const port = envConfig.PORT;
const baseHref = envConfig.baseHref;


if(envConfig.NODE_ENV !== 'production') {
    // 在開發環境下
    const compiler = webpack(webpackConfig);

    // start a webpack develop server
    app.use(devMiddleware(compiler, {
        publicPath: webpackConfig.output.publicPath,
        stats: {
            colors: true
        },
    }));
    // enable HMR
    app.use(hotMiddleware(compiler));
} else {
    //static
    app.use(mount(`${baseHref}`, koaServe(path.resolve('./static'))));
    app.use(koaServe(path.resolve('./dist/client')));
}

// register route
app.use(router.routes()); //啟動路由
app.use(router.allowedMethods()); // 當ctx.status為空或404，處理response

app.listen(port, host, function(err) {
    if(err) {
        console.log('Catch Error:\n' + err);
    } else {
        console.info('==> 🍀 Listening on port %s. Open up http://%s:%s%s in your browser.', port, host, port, baseHref);
        console.info('==> 🍀 Server is on ' + envConfig.NODE_ENV + ' mode');
    }
});