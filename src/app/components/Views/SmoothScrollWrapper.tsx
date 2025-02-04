"use client";

import React, { ReactNode, useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import logger from '@/utils/logger';

interface SmoothScrollWrapperProps {
    children: ReactNode;
    className?: string;
    forceShowWelcome?: boolean;
    disableLocalStorage?: boolean;
}

/**
 * SmoothScrollWrapper Component
 * 
 * Creates a floating panel experience where sections appear as cards
 * over the three.js background. Welcome appears only on home page as first section.
 */
const SmoothScrollWrapper = ({ 
    children, 
    className = '', 
    forceShowWelcome = false,
    disableLocalStorage = false
}: SmoothScrollWrapperProps) => {
    const pathname = usePathname();
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [hasScrolled, setHasScrolled] = useState(false);
    const [welcomeVisible, setWelcomeVisible] = useState(true);
    const [isMounted, setIsMounted] = useState(false);
    const isHomePage = pathname === '/' || pathname === '/home';

    // Function to hide welcome message
    const hideWelcome = () => {
        logger.info('Hiding welcome message');
        setHasScrolled(true);
        setWelcomeVisible(false);
        
        // Store in localStorage if not disabled
        if (!disableLocalStorage && typeof window !== 'undefined') {
            localStorage.setItem('hasSeenWelcome', 'true');
        }
    };
    
    // Initialize client-side state
    useEffect(() => {
        setIsMounted(true);
        
        // If forceShowWelcome is true, always show welcome
        if (forceShowWelcome) {
            setHasScrolled(false);
            setWelcomeVisible(true);
            if (!disableLocalStorage && typeof window !== 'undefined') {
                localStorage.removeItem('hasSeenWelcome');
            }
        } 
        // Otherwise check localStorage
        else if (!disableLocalStorage && typeof window !== 'undefined') {
            const hasSeenWelcome = localStorage.getItem('hasSeenWelcome') === 'true';
            if (hasSeenWelcome) {
                setHasScrolled(true);
                setWelcomeVisible(false);
            }
        }
        
        logger.info('SmoothScrollWrapper initialized:', {
            forceShowWelcome,
            disableLocalStorage,
            hasScrolled: forceShowWelcome ? false : hasScrolled,
            welcomeVisible: forceShowWelcome ? true : welcomeVisible
        });
    }, [forceShowWelcome, disableLocalStorage]);

    // Set up scroll detection
    useEffect(() => {
        if (!isMounted || !isHomePage || hasScrolled) return;
        
        const handleScroll = () => {
            if (window.scrollY > 10) {
                logger.info('Scroll detected, hiding welcome');
                hideWelcome();
            }
        };
        
        const handleWheel = () => {
            logger.info('Wheel event detected');
            hideWelcome();
        };
        
        const touchStartY = { value: 0 };
        const handleTouchStart = (e: TouchEvent) => {
            touchStartY.value = e.touches[0].clientY;
        };
        
        const handleTouchMove = (e: TouchEvent) => {
            const touchY = e.touches[0].clientY;
            if (touchStartY.value - touchY > 5) {
                logger.info('Touch scroll down detected');
                hideWelcome();
            }
        };
        
        // Add all event listeners
        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('wheel', handleWheel, { passive: true });
        window.addEventListener('touchstart', handleTouchStart, { passive: true });
        window.addEventListener('touchmove', handleTouchMove, { passive: true });
        
        if (scrollContainerRef.current) {
            scrollContainerRef.current.addEventListener('scroll', handleScroll, { passive: true });
        }
        
        // Clean up
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('wheel', handleWheel);
            window.removeEventListener('touchstart', handleTouchStart);
            window.removeEventListener('touchmove', handleTouchMove);
            
            if (scrollContainerRef.current) {
                scrollContainerRef.current.removeEventListener('scroll', handleScroll);
            }
        };
    }, [isMounted, isHomePage, hasScrolled]);

    // Check for section visibility using IntersectionObserver
    useEffect(() => {
        if (!isMounted || !isHomePage || hasScrolled) return;
        
        const observer = new IntersectionObserver(
            (entries) => {
                // When first section becomes visible, hide welcome
                if (entries[0]?.isIntersecting) {
                    logger.info('First section intersecting, hiding welcome');
                    hideWelcome();
                }
            },
            { threshold: 0.1 }
        );
        
        // Wait for DOM to settle
        const timer = setTimeout(() => {
            const firstSection = document.querySelector('.floating-sections-container > *:first-child');
            if (firstSection) {
                observer.observe(firstSection);
                logger.info('Observing first section');
            } else {
                logger.warn('First section not found');
            }
        }, 200);
        
        return () => {
            clearTimeout(timer);
            observer.disconnect();
        };
    }, [isMounted, isHomePage, hasScrolled]);

    // Determine if welcome should be shown
    const showWelcome = isMounted && isHomePage && welcomeVisible && !hasScrolled;

    return (
        <div
            ref={scrollContainerRef}
            className={`smooth-scroll-container ${className}`}
            style={{
                width: '100%',
                height: '100vh',
                overflowY: 'auto',
                scrollBehavior: 'smooth',
                position: 'relative',
            }}
        >
            {/* Welcome section with animation for removal */}
            {isMounted && (
                <AnimatePresence>
                    {showWelcome && (
                        <motion.section
                            className="welcome-section"
                            initial={{ opacity: 1 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.5 }}
                            style={{
                                height: '100vh',
                                width: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                position: 'relative',
                                scrollSnapAlign: 'start',
                                background: 'transparent',
                            }}
                        >
                            <motion.div
                                className="welcome-content"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1 }}
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    textAlign: 'center',
                                    padding: '2rem',
                                }}
                            >
                                <motion.p
                                    style={{
                                        color: 'rgba(255,255,255,0.9)',
                                        maxWidth: '600px',
                                        textAlign: 'center',
                                        fontSize: '2rem',
                                        fontWeight: 'bold',
                                        textShadow: '0 2px 10px rgba(0,0,0,0.5)',
                                    }}
                                >
                                    Welcome to my portfolio!
                                </motion.p>
                                <motion.div
                                    animate={{ y: [0, 10, 0] }}
                                    transition={{
                                        repeat: Infinity,
                                        duration: 2,
                                        ease: "easeInOut"
                                    }}
                                    style={{ marginTop: '2rem', cursor: 'pointer' }}
                                    onClick={hideWelcome}
                                >
                                    <svg
                                        width="40"
                                        height="40"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="white"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M12 5v14M5 12l7 7 7-7" />
                                    </svg>
                                </motion.div>
                            </motion.div>
                        </motion.section>
                    )}
                </AnimatePresence>
            )}

            {/* Content sections container with appropriate spacing */}
            <div
                className={`floating-sections-container ${!showWelcome ? 'no-welcome-padding' : ''}`}
            >
                {children}
            </div>
        </div>
    );
};

export default SmoothScrollWrapper;