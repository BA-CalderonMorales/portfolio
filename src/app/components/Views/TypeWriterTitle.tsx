import React, { useEffect, useMemo } from 'react';
import { observer } from 'mobx-react';
import { motion, useAnimation } from 'framer-motion';
import { TypeWriterTitleViewModel } from '@/app/components/ViewModels/TypeWriterTitleViewModel';

interface TypeWriterTitleProps {
    sectionHeaderStyles?: string;
    text?: string;
}

const TypeWriterTitle: React.FC<TypeWriterTitleProps> = observer((props) => {
    const viewModel = useMemo(() => new TypeWriterTitleViewModel(props.text ?? ""), [props.text]);
    const controls = useAnimation();

    useEffect(() => {
        viewModel.startTyping();
        controls.start({
            opacity: [0, 1],
            transition: { duration: 0.5 }
        });

        return () => viewModel.cleanup();
    }, [viewModel, controls]);

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