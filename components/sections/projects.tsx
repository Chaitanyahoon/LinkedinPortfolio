"use client"

import { useState } from "react"
import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ProjectFilter } from "@/components/project-filter"
import { ProjectModal } from "@/components/ui/project-modal"
import type { Project } from "@/lib/data"
import { motion, AnimatePresence } from "framer-motion"

interface ProjectsProps {
    projects: Project[]
}

export function Projects({ projects }: ProjectsProps) {
    const [activeCategory, setActiveCategory] = useState("all")
    const [selectedProject, setSelectedProject] = useState<Project | null>(null)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const filteredProjects = activeCategory === "all"
        ? projects
        : projects.filter((project) => project.category === activeCategory)

    const categories = Array.from(new Set(projects.map((project) => project.category)))

    return (
        <section id="projects" className="py-24 px-6 lg:px-8 bg-secondary/30">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <motion.h2
                        className="text-4xl sm:text-5xl font-bold mb-6 premium-heading"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Featured Projects
                    </motion.h2>
                    <div className="section-divider max-w-24 mx-auto"></div>
                    <motion.p
                        className="text-xl text-muted-foreground leading-relaxed"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        A showcase of my recent work across different technologies and domains
                    </motion.p>
                </div>

                <ProjectFilter
                    categories={categories}
                    activeCategory={activeCategory}
                    onCategoryChange={setActiveCategory}
                />

                <div className="relative mt-12">
                    <motion.div
                        layout
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        <AnimatePresence>
                            {filteredProjects.map((project) => (
                                <motion.div
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3 }}
                                    key={project._id}
                                    className="premium-card rounded-2xl shadow-lg overflow-hidden group cursor-pointer"
                                    whileHover={{ y: -10 }}
                                    onClick={() => {
                                        setSelectedProject(project)
                                        setIsModalOpen(true)
                                    }}
                                >
                                    <div className="relative overflow-hidden aspect-video">
                                        <Image
                                            src={project.image || "/placeholder.svg?height=240&width=384"}
                                            alt={project.title}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        <div className="absolute top-4 right-4">
                                            <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full shadow-lg">
                                                {project.category}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-2xl font-bold mb-3 text-foreground">{project.title}</h3>
                                        <p className="text-muted-foreground mb-6 leading-relaxed line-clamp-3">{project.description}</p>
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {project.technologies.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="px-2.5 py-0.5 bg-secondary text-secondary-foreground text-xs font-medium rounded-full"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="flex gap-3">
                                            {project.projectUrl && (
                                                <Button
                                                    variant="outline"
                                                    className="flex-1 premium-button"
                                                    onClick={(e) => e.stopPropagation()}
                                                    asChild
                                                >
                                                    <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">
                                                        <ExternalLink className="w-4 h-4 mr-2" />
                                                        Live Demo
                                                    </a>
                                                </Button>
                                            )}
                                            {project.githubUrl && (
                                                <Button
                                                    variant="outline"
                                                    className="flex-1 premium-button"
                                                    onClick={(e) => e.stopPropagation()}
                                                    asChild
                                                >
                                                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                                        <Github className="h-5 w-5" />
                                                    </a>
                                                </Button>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </div>

            <ProjectModal
                project={selectedProject}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </section>
    )
}
