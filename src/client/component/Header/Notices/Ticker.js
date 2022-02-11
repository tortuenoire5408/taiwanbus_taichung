import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Box, Typography } from '@mui/material';

import Marquee from './Marquee';
import { noticesLoading, withoutNotices } from '../../../../../assets/js/config/header';
import styleLayout from '../../../../../assets/js/config/styleLayout';
import useUpdateMarquee from '../../../../../lib/utils/useUpdateMarquee';

const Ticker = (props) => {
    const { notices } = props;
    const lang = useSelector(state => state.lang);
    const status = notices.get('status');
    const news = notices.get('notices').filter((item) => item.get('locale') === (lang));
    const [marqueeIndex, setMarqueeIndex] = useState(null);
    const [marqueeRef, isRenew, isHovered, setIsRenew] = useUpdateMarquee();

    useEffect(() => {
        // 設定re-render後的marquee內容
        if(isRenew) {
            setIsRenew(false);
            if(marqueeIndex === (news.size - 1)) {
                setMarqueeIndex(0);
            } else {
                setMarqueeIndex(marqueeIndex + 1);
            }
        }
    }, [isRenew]);

    useEffect(() => {
        if(status === 'SUCCESS' && news.size > 0) {
            setMarqueeIndex(0);
        }
    }, [notices]);

    const content = (news && news.get(marqueeIndex))
        ? (news.get(marqueeIndex).get('link'))
            ? <a href={`${news.get(marqueeIndex).get('link')}`} target='_blank'>
                {news.get(marqueeIndex).get('content')}
            </a>
            : news.get(marqueeIndex).get('content')
        : null;

    return (
        <Box
            sx={{
                width: styleLayout.tickerWidth,
                pl: 1,
                overflow: 'hidden',
                textAlign: 'left',
            }}
        >
            {
                status === 'PENDING'
                    ? <Typography sx={{ fontSize: '1.25rem' }}>
                        {noticesLoading[lang]}
                    </Typography>                               //loading
                    : news.size > 0
                        ? <Marquee
                            refTitle={marqueeRef}
                            isRenew={isRenew}
                            isHovered={isHovered}
                            content={content}
                            marqueeIndex={marqueeIndex}
                        />
                        : <Typography sx={{ fontSize: '1.25rem' }}>
                            {withoutNotices[lang]}
                        </Typography>                            //notices length = 0
            }
        </Box >
    );
}

export default Ticker;