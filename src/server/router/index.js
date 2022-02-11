import Router from 'koa-router';
import api from './api';
import isomorphic from './isomorphic';
const router = new Router();

router.get('/api/blogs', api.blog.fetchBlogs);
router.get('/api/notices', api.notice.fetchNotices);

router.get('(.*)', isomorphic);

export default router;