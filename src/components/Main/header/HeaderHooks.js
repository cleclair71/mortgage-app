import { useState, useRef } from 'react';

export const useHeader = () => {
    const [bar, setBar] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const timeoutId = useRef(null);

    const handleMouseEnter = (name) => {
        clearTimeout(timeoutId.current);
        setActiveDropdown(name);
    };

    const handleMouseLeave = (name) => {
        timeoutId.current = setTimeout(() => {
            if (activeDropdown === name) { // clear the timeout only if the active dropdown is still the same
                setActiveDropdown(null);
            }
        }, 500);
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