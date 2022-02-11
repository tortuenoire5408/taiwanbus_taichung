import img from '../../../config/img/Normal';
import palette from '../palette';
import homepage from './homepage';
import blog from './blog';

const main = {
    background: `url(${img.background.bg}), rgba(0, 0, 0, ${0.95})`,
    surface: palette.complementary.light,
    homepage: homepage,
    blog: blog
};

export default main;