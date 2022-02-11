import fs from 'fs';
import path from 'path';

export const fetchBlogs = async (ctx) => {
    const filePath = path.resolve('./database/blogs.json');
    ctx.response.type = 'json';
    ctx.response.body = await fs.readFileSync(filePath, 'utf-8');
};