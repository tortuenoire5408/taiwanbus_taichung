import bg from '../../../../image/Normal/main/background-image.png';
import bgTopLeft from '../../../../image/Normal/main/top_left.png';
import bgTopRight from '../../../../image/Normal/main/gold-dust-wheel-50dpi.png';
import bgBottomLeft from '../../../../image/Normal/main/below_left.png';

import common from '../Common';

const gold = {
    ...common,
    background: {
        ...common.background,
        bg: bg,
        bgTopLeft: bgTopLeft,
        bgTopRight: bgTopRight,
        bgBottomLeft: bgBottomLeft
    }
}

export default gold;