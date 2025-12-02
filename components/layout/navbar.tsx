"use client"

import { useState, useEffect } from "react"
import { Moon, Sun, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"

export function Navbar() {
    const [darkMode, setDarkMode] = useState(true)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [activeSection, setActiveSection] = useState("home")
    const [isScrolled, setIsScrolled] = useState(false)
    const { scrollY } = useScroll()

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 50)
    })

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark")
        } else {
            document.documentElement.classList.remove("dark")
        }
    }, [darkMode])

    useEffect(() => {
        const handleScroll = () => {
            const sections = ["home", "about", "projects", "internships", "contact"]
            const scrollPosition = window.scrollY + 100

            for (const section of sections) {
                const element = document.getElementById(section)
                if (element) {
                    const offsetTop = element.offsetTop
                    const offsetHeight = element.offsetHeight

                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section)
                        break
                    }
                }
            }
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
        }
        setMobileMenuOpen(false)
    }

    return (
        <motion.nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "glass-morphism border-b border-white/10" : "bg-transparent border-transparent"
                }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="font-bold text-2xl premium-heading cursor-pointer" onClick={() => scrollToSection("home")}>
                        CP
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-10">
                        {["Home", "About", "Projects", "Internships", "Contact"].map((item) => (
                            <button
                                key={item}
                                onClick={() => scrollToSection(item.toLowerCase())}
                                className={`text-sm font-medium transition-all duration-300 hover:text-primary relative ${activeSection === item.toLowerCase()
                                    ? "text-primary"
                                    : "text-muted-foreground"
                                    }`}
                            >
                                {item}
                                {activeSection === item.toLowerCase() && (
                                    <motion.div
                                        layoutId="activeSection"
                                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                    ></motion.div>
                                )}
                            </button>
                        ))}
                    </div>

                    <div className="flex items-center space-x-4">
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setDarkMode(!darkMode)}
                            className="p-3 hover:bg-secondary rounded-full transition-all duration-300"
                            title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
                        >
                            {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                        </Button>

                        <Button
                            variant="ghost"
                            size="sm"
                            className="md:hidden p-3 hover:bg-secondary rounded-full"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                        </Button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {mobileMenuOpen && (
                <motion.div
                    className="md:hidden glass-morphism border-t border-white/10"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                >
                    <div className="px-6 pt-4 pb-6 space-y-2">
                        {["Home", "About", "Projects", "Internships", "Contact"].map((item) => (
                            <button
                                key={item}
                                onClick={() => scrollToSection(item.toLowerCase())}
                                className="block px-4 py-3 text-base font-medium text-muted-foreground hover:text-primary w-full text-left rounded-lg hover:bg-secondary transition-all duration-300"
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                </motion.div>
            )}
        </motion.nav>
    )
}
