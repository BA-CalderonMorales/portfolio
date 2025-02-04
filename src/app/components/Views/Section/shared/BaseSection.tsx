import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./BaseSection.css";

export interface BaseSectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  darkMode?: boolean;
}

export const BaseSection: React.FC<BaseSectionProps> = ({
  id,
  className = "",
  children,
  darkMode = false,
}) => {
  const baseClass = "section";
  const themeClass = darkMode ? "dark-mode" : "";
  const combinedClassName = `${baseClass} ${themeClass} ${className}`.trim();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <motion.section
      id={id}
      className={combinedClassName}
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="section-content container">
        {children}
      </div>
    </motion.section>
  );
};
