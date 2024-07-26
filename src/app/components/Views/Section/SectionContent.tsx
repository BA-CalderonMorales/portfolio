import React from "react";
import TypeWriterTitle from "@/app/components/Views/TypeWriterTitle";
import BackgroundBox from "@/app/components/Views/BackgroundBox";

interface SectionContentProps {
    id?: string;
    content: React.ReactNode;
    index: number;
    isHero?: boolean;
    title?: string;
    sectionWrapperStyles: string;
    sectionHeaderStyles: string;
}

const SectionContent: React.FC<SectionContentProps> = ({
    id,
    content,
    index,
    isHero,
    title,
    sectionWrapperStyles,
    sectionHeaderStyles
}) => (
    <section 
        id={id} 
        className={sectionWrapperStyles} 
        style={{ 
            position: 'relative',
            overflow: 'hidden',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }}
    >
        <BackgroundBox
            widthPercentage={100}
            heightPercentage={100}
            color="rgba(0, 0, 0, 0.5)"
            opacity={0.75}
        />
        <div style={{ 
            position: 'relative', 
            zIndex: 2,
            width: '100%',
            height: '100%',
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            {index === 0 && !isHero && (
                <TypeWriterTitle
                    sectionHeaderStyles={sectionHeaderStyles}
                    text={title}
                />
            )}
            {content}
        </div>
    </section>
);

export default SectionContent;