import { useState } from 'react';

const useEnd = () => {
    const [isShowing, setIsShowing] = useState(false);

    function toggle() {
        setIsShowing(!isShowing);
    }

    return {
        isShowing,
        toggle,
    };
};

export default useEnd;