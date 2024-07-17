import { motion } from "framer-motion";
import React from "react";

interface LayoutProps {
    children: React.ReactNode;
    classes: string;
}

const Layout = ({ children, classes }: LayoutProps) => (
    <motion.div
        className={`layout ${classes}`}
        initial={{ x: 0, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 0, opacity: 0 }}
        transition={{
            ease: "easeInOut",
            duration: 0.75
        }}
    >
        {children}
    </motion.div>
);
export default Layout;