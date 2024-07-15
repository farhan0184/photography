'use client'
import React from 'react'
import { motion, useScroll } from "framer-motion";


export default function template({ children }: { children: React.ReactNode }) {
    const { scrollYProgress } = useScroll();
    return (
        <>
            <motion.div
                className="progress-bar"
                style={{ scaleX: scrollYProgress }}
            >
            </motion.div>
            {children}
        </>
    )
}
