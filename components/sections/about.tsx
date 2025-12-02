"use client"
import { useMemo } from "react"

import { motion } from "framer-motion"
import { Code, Database, Globe, Server, Terminal, Cpu, Award, Briefcase, GraduationCap, Smartphone, PenTool } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import type { Skill } from "@/lib/data"

interface AboutProps {
    skills: Skill[]
}

export function About({ skills }: AboutProps) {
    // Group skills by category
    const categories = useMemo(() => ({
        frontend: skills.filter(s => s.category === "frontend"),
        backend: skills.filter(s => s.category === "backend"),
        database: skills.filter(s => s.category === "database"),
        devops: skills.filter(s => s.category === "devops"),
        mobile: skills.filter(s => s.category === "mobile"),
        tools: skills.filter(s => s.category === "tools"),
    }), [skills])

    const stats = [
        { icon: GraduationCap, label: "Course", value: "PG-DAC" },
        { icon: Briefcase, label: "Internships", value: "3" },
        { icon: Terminal, label: "Projects", value: "10+" },
        { icon: Award, label: "Certifications", value: "5+" },
    ]

    return (
        <section id="about" className="py-24 px-6 lg:px-8 bg-gradient-to-br from-white via-slate-50 to-white dark:from-slate-800 dark:via-slate-900 dark:to-slate-800">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <motion.h2
                        className="text-4xl sm:text-5xl font-bold mb-6 premium-heading"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        About Me
                    </motion.h2>
                    <div className="section-divider max-w-24 mx-auto"></div>
                </div>

                <div className="max-w-4xl mx-auto mb-24">
                    {/* Bio & Stats Grid */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center"
                    >
                        <h3 className="text-3xl font-bold mb-6 text-slate-800 dark:text-slate-200">
                            Aspiring Software Engineer | <span className="text-amber-600">PG-DAC Student</span>
                        </h3>
                        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-12">
                            I am currently pursuing the <strong>Post Graduate Diploma in Advanced Computing (PG-DAC)</strong> at
                            CDAC MET Nashik (Aug 2025 - Present). Having completed my <strong>Bachelor's in Engineering (Information Technology)</strong>
                            (2021-2025), I'm now diving deep into the core of computer science and modern software development—from low-level
                            programming in C/C++ to building scalable enterprise applications with Java and .NET. My journey is defined
                            by a relentless drive to master full-stack technologies and bridge the gap between theoretical concepts and
                            practical, real-world solutions.
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {stats.map((stat, index) => (
                                <div key={index} className="p-6 bg-white dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-700 hover:border-amber-500/50 transition-colors shadow-sm">
                                    <div className="flex flex-col items-center gap-3">
                                        <div className="p-3 bg-amber-100 dark:bg-amber-900/20 rounded-full">
                                            <stat.icon className="w-6 h-6 text-amber-600" />
                                        </div>
                                        <div>
                                            <p className="text-2xl font-bold text-slate-800 dark:text-slate-200">{stat.value}</p>
                                            <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">{stat.label}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Current Focus */}
                        <div className="mt-16 p-6 bg-amber-50 dark:bg-amber-900/10 rounded-2xl border border-amber-100 dark:border-amber-900/20 inline-block">
                            <h4 className="text-lg font-semibold text-amber-800 dark:text-amber-200 mb-2 flex items-center justify-center gap-2">
                                <Cpu className="w-5 h-5" />
                                Current Focus
                            </h4>
                            <p className="text-slate-700 dark:text-slate-300">
                                Exploring <span className="font-medium">Cloud Native Architecture</span>, <span className="font-medium">Docker & Kubernetes</span>, and <span className="font-medium">Advanced Java</span>.
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Skills Tabs */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h3 className="text-2xl font-bold mb-8 text-center text-slate-800 dark:text-slate-200">Technical Arsenal</h3>

                    <Tabs defaultValue="backend" className="w-full max-w-5xl mx-auto">
                        <TabsList className="flex flex-wrap justify-center gap-2 mb-8 h-auto p-2 bg-slate-100 dark:bg-slate-800/50 rounded-xl">
                            <TabsTrigger value="backend" className="rounded-lg px-4 py-2 data-[state=active]:bg-white dark:data-[state=active]:bg-slate-700 data-[state=active]:shadow-sm">Backend & Core</TabsTrigger>
                            <TabsTrigger value="frontend" className="rounded-lg px-4 py-2 data-[state=active]:bg-white dark:data-[state=active]:bg-slate-700 data-[state=active]:shadow-sm">Frontend</TabsTrigger>
                            <TabsTrigger value="database" className="rounded-lg px-4 py-2 data-[state=active]:bg-white dark:data-[state=active]:bg-slate-700 data-[state=active]:shadow-sm">Database</TabsTrigger>
                            <TabsTrigger value="devops" className="rounded-lg px-4 py-2 data-[state=active]:bg-white dark:data-[state=active]:bg-slate-700 data-[state=active]:shadow-sm">DevOps & OS</TabsTrigger>
                            <TabsTrigger value="mobile" className="rounded-lg px-4 py-2 data-[state=active]:bg-white dark:data-[state=active]:bg-slate-700 data-[state=active]:shadow-sm">Mobile</TabsTrigger>
                            <TabsTrigger value="tools" className="rounded-lg px-4 py-2 data-[state=active]:bg-white dark:data-[state=active]:bg-slate-700 data-[state=active]:shadow-sm">Tools & Testing</TabsTrigger>
                        </TabsList>

                        {Object.entries(categories).map(([key, categorySkills]) => (
                            <TabsContent key={key} value={key} className="mt-0">
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                                    {categorySkills.map((skill) => (
                                        <motion.div
                                            key={skill._id}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.2 }}
                                            className="premium-card p-4 rounded-xl flex flex-col items-center justify-center text-center gap-3 hover:border-amber-500/30 group min-h-[140px]"
                                        >
                                            <div className="w-12 h-12 bg-slate-50 dark:bg-slate-800 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                                {key === 'frontend' && <Globe className="w-6 h-6 text-blue-500" />}
                                                {key === 'backend' && <Server className="w-6 h-6 text-green-500" />}
                                                {key === 'database' && <Database className="w-6 h-6 text-purple-500" />}
                                                {key === 'devops' && <Terminal className="w-6 h-6 text-orange-500" />}
                                                {key === 'mobile' && <Smartphone className="w-6 h-6 text-pink-500" />}
                                                {key === 'tools' && <PenTool className="w-6 h-6 text-slate-500" />}
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-slate-800 dark:text-slate-200">{skill.name}</h4>
                                                <div className="w-full bg-slate-100 dark:bg-slate-700 h-1.5 mt-2 rounded-full overflow-hidden">
                                                    <div
                                                        className="h-full bg-gradient-to-r from-amber-400 to-orange-500 rounded-full"
                                                        style={{ width: `${(skill.proficiency / 5) * 100}%` }}
                                                    ></div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </TabsContent>
                        ))}
                    </Tabs>
                </motion.div>
            </div>
        </section>
    )
}
