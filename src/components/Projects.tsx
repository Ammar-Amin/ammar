import { useScrollReveal } from '../hooks/useScrollReveal'
import type { Project } from '../types'

const projectList: Project[] = [
  {
    title: 'AminEstate',
    emoji: '🏠',
    description: 'Full MERN stack real estate platform. JWT + Google OAuth, CRUD for property listings, image uploads, advanced search. Basically Zillow but with more bugs I already fixed.',
    tags: ['MongoDB', 'Express.js', 'React', 'RTK', 'Firebase', 'Node.js'],
    liveUrl: 'https://estate-mern-0kti.onrender.com',
    githubUrl: 'https://github.com/Ammar-Amin/Estate-MERN',
  },
  {
    title: 'Blog App',
    emoji: '✍️',
    description: 'Full-featured blog platform. React Hook Form, Cloudinary for media, Appwrite backend, TinyMCE rich text. Yes I know everyone builds a blog app. Mine slaps though.',
    tags: ['React', 'RHF', 'Tailwind', 'Cloudinary', 'Appwrite', 'TinyMCE'],
    liveUrl: 'https://blog-app-05.netlify.app/',
    githubUrl: 'https://github.com/Ammar-Amin/Blog-App',
  },
  {
    title: 'Qid Clone',
    emoji: '⚡',
    description: "Cloned an entire complex website in 3 days. Responsive down to 320px. Assignment that became a flex. Why Qid? Doesn't matter. I finished it.",
    tags: ['React', 'TailwindCSS', 'React Router'],
    liveUrl: 'https://qid-ui-by-ammar.vercel.app/',
    githubUrl: 'https://github.com/Ammar-Amin/qid-ui',
  },
  {
    title: 'LU.MA Replica',
    emoji: '🌐',
    description: "Replicated the sleek design and responsive layout of Lu.ma. Clean, reusable components. My designer friends thought I used Webflow. I didn't.",
    tags: ['React', 'TailwindCSS', 'JavaScript'],
    liveUrl: 'https://lu-ma-replica.vercel.app/',
    githubUrl: 'https://github.com/Ammar-Amin/lu.ma_Replica',
  },
  {
    title: 'Van Dwelling',
    emoji: '🚐',
    description: 'Van rental web app with MirageJS for mock API. Proof that you can simulate a whole backend without actually building one. Developer hack of the century.',
    tags: ['React', 'React Router', 'MirageJS', 'CSS'],
    liveUrl: 'https://van-rental-web.vercel.app/',
    githubUrl: 'https://github.com/Ammar-Amin/Van-LifeStyle',
  },
  {
    title: 'Whack-a-Mole',
    emoji: '🔨',
    description: 'Pure HTML/CSS/JS game. Sometimes you just need to whack things. Also proof I remember how to live without a framework. Stressful in a good way.',
    tags: ['HTML', 'CSS', 'Vanilla JS'],
    liveUrl: 'https://random-mole-generating-game.vercel.app/',
    githubUrl: 'https://github.com/Ammar-Amin/Random-Mole-Game',
  },
]

function ProjectCard({ project }: { project: Project }) {
  const ref = useScrollReveal<HTMLDivElement>()
  return (
    <div
      ref={ref}
      className="reveal bg-surface border border-border rounded-lg p-7 transition-all duration-200 relative overflow-hidden hover:border-[#333] hover:-translate-y-[3px] group"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[rgba(232,73,70,0.03)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <h3 className="text-lg font-bold mb-2.5 relative z-10">{project.title} {project.emoji}</h3>
      <p className="text-[13px] text-[#777] leading-[1.6] mb-5 relative z-10">{project.description}</p>
      <div className="flex flex-wrap gap-1.5 mb-5 relative z-10">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="font-mono text-[10px] px-2 py-[3px] rounded bg-[rgba(255,255,255,0.04)] text-muted border border-border"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex gap-3 relative z-10">
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noreferrer"
          className="font-mono text-[11px] text-muted no-underline border-b border-transparent pb-px transition-colors duration-200 hover:text-accent2 hover:border-accent2"
        >
          live ↗
        </a>
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noreferrer"
          className="font-mono text-[11px] text-muted no-underline border-b border-transparent pb-px transition-colors duration-200 hover:text-accent hover:border-accent"
        >
          github ↗
        </a>
      </div>
    </div>
  )
}

export default function Projects() {
  const introRef = useScrollReveal<HTMLParagraphElement>()

  return (
    <section id="projects" className="max-w-[1100px] mx-auto px-6 py-[100px] border-t border-border">
      <div className="section-label">03 — PROJECTS</div>
      <p ref={introRef} className="reveal text-[#777] text-[15px] mb-10 max-w-[500px]">
        things I built when I should've been sleeping
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {projectList.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  )
}
