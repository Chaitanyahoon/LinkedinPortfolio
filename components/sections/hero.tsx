"use client"

import { ArrowRight, Download, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ParticlesBackground } from "@/components/ui/particles-background"
import { TypewriterEffect } from "@/components/ui/typewriter-effect"

export function Hero() {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
        }
    }

    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center px-6 lg:px-8 relative overflow-hidden"
        >
            <ParticlesBackground />
            {/* Dynamic Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-purple-500/5 dark:from-primary/10 dark:via-background dark:to-purple-900/10 -z-20"></div>
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

            <div className="max-w-5xl mx-auto text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 premium-heading leading-tight">
                        Chaitanya Patil
                    </h1>
                    <motion.h2
                        className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-8 font-light"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    >
                        <TypewriterEffect text="Full Stack Developer | React Enthusiast" />
                    </motion.h2>
                    <motion.p
                        className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    >
                        Crafting exceptional digital experiences with modern web technologies and innovative solutions that
                        bridge creativity with functionality
                    </motion.p>
                    <motion.div
                        className="flex flex-col sm:flex-row gap-6 justify-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 0.8 }}
                    >
                        <Button
                            onClick={() => scrollToSection("projects")}
                            className="premium-button bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-6 text-lg font-medium rounded-full shadow-lg hover:shadow-primary/25"
                        >
                            View My Work
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                        <Button
                            variant="outline"
                            onClick={() => scrollToSection("contact")}
                            className="premium-button border-2 px-10 py-6 text-lg font-medium rounded-full hover:bg-secondary"
                        >
                            Get In Touch
                        </Button>
                        <div className="flex gap-4">
                            <Button
                                variant="outline"
                                className="premium-button border-2 px-6 py-6 text-lg font-medium rounded-full hover:bg-secondary"
                                asChild
                            >
                                <a href="https://drive.google.com/file/d/1T-EoIm0gf8yEahPu4ZcoLEr3Yr5xaqL6/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                                    <Eye className="mr-2 h-5 w-5" />
                                    Preview
                                </a>
                            </Button>
                            <Button
                                variant="outline"
                                className="premium-button border-2 px-6 py-6 text-lg font-medium rounded-full hover:bg-secondary"
                                asChild
                            >
                                <a href="https://drive.google.com/file/d/1T-EoIm0gf8yEahPu4ZcoLEr3Yr5xaqL6/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                                    <Download className="mr-2 h-5 w-5" />
                                    Download
                                </a>
                            </Button>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
