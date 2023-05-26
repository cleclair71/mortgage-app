import { useState, useRef } from 'react';

export const useHeader = () => {
    const [bar, setBar] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const timeoutId = useRef(null);

    const handleMouseEnter = (name) => {
        clearTimeout(timeoutId.current);
        setActiveDropdown(name);
    };

    const handleMouseLeave = () => {
        timeoutId.current = setTimeout(() => setActiveDropdown(null), 300);
    };

    return {
        bar,
        setBar,
        activeDropdown,
        setActiveDropdown,
        handleMouseEnter,
        handleMouseLeave,
        timeoutId, // return timeoutId here
    }
};