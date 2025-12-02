"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, X } from "lucide-react"
import Image from "next/image"
import type { Project } from "@/lib/data"

interface ProjectModalProps {
    project: Project | null
    isOpen: boolean
    onClose: () => void
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
    if (!project) return null

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-4xl p-0 overflow-hidden bg-white dark:bg-slate-900 border-none">
                <div className="relative h-64 md:h-80 w-full">
                    <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-4 right-4 text-white hover:bg-white/20 rounded-full"
                        onClick={onClose}
                    >
                        <X className="h-6 w-6" />
                    </Button>
                    <div className="absolute bottom-6 left-6 right-6">
                        <Badge className="mb-3 bg-primary text-primary-foreground hover:bg-primary/90">
                            {project.category}
                        </Badge>
                        <DialogTitle className="text-3xl md:text-4xl font-bold text-white mb-2">
                            {project.title}
                        </DialogTitle>
                    </div>
                </div>

                <div className="p-6 md:p-8 max-h-[60vh] overflow-y-auto">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="md:col-span-2 space-y-6">
                            <div>
                                <h4 className="text-lg font-semibold mb-3 text-slate-900 dark:text-slate-100">Overview</h4>
                                <DialogDescription className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                                    {project.description}
                                </DialogDescription>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold mb-3 text-slate-900 dark:text-slate-100">Key Features</h4>
                                <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-300">
                                    <li>Responsive and modern user interface</li>
                                    <li>Optimized performance and SEO</li>
                                    <li>Secure authentication and data handling</li>
                                    <li>Scalable architecture</li>
                                </ul>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <h4 className="text-lg font-semibold mb-3 text-slate-900 dark:text-slate-100">Technologies</h4>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech) => (
                                        <Badge key={tech} variant="secondary" className="px-3 py-1">
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-3 pt-4 border-t border-slate-200 dark:border-slate-800">
                                {project.projectUrl && (
                                    <Button className="w-full premium-button" asChild>
                                        <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">
                                            <ExternalLink className="mr-2 h-4 w-4" />
                                            Live Demo
                                        </a>
                                    </Button>
                                )}
                                {project.githubUrl && (
                                    <Button variant="outline" className="w-full premium-button" asChild>
                                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                            <Github className="mr-2 h-4 w-4" />
                                            View Code
                                        </a>
                                    </Button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}
