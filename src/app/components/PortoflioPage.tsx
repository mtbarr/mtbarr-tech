import {Github, Linkedin, LinkIcon, Mail, Twitter} from "lucide-react";
import {Button} from "@/src/components/ui/button";
import {Card, CardContent, CardHeader, CardTitle} from "@/src/components/ui/card";
import {Badge} from "@/src/components/ui/badge";

// Constantes para facilitar futuras modificações
const BACKGROUND_COLOR = "bg-zinc-900";
const BORDER_COLOR = "border-zinc-800";
const TEXT_COLOR_PRIMARY = "text-white";
const TEXT_COLOR_SECONDARY = "text-gray-300";

interface Project {
    readonly name: string;
    readonly description: string;
    readonly url: string;
}

// Dados de projetos
const PROJECTS: Project[] = [
    {
        name: "translatica",
        description: "Translatica is a lightweight Java library for managing localized messages and translations with ResourceBundle support",
        url: "https://github.com/mtbarr/translatica"
    },
];

// Habilidades
const SKILLS = [
    "Kotlin", "Jetpack Compose", "Java", "Spring Framework",
    "JavaScript", "React", "Next.js", "TypeScript",
    "Node.js", "Express", "MongoDB", "PostgreSQL",
    "GraphQL", "Docker"
];

// Componentes reutilizáveis para modularização
function SocialLinks() {
    const links = [
        {href: "https://github.com/mtbarr", icon: Github},
        {href: "https://twitter.com/mawbarrx", icon: Twitter},
        {href: "https://www.linkedin.com/in/matheusbarret/", icon: Linkedin}
    ];

    return (
        <div className="flex space-x-2">
            {links.map(({href, icon: Icon}, index) => (
                <Button key={index} variant="outline" size="icon" asChild>
                    <a href={href} target="_blank" rel="noopener noreferrer">
                        <Icon className="h-4 w-4"/>
                    </a>
                </Button>
            ))}
        </div>
    );
}

function ProfileCard() {
    return (
        <div className="sticky top-8">
            <img
                src="https://i.imgur.com/07u43SF.jpeg"
                alt="Profile"
                className="rounded-full w-64 h-64 mx-auto mb-4"
            />
            <h1 className="text-2xl font-bold mb-2">Matheus Barreto</h1>
            <div className="flex items-center text-gray-400 mb-4">
                <Mail className="mr-2 h-4 w-4 flex-shrink-0"/>
                <span className="text-sm break-all">matheusbarretoribeiro2@gmail.com</span>
            </div>
            <SocialLinks/>
        </div>
    );
}

function SkillsCard() {
    return (
        <Card className={`mb-6 ${BACKGROUND_COLOR} ${BORDER_COLOR}`}>
            <CardHeader>
                <CardTitle className={TEXT_COLOR_PRIMARY}>Skills</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex flex-wrap gap-2">
                    {SKILLS.map((skill, index) => (
                        <Badge key={index} variant="secondary" className="bg-zinc-800 text-gray-300">
                            {skill}
                        </Badge>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}

function ProjectCard({project}: { project: Project }) {
    return (
        <Card className={`${BACKGROUND_COLOR} ${BORDER_COLOR}`}>
            <CardHeader>
                <CardTitle className={`flex items-center justify-between ${TEXT_COLOR_PRIMARY}`}>
                    <span>{project.name}</span>
                    <Button variant="ghost" size="icon">
                        <LinkIcon className="h-4 w-4"/>
                    </Button>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <p className={TEXT_COLOR_SECONDARY}>{project.description}</p>
            </CardContent>
        </Card>
    );
}

export default function PortfolioPage() {
    return (
        <div className={`min-h-screen ${BACKGROUND_COLOR} ${TEXT_COLOR_PRIMARY}`}>
            <div className="max-w-6xl mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {/* Sidebar */}
                    <div className="md:col-span-1">
                        <ProfileCard/>
                    </div>

                    {/* Main content */}
                    <div className="md:col-span-3">
                        {/* Summary */}
                        <Card className={`mb-6 ${BACKGROUND_COLOR} ${BORDER_COLOR}`}>
                            <CardHeader>
                                <CardTitle className={TEXT_COLOR_PRIMARY}>Summary</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className={TEXT_COLOR_SECONDARY}>
                                    I started coding as a hobby when I was 9 years old, back in 2010. My favorite
                                    languages are Java and Kotlin, which I enjoy working with the most. I&#39;ve been
                                    working professionally as a developer since 2018, and you’ll often find me working
                                    on Minecraft projects in my free time.
                                </p>
                            </CardContent>
                        </Card>

                        {/* Skills */}
                        <SkillsCard/>

                        {/* Projects */}
                        <h2 className="text-xl font-bold mb-4">Featured Projects</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {PROJECTS.map((project, index) => (
                                <ProjectCard key={index} project={project}/>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
