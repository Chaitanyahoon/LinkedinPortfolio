import { Calendar } from "lucide-react"
import { formatDateRange } from "@/lib/data"
import type { Experience } from "@/lib/data"

interface ExperienceSectionProps {
    experiences: Experience[]
}

export function ExperienceSection({ experiences }: ExperienceSectionProps) {
    return (
        <section
            id="internships"
            className="py-24 px-6 lg:px-8 bg-gradient-to-br from-white via-slate-50 to-white dark:from-slate-800 dark:via-slate-900 dark:to-slate-800"
        >
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-20">
                    <h2 className="text-4xl sm:text-5xl font-bold mb-6 premium-heading">Internships</h2>
                    <div className="section-divider max-w-24 mx-auto"></div>
                    <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
                        My professional journey through internships and key milestones
                    </p>
                </div>

                <div className="relative">
                    <div className="absolute left-6 md:left-1/2 md:transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-500 to-amber-600"></div>

                    {experiences.map((exp, index) => (
                        <div key={exp._id} className="relative mb-16">
                            <div className="flex items-center mb-6">
                                <div className="absolute left-0 md:left-1/2 md:transform md:-translate-x-1/2 w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center shadow-lg">
                                    <Calendar className="w-6 h-6 text-white" />
                                </div>
                                <div
                                    className={`ml-20 md:ml-0 ${index % 2 === 0 ? "md:mr-auto md:pr-12" : "md:ml-auto md:pl-12"
                                        } md:w-1/2`}
                                >
                                    <div className="premium-card p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                                        <h3 className="text-2xl font-bold mb-3 text-slate-800 dark:text-slate-200">{exp.title}</h3>
                                        <h4 className="text-amber-600 dark:text-amber-400 font-semibold mb-3 text-lg">
                                            {exp.company}
                                        </h4>
                                        <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 font-medium">
                                            {formatDateRange(exp.startDate, exp.endDate, exp.current)}
                                        </p>
                                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">{exp.description}</p>
                                        {exp.skills && exp.skills.length > 0 && (
                                            <div className="flex flex-wrap gap-2">
                                                {exp.skills.map((skill) => (
                                                    <span
                                                        key={skill}
                                                        className="px-3 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 text-xs font-medium rounded-full"
                                                    >
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
