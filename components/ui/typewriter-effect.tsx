"use client"

import { motion, useMotionValue, useTransform, animate } from "framer-motion"
import { useEffect } from "react"

export function TypewriterEffect({ text }: { text: string }) {
    const count = useMotionValue(0)
    const rounded = useTransform(count, (latest) => Math.round(latest))
    const displayText = useTransform(rounded, (latest) => text.slice(0, latest))

    useEffect(() => {
        const controls = animate(count, text.length, {
            type: "tween",
            duration: 3,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 1,
        })
        return controls.stop
    }, [count, text.length])

    return <motion.span>{displayText}</motion.span>
}
