"use client";

import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

interface SmoothScrollWrapperProps {
    children: React.ReactNode;
    className?: string; // Optional className prop
}

const SmoothScrollWrapper: React.FC<SmoothScrollWrapperProps> = ({ children, className }) => {

    const scrollRef = useRef<HTMLDivElement>(null);

    const [contentHeight, setContentHeight] = useState(0);

    const { scrollYProgress } = useScroll();

    const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

    const [y, setY] = useState(0);

    useEffect(() => {

        const updateHeight = () => {

            if (scrollRef.current) {

                setContentHeight(scrollRef.current.scrollHeight);

            }

        };

        updateHeight();

        window.addEventListener('resize', updateHeight);

        const unsubscribe = smoothProgress.on("change", (latest) => {

            setY(-(contentHeight - window.innerHeight) * latest);

        });

        return () => {

            window.removeEventListener('resize', updateHeight);

            unsubscribe();

        };

    }, [smoothProgress, contentHeight]);

    return (

        <div style={{ position: 'relative' }}>

            <motion.div

                ref={scrollRef}

                className={`allSections ${ className }`} // Apply the allSections class and any additional class

                style={{
                    y,
                    position: 'relative',
                }}

            >
                {children}

            </motion.div>

        </div>

    );
};

export default React.memo(SmoothScrollWrapper);