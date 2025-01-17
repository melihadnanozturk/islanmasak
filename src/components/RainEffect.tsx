import React from 'react';
import {motion} from 'framer-motion';

interface RainDropProps {
    delay: number;
    left: string;
}

const RainDrop: React.FC<RainDropProps> = ({delay, left}) => (
    <motion.div
        initial={{y: -20, opacity: 0}}
        animate={{
            y: 120,
            opacity: [0, 1, 1, 0]
        }}
        transition={{
            duration: 0.6,
            delay,
            repeat: Infinity,
            ease: "linear"
        }}
        className="absolute w-1 h-6 bg-blue-400/70 rounded-full"
        style={{left}}
    />
);

interface RainEffectProps {
    isActive: boolean;
}

export const RainEffect: React.FC<RainEffectProps> = ({isActive}) => {
    if (!isActive) return null;

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {Array.from({length: 30}).map((_, i) => (
                <RainDrop
                    key={i}
                    delay={Math.random() * 1.5}
                    left={`${Math.random() * 100}%`}
                />
            ))}
        </div>
    );
}; 