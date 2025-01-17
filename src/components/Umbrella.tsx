import React from 'react';
import {motion} from 'framer-motion';

interface UmbrellaProps {
    isActive: boolean;
}

export const Umbrella: React.FC<UmbrellaProps> = ({isActive}) => {
    if (!isActive) return null;

    return (
        <motion.div
            initial={{y: -50, opacity: 0}}
            animate={{y: -10, opacity: 1}}
            exit={{y: -50, opacity: 0}}
            transition={{duration: 0.5, ease: "easeOut"}}
            className="absolute -top-2 left-1/2 -translate-x-1/2 pointer-events-none"
        >
            <svg
                width="120"
                height="120"
                viewBox="0 0 24 24"
                fill="none"
                className="w-20 h-20"
            >
                <motion.path
                    d="M12 4C7.58172 4 4 7.58172 4 12H20C20 7.58172 16.4183 4 12 4Z"
                    fill="#3B82F6"
                    initial={{scale: 0.8}}
                    animate={{scale: 1}}
                    transition={{duration: 0.5, delay: 0.2}}
                />
                <motion.path
                    d="M12 12V19"
                    stroke="#3B82F6"
                    strokeWidth="2"
                    strokeLinecap="round"
                    initial={{pathLength: 0}}
                    animate={{pathLength: 1}}
                    transition={{duration: 0.5, delay: 0.4}}
                />
                <motion.path
                    d="M12 19L14 21"
                    stroke="#3B82F6"
                    strokeWidth="2"
                    strokeLinecap="round"
                    initial={{pathLength: 0}}
                    animate={{pathLength: 1}}
                    transition={{duration: 0.3, delay: 0.6}}
                />
            </svg>
        </motion.div>
    );
}; 