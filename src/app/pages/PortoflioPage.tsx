'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Github, Linkedin, Mail, Twitter, Calendar, Moon, Sun } from 'lucide-react'

const PROFILE_IMAGE_URL = 'https://i.imgur.com/07u43SF.jpeg';
const EMAIL = 'mtbarrdev@gmail.com';

interface SocialLink {
  href: string;
  icon: JSX.Element;
}

const SOCIAL_LINKS: SocialLink[] = [
  { href: 'https://github.com/mtbarr', icon: <Github className="h-4 w-4" /> },
  { href: 'https://twitter.com/mawbarrx', icon: <Twitter className="h-4 w-4" /> },
  { href: 'https://www.linkedin.com/in/matheusbarret', icon: <Linkedin className="h-4 w-4" /> },
];

interface Colors {
  lightBackground: string;
  darkBackground: string;
  lightBorder: string;
  darkBorder: string;
  lightText: string;
  darkText: string;
  lightIconText: string;
  darkIconText: string;
  whiteText: string;
  darkModeBackground: string;
}

const COLORS: Colors = {
  lightBackground: 'bg-gray-100',
  darkBackground: 'dark:bg-zinc-800',
  lightBorder: 'border-gray-200',
  darkBorder: 'dark:border-zinc-700',
  lightText: 'text-gray-700',
  darkText: 'dark:text-gray-300',
  lightIconText: 'text-gray-600',
  darkIconText: 'dark:text-gray-400',
  whiteText: 'text-black dark:text-white',
  darkModeBackground: 'bg-white dark:bg-zinc-900 text-black dark:text-white',
};

interface DarkModeToggleProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const DarkModeToggle: React.FC<DarkModeToggleProps> = ({ darkMode, toggleDarkMode }) => (
  <div className="flex justify-end mb-4">
    <Button onClick={toggleDarkMode} variant="outline" size="icon">
      {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </Button>
  </div>
);

const ProfileCard: React.FC = () => (
  <div className="sticky top-8">
    <img
      src={PROFILE_IMAGE_URL}
      alt="Perfil"
      className="rounded-full w-64 h-64 mx-auto mb-4"
    />
    <h1 className="text-2xl font-bold mb-2">Matheus Barreto</h1>
    <div className={`flex items-center ${COLORS.lightIconText} ${COLORS.darkIconText} mb-4`}>
      <Mail className="mr-2 h-4 w-4 flex-shrink-0" />
      <span className="text-sm break-all">{EMAIL}</span>
    </div>
    <div className="flex space-x-2">
      {SOCIAL_LINKS.map((link, index) => (
        <Button key={index} variant="outline" size="icon" asChild>
          <a href={link.href} target="_blank" rel="noopener noreferrer">
            {link.icon}
          </a>
        </Button>
      ))}
    </div>
  </div>
);

interface SkillBadgesProps {
  skills: string[];
}

const SkillBadges: React.FC<SkillBadgesProps> = ({ skills }) => (
  <Card className={`mb-6 ${COLORS.lightBackground} ${COLORS.darkBackground} ${COLORS.lightBorder} ${COLORS.darkBorder}`}>
    <CardHeader>
      <CardTitle className={COLORS.whiteText}>Habilidades</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge key={index} variant="secondary" className={`bg-gray-200 dark:bg-zinc-700 ${COLORS.lightText} ${COLORS.darkText}`}>
            {skill}
          </Badge>
        ))}
      </div>
    </CardContent>
  </Card>
);

interface Article {
  title: string;
  date: string;
  description: string;
  link: string;
}

interface ArticleCardProps {
  article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => (
  <Card className={`${COLORS.lightBackground} ${COLORS.darkBackground} ${COLORS.lightBorder} ${COLORS.darkBorder}`}>
    <CardHeader>
      <CardTitle className={COLORS.whiteText}>
        <a href={article.link} className="hover:underline">{article.title}</a>
      </CardTitle>
    </CardHeader>
    <CardContent>
      <p className={`${COLORS.lightText} ${COLORS.darkText} mb-2`}>{article.description}</p>
      <div className={`flex items-center ${COLORS.lightIconText} ${COLORS.darkIconText} text-sm`}>
        <Calendar className="mr-2 h-4 w-4" />
        <span>{article.date}</span>
      </div>
    </CardContent>
  </Card>
);

interface Project {
  title: string;
  description: string;
  technologies: string[];
  link: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => (
  <Card className={`${COLORS.lightBackground} ${COLORS.darkBackground} ${COLORS.lightBorder} ${COLORS.darkBorder}`}>
    <CardHeader>
      <CardTitle className={`${COLORS.whiteText} flex items-center justify-between`}>
        <a href={project.link} className="hover:underline">{project.title}</a>
      </CardTitle>
    </CardHeader>
    <CardContent>
      <p className={`${COLORS.lightText} ${COLORS.darkText} mb-2`}>{project.description}</p>
      <div className="flex flex-wrap gap-2 mt-2">
        {project.technologies.map((tech, index) => (
          <Badge key={index} variant="secondary" className={`bg-gray-200 dark:bg-zinc-700 ${COLORS.lightText} ${COLORS.darkText}`}>
            {tech}
          </Badge>
        ))}
      </div>
    </CardContent>
  </Card>
);

export default function PortfolioPage() {
  const [darkMode, setDarkMode] = useState<boolean>(true);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const skills: string[] = [
    'Kotlin', 'Jetpack Compose', 'Java', 'Spring Framework',
    'JavaScript', 'React', 'Next.js', 'TypeScript',
    'Node.js', 'Express', 'MongoDB', 'PostgreSQL',
    'GraphQL', 'Docker'
  ];

  const projects: Project[] = [
    {
      title: 'translatica',
      description: 'Biblioteca Java para gerenciar mensagens e traduções.',
      technologies: ['Java'],
      link: 'https://github.com/mtbarr/translatica'
    }
  ];

  const articles: Article[] = [
    {
      title: 'Boas práticas de código em java',
      date: '2023-05-15',
      description: 'Um breve compilado de boas práticas de código em java que pode salvar sua aplicação.',
      link: '#'
    }
  ];

  return (
    <div className={`min-h-screen ${COLORS.darkModeBackground} transition-colors duration-300`}>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="md:col-span-1">
            <ProfileCard />
          </div>
          <div className="md:col-span-3">
            <Card className={`mb-6 ${COLORS.lightBackground} ${COLORS.darkBackground} ${COLORS.lightBorder} ${COLORS.darkBorder}`}>
              <CardHeader>
                <CardTitle className={COLORS.whiteText}>Resumo</CardTitle>
              </CardHeader>
              <CardContent>
                <p className={`${COLORS.lightText} ${COLORS.darkText}`}>
                  Comecei a programar como hobby quando tinha 9 anos, lá em 2010.
                  Minhas linguagens favoritas são Java e Kotlin, nas quais gosto de trabalhar.
                  Trabalho profissionalmente como desenvolvedor desde 2018, e você geralmente me encontrará trabalhando em projetos de Minecraft no meu tempo livre.
                </p>
              </CardContent>
            </Card>
            <SkillBadges skills={skills} />
            <h2 className="text-xl font-bold mb-4">Projetos em Destaque</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
            <h2 className="text-xl font-bold mb-4">Artigos Recentes</h2>
            <div className="space-y-4">
              {articles.map((article, index) => (
                <ArticleCard key={index} article={article} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
