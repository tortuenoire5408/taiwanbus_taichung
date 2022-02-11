// Hook
import { useState, useRef, useEffect } from 'react';

function useUpdateMarquee() {
    const ref = useRef(null);

    const [isRenew, setIsRenew] = useState(false);
    const [isHover, setIsHover] = useState(false);

    const handleMouseOver = () => setIsHover(true);
    const handleMouseOut = () => setIsHover(false);
    useEffect(
        () => {
            const isSupported = ref && ref.current;
            if(!isSupported) return;
            const node = ref.current;

            if(node) {
                // 註冊監聽滑鼠游標動作
                node.addEventListener('mouseover', handleMouseOver);
                node.addEventListener('mouseout', handleMouseOut);

                let nodeRect;
                const cycle = setInterval(() => {
                    // 檢查跑馬燈位置
                    nodeRect = node.getBoundingClientRect();
                    if(!isRenew && (nodeRect.x + nodeRect.width <= 0)) {
                        // 移出視窗是否重新render
                        setIsRenew(true);
                    }
                }, 1000);
                return () => {
                    clearInterval(cycle);
                    node.removeEventListener('mouseover', handleMouseOver);
                    node.removeEventListener('mouseout', handleMouseOut);
                };
            }
        },
        [ref.current] // Recall only if ref changes
    );
    return [ref, isRenew, isHover, setIsRenew];
}

export default useUpdateMarquee;