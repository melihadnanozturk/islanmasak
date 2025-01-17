import React from 'react';
import {motion} from 'framer-motion';

interface VendingMachineProps {
    isActive: boolean;
    position: 'left' | 'right';
}

export const VendingMachine: React.FC<VendingMachineProps> = ({isActive, position}) => {
    return (
        <motion.div
            initial={{opacity: 0, scale: 0.8}}
            animate={{
                opacity: isActive ? 1 : 0,
                scale: isActive ? 1 : 0.8,
            }}
            transition={{duration: 0.5}}
            className={`absolute bottom-0 translate-y-[calc(50%+10px)] pointer-events-none
        ${position === 'left' ? '-left-8 md:-left-10' : '-right-8 md:-right-10'}`}
        >
            <svg
                width="100"
                height="160"
                viewBox="0 0 100 160"
                fill="none"
                className="w-14 h-24 md:w-16 md:h-28"
                style={{transform: position === 'left' ? 'scaleX(-1)' : 'none'}}
            >
                {/* Otomat gövdesi */}
                <motion.rect
                    x="10"
                    y="10"
                    width="80"
                    height="140"
                    rx="8"
                    fill="#60A5FA"
                    stroke="#3B82F6"
                    strokeWidth="4"
                    initial={{pathLength: 0}}
                    animate={{pathLength: 1}}
                    transition={{duration: 0.8}}
                />

                {/* Cam bölme */}
                <motion.rect
                    x="15"
                    y="15"
                    width="70"
                    height="105"
                    fill="#EFF6FF"
                    stroke="#3B82F6"
                    strokeWidth="2"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{delay: 0.5, duration: 0.4}}
                />

                {/* Yağmurluklar */}
                {[0, 1, 2, 3].map((row) => (
                    <motion.g key={`row-${row}`}>
                        {[0, 1].map((col) => (
                            <motion.g key={`item-${row}-${col}`} transform={`translate(${col * 35}, ${row * 25})`}>
                                {/* Yağmurluk gövdesi */}
                                <motion.path
                                    d="M22 25 L38 25 L36 45 L24 45 Z"
                                    fill="#2563EB"
                                    stroke="#1D4ED8"
                                    strokeWidth="1"
                                    initial={{opacity: 0}}
                                    animate={{opacity: 1}}
                                    transition={{delay: 0.5 + (row * 0.1) + (col * 0.05), duration: 0.3}}
                                />
                                {/* Yağmurluk yakası */}
                                <motion.path
                                    d="M24 25 L36 25 L36 28 L24 28 Z"
                                    fill="#1D4ED8"
                                    stroke="#1E40AF"
                                    strokeWidth="0.5"
                                    initial={{opacity: 0}}
                                    animate={{opacity: 1}}
                                    transition={{delay: 0.6 + (row * 0.1) + (col * 0.05), duration: 0.3}}
                                />
                                {/* Yağmurluk fermuarı */}
                                <motion.line
                                    x1="30"
                                    y1="28"
                                    x2="30"
                                    y2="45"
                                    stroke="#1E40AF"
                                    strokeWidth="0.75"
                                    initial={{pathLength: 0}}
                                    animate={{pathLength: 1}}
                                    transition={{delay: 0.7 + (row * 0.1) + (col * 0.05), duration: 0.3}}
                                />
                                {/* Yağmurluk cepleri */}
                                {[-1, 1].map((side) => (
                                    <motion.path
                                        key={`pocket-${side}`}
                                        d={`M${30 + (side * 4)} 35 L${30 + (side * 8)} 35 L${30 + (side * 8)} 40 L${30 + (side * 4)} 40 Z`}
                                        fill="#1D4ED8"
                                        initial={{opacity: 0}}
                                        animate={{opacity: 1}}
                                        transition={{delay: 0.8 + (row * 0.1) + (col * 0.05), duration: 0.3}}
                                    />
                                ))}
                            </motion.g>
                        ))}
                    </motion.g>
                ))}

                {/* Para girişi */}
                <motion.rect
                    x="65"
                    y="125"
                    width="20"
                    height="15"
                    rx="2"
                    fill="#93C5FD"
                    stroke="#3B82F6"
                    strokeWidth="1"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{delay: 1, duration: 0.3}}
                />

                {/* Ürün çıkışı */}
                <motion.path
                    d="M15 130 L45 130 L45 142 L15 142 Z"
                    fill="#93C5FD"
                    stroke="#3B82F6"
                    strokeWidth="1"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{delay: 1, duration: 0.3}}
                />

                {/* Fiyat etiketi */}
                <motion.rect
                    x="55"
                    y="95"
                    width="25"
                    height="15"
                    rx="2"
                    fill="#DBEAFE"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{delay: 0.9, duration: 0.3}}
                />
                <motion.text
                    x="67"
                    y="106"
                    textAnchor="middle"
                    fill="#2563EB"
                    fontSize="10"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{delay: 1, duration: 0.3}}
                >
                    ₺5
                </motion.text>
            </svg>
        </motion.div>
    );
}; 