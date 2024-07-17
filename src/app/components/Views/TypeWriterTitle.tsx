import React, { useEffect, useState, useRef } from 'react';
import { observer } from 'mobx-react';
import { motion, useAnimation } from 'framer-motion';
import { TypeWriterTitleViewModel } from '@/app/components/ViewModels/TypeWriterTitleViewModel';

interface TypeWriterTitleProps {
    sectionHeaderStyles?: string;
    text?: string;
}

const TypeWriterTitle: React.FC<TypeWriterTitleProps> = observer((props) => {
    const [viewModel] = useState(() => new TypeWriterTitleViewModel(props.text ?? ""));
    const controls = useAnimation();
    const [blinkInterval, setBlinkInterval] = useState<NodeJS.Timeout | null>(null);
    const isTypingComplete = useRef(false);

    useEffect(() => {
        viewModel.startTyping();
        controls.start({
            opacity: [0, 1],
            transition: { duration: 0.5 }
        });

        return () => {
            viewModel.cleanup();
            stopBlinking();
        };
    }, [viewModel, controls]);

    useEffect(() => {
        if (isTypingComplete.current) {
            startBlinking();
        }
    }, [viewModel.displayedText]);

    const startBlinking = () => {
        const interval = setInterval(() => {
            viewModel.toggleBlinking();
        }, 800); // Adjust blinking speed here
        setBlinkInterval(interval);
    };

    const stopBlinking = () => {
        if (blinkInterval) {
            clearInterval(blinkInterval);
        }
    };

    useEffect(() => {
        const typingTimeout = setTimeout(() => {
            isTypingComplete.current = true;
        }, viewModel.fullText.length * 100); // Adjust typing speed here

        return () => clearTimeout(typingTimeout);
    }, [viewModel.fullText]);

    return (
        <h2 className={props.sectionHeaderStyles}>
            <motion.span animate={controls}>{viewModel.displayedText}</motion.span>
            <motion.span
                animate={{ opacity: viewModel.isBlinking ? 1 : 0 }}
                transition={{ duration: 0.1 }}
            >
                |
            </motion.span>
        </h2>
    );
});

export default React.memo(TypeWriterTitle);