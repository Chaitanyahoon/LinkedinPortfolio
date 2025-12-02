"use client"

import { Github, Linkedin, Mail, Twitter, ArrowUpRight, MapPin } from "lucide-react"
import { motion } from "framer-motion"

export function Footer() {
    const currentYear = new Date().getFullYear()

    const socialLinks = [
        { icon: Github, href: "https://github.com/chaitanyahoon", label: "GitHub" },
        { icon: Linkedin, href: "https://linkedin.com/in/chaitanya-patil-3006", label: "LinkedIn" },
        { icon: Twitter, href: "https://twitter.com", label: "Twitter" }, // Placeholder if needed, or remove
        { icon: Mail, href: "mailto:chaitanyapatil700@gmail.com", label: "Email" }
    ]

    return (
        <footer className="relative bg-slate-50 dark:bg-slate-950 pt-20 pb-10 overflow-hidden">
            {/* Decorative Top Border */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-purple-500 to-blue-500"></div>

            {/* Background Elements */}
            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
                    {/* Brand Column */}
                    <div className="lg:col-span-5 space-y-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-3xl font-bold premium-heading mb-4">Chaitanya Patil</h3>
                            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-md">
                                A passionate Full Stack Developer crafting robust and scalable web applications.
                                Turning complex problems into elegant digital solutions.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="flex items-center gap-2 text-sm font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20 px-4 py-2 rounded-full w-fit"
                        >
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                            </span>
                            Open to Opportunities
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="flex gap-4 pt-4"
                        >
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-500 hover:border-amber-500/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                                    aria-label={social.label}
                                >
                                    <social.icon className="w-5 h-5" />
                                </a>
                            ))}
                        </motion.div>
                    </div>

                    {/* Navigation Column */}
                    <div className="lg:col-span-3 lg:col-start-7">
                        <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-6">Explore</h4>
                        <ul className="space-y-4">
                            {["Home", "About", "Projects", "Internships", "Contact"].map((item, index) => (
                                <motion.li
                                    key={item}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 + index * 0.05 }}
                                >
                                    <button
                                        onClick={() => document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: "smooth" })}
                                        className="group flex items-center text-slate-600 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-500 transition-colors"
                                    >
                                        <ArrowUpRight className="w-4 h-4 mr-2 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                                        {item}
                                    </button>
                                </motion.li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div className="lg:col-span-3">
                        <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-6">Get in Touch</h4>
                        <div className="space-y-4">
                            <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="flex items-start gap-3 text-slate-600 dark:text-slate-400"
                            >
                                <MapPin className="w-5 h-5 text-amber-600 mt-1 shrink-0" />
                                <span>Pune, Maharashtra</span>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="flex items-center gap-3 text-slate-600 dark:text-slate-400"
                            >
                                <Mail className="w-5 h-5 text-amber-600 shrink-0" />
                                <a href="mailto:chaitanyapatil700@gmail.com" className="hover:text-amber-600 transition-colors">
                                    chaitanyapatil700@gmail.com
                                </a>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-500 dark:text-slate-500 text-sm">
                        &copy; {currentYear} Chaitanya Patil. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm text-slate-500 dark:text-slate-500">
                        <a href="#" className="hover:text-amber-600 transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-amber-600 transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
