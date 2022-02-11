import bg from '../../../../image/Christmas/main/img_bgsnow@2x.png';
import bgTopLeft from '../../../../image/Christmas/main/img_leftupdeco.png';
import bgTopRight from '../../../../image/Christmas/main/img_rightdeco.png';
import bgBottomLeft from '../../../../image/Christmas/main/img_leftdowndeco.png';

import common from '../Common';
//I don't have chd images , replace with Christmas images for the moment
const chd = {
    ...common,
    background: {
        ...common.background,
        bg: bg,
        bgTopLeft: bgTopLeft,
        bgTopRight: bgTopRight,
        bgBottomLeft: bgBottomLeft
    }
}

export default chd;