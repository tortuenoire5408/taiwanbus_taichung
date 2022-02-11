import webpackDevMiddleware from 'webpack-dev-middleware';
//Keep a back up of koa-webpack-middleware

export default (compiler, opts) => {
    const devMiddleware = webpackDevMiddleware(compiler, opts);

    async function middleware(ctx, next) {
        await devMiddleware(ctx.req, {
            end: (content) => {
                ctx.body = content;
            },
            setHeader: (name, value) => {
                ctx.set(name, value);
            },
            getHeader: (name) => {
                ctx.get(name);
            },
        }, next);
    }

    middleware.getFilenameFromUrl = devMiddleware.getFilenameFromUrl;
    middleware.waitUntilValid = devMiddleware.waitUntilValid;
    middleware.invalidate = devMiddleware.invalidate;
    middleware.close = devMiddleware.close;

    return middleware;
}