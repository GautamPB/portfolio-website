import ProjectCard from './ProjectCard'
import GitHubIcon from '@material-ui/icons/GitHub'
import google from '../../assets/google-clone.png'
import hulu from '../../assets/hulu-clone.png'
import uber from '../../assets/uber-clone.png'
import whatsapp from '../../assets/whatsapp-clone.png'
import discord from '../../assets/discord-clone.png'
import medium from '../../assets/medium-clone.png'
import animall from '../../assets/animall.png'
import pyramidDevelopers from '../../assets/pyramidDevelopers.png'
import reloadGaming from '../../assets/reloadGaming.png'

const Projects = () => {
    return (
        <div className="projects w-full p-10 flex flex-col items-center">
            <div className="lg:text-4xl text-2xl font-bold mb-5 w-full flex justify-center">
                <h1 className="mb-5">Projects I have worked on</h1>
            </div>

            {/* solo projects */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 mx-auto w-full gap-8">
                <ProjectCard
                    image={google}
                    link="https://google-clone-sepia.vercel.app/"
                    title="Google Clone"
                    description="Built using NextJS, TailwindCSS and Google API"
                />
                <ProjectCard
                    image={hulu}
                    link="https://hulu-clone-ten.vercel.app/"
                    title="Hulu Clone"
                    description="Built using NextJS, TailwindCSS and TMDB API"
                />
                <ProjectCard
                    image={uber}
                    link="https://uber-clone-sage.vercel.app/login"
                    title="Uber Clone"
                    description="Built using NextJS, Firebase, Mapbox and TailwindCSS"
                />
                <ProjectCard
                    image={whatsapp}
                    link="https://whatsapp-clone-next-wine.vercel.app/"
                    title="WhatsApp Clone"
                    description="Built using NextJS, TailwindCSS and Firestore"
                />
                <ProjectCard
                    image={discord}
                    link="https://discord-clone-eta.vercel.app/"
                    title="Discord Clone"
                    description="Built using NextJS, Firebase and TailwindCSS"
                />
                <ProjectCard
                    image={medium}
                    link="https://medium-clone-nu.vercel.app/"
                    title="Medium Clone"
                    description="Built using NextJS, TailwindCSS, TypeScript, SanityIO"
                />
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

            {/* collaborations */}
            <div className="mt-28 w-full flex flex-col space-y-8 items-center justify-center">
                <h1 className="font-bold text-center md:text-lg lg:text-3xl">
                    I am happy to have collaborated with some awesome startups
                </h1>

                <div className="flex flex-col md:flex-row items-center w-full justify-around h-full space-y-12 md:space-y-0">
                    <div className="w-52 flex items-center justify-center flex-col space-y-8">
                        <img src={pyramidDevelopers} alt="" />
                    </div>

                    <div className="w-52 flex items-center justify-center flex-col space-y-8">
                        <img src={animall} alt="" />
                    </div>

                    <div className="w-24 flex items-center justify-center flex-col space-y-8">
                        <img
                            src={reloadGaming}
                            alt=""
                            className="rounded-full"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
