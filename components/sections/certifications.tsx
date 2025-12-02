import Image from "next/image"
import { Award } from "lucide-react"
import type { Certification } from "@/lib/data"

interface CertificationsProps {
    certifications: Certification[]
}

export function Certifications({ certifications }: CertificationsProps) {
    return (
        <section className="py-24 px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <h2 className="text-4xl sm:text-5xl font-bold mb-6 premium-heading">Certifications</h2>
                    <div className="section-divider max-w-24 mx-auto"></div>
                    <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
                        Professional certifications and achievements
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {certifications.map((cert) => (
                        <div
                            key={cert._id}
                            className="premium-card p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300 group"
                        >
                            {cert.logo ? (
                                <Image
                                    src={cert.logo || "/placeholder.svg"}
                                    alt={`${cert.issuer} logo`}
                                    width={64}
                                    height={64}
                                    className="w-16 h-16 mx-auto mb-6 object-contain group-hover:scale-110 transition-transform duration-300"
                                />
                            ) : (
                                <Award className="w-16 h-16 text-amber-600 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
                            )}
                            <h3 className="text-lg font-bold mb-3 text-slate-800 dark:text-slate-200">{cert.name}</h3>
                            <p className="text-slate-600 dark:text-slate-300 mb-4 font-medium">{cert.issuer}</p>
                            {cert.credentialUrl && (
                                <a
                                    href={cert.credentialUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 font-medium transition-colors duration-300"
                                >
                                    View Credential →
                                </a>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
