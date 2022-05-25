import ProjectCard from './ProjectCard'
import GitHubIcon from '@material-ui/icons/GitHub'
import google from '../../assets/google-clone.png'
import hulu from '../../assets/hulu-clone.png'
import uber from '../../assets/uber-clone.png'
import whatsapp from '../../assets/whatsapp-clone.png'
import discord from '../../assets/discord-clone.png'
import medium from '../../assets/medium-clone.png'

const Projects = () => {
    return (
        <div className="projects w-full p-10 flex flex-col items-center">
            <div className="lg:text-4xl text-2xl font-bold mb-5 w-full flex justify-center">
                <h1 className="mb-5">Projects I have worked on</h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 mx-auto w-full gap-8">
                <ProjectCard image={google} />
                <ProjectCard image={hulu} />
                <ProjectCard image={uber} />
                <ProjectCard image={whatsapp} />
                <ProjectCard image={discord} />
                <ProjectCard image={medium} />
            </div>

            <a
                href="https://github.com/GautamPB"
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-4 py-2 px-4 border-2 border-blue-500 rounded-full hover:bg-blue-500 group transition duration-300 ease-in-out mt-8"
            >
                <GitHubIcon className="text-blue-500 group-hover:text-white" />
                <p className="text-xl text-blue-500 group-hover:text-white">
                    View more on GitHub
                </p>
            </a>
        </div>
    )
}

export default Projects
