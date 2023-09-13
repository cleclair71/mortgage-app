import React from 'react';
import { animated, useSpring } from 'react-spring';
import { Button as ChakraButton } from "@chakra-ui/react";

const AnimatedButton = animated(ChakraButton);

const SpringButton = ({ children, ...props }) => {
    const [springProps, setSpringProps] = useSpring(() => ({
        scale: 1,
        config: { mass: 4, tension: 150, friction: 10 },
        
    }));

    return (
        <AnimatedButton
            onMouseEnter={() => setSpringProps({ scale: 1.1 })}
            onMouseLeave={() => setSpringProps({ scale: 1 })}
            style={{
                transform: springProps.scale.interpolate(scale => `scale(${scale})`),
            }}
            {...props}
        >
            {children}
        </AnimatedButton>
    );
};

export default SpringButton;