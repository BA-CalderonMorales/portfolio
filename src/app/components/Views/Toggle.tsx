import React, { memo, useEffect, useState } from "react";
import { SVGMotionProps, motion } from "framer-motion";

interface PathProps {
    isOpen: boolean
}

interface ToggleProps {
    buttonClasses: string,
    isOpen: boolean,
    setIsOpen: (isOpen: boolean) => void
}

type PathPropsWithMotion = PathProps & SVGMotionProps<SVGPathElement>;

const variants: { [key: string]: any } = {
    open: (custom: number) => ({
        d: custom === 0
        ? "M0 0 L40 30" // top
        : custom === 1
        ? "M0 0 L0 0"   // middle
        : custom === 2
        ? "M100 -50 L-5 22"  // bottom
        : "M0 0 L0 0",  // default 
        opacity: 1
    }),
    closed: (custom: number) => ({
        d: custom === 0
        ? "M0 1h38" // top
        : custom === 1
        ? "M0 10h38" // middle
        : custom === 2
        ? "M0 20h38" // bottom
        : "M0 0 L0 0", // default
        opacity: 1
    })
};

const Path = (props : PathPropsWithMotion) => {

    return <motion.path
        animate={props.isOpen ? "open" : "closed"}
        xmlns="http://www.w3.org/2000/svg"
        fill="transparent"
        strokeWidth="2"
        stroke="hsl(0, 0%, 20%)"
        strokeLinecap="round"
        variants={variants}
        custom={props.custom}
    />

};

const Toggle = (props: ToggleProps) => {

    return (
        <motion.button
            animate={props.isOpen ? "open" : "closed"}
            transition={{
                type: "spring",
                stiffness: 300,
                damping: 20
            }}
            className={props.buttonClasses}
            onClick={e => {
                e.preventDefault();
                props.setIsOpen(!props.isOpen)
            }}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >

            <motion.svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                animate={{
                    rotate: props.isOpen ? 360 : 0,
                }}
                transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                    duration: 1.5
                }}
            >

                <Path isOpen={props.isOpen} custom={0} />

                <Path isOpen={props.isOpen} custom={1} />

                <Path isOpen={props.isOpen} custom={2} />

            </motion.svg>

        </motion.button>
    );
};

export default memo(Toggle);