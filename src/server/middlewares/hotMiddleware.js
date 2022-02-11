import webpackHotMiddleware from 'webpack-hot-middleware';
import { PassThrough } from 'stream';
//Keep a back up of koa-webpack-middleware

export default (compiler, opts) => {
    const hotMiddleware = webpackHotMiddleware(compiler, opts);
    return async (ctx, next) => {
        let stream = new PassThrough();
        await hotMiddleware(ctx.req, {
            end: stream.end.bind(stream),
            write: stream.write.bind(stream),
            writeHead: (status, headers) => {
                ctx.body = stream;
                ctx.status = status;
                ctx.set(headers);
            },
        }, next);
    }
}