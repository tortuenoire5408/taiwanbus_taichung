import fs from 'fs';
import path from 'path';

export const fetchNotices = async (ctx) => {
    const filePath = path.resolve('./database/notices.json');
    ctx.response.type = 'json';
    ctx.response.body = await fs.readFileSync(filePath, 'utf-8');
};