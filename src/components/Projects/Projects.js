import ProjectCard from './ProjectCard'
import amazon from '../../assets/amazon-clone.png'
import google from '../../assets/google-clone.png'
import hulu from '../../assets/hulu-clone.png'
import uber from '../../assets/uber-clone.png'
import stories from '../../assets/stories-made-simple.png'
import whatsapp from '../../assets/whatsapp-clone.png'
import nextjs from '../../assets/nextjs.png'
import react from '../../assets/react.jpg'
import discord from '../../assets/discord-clone.png'
import medium from '../../assets/medium-clone.png'

const Projects = () => {
    return (
        <div className="projects bg-blue-50 w-full p-10">
            <div className="text-4xl font-bold mb-5 border-b-2 border-[#FC0C57]">
                <h1 className="mb-5">My Projects</h1>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:flex 2xl:flex-wrap justify-center">
                <ProjectCard
                    image={medium}
                    github="https://github.com/GautamPB/Snake-Game"
                    link="https://medium-clone-nu.vercel.app/"
                    title="Medium Clone"
                    description="Built using NextJS, TailwindCSS, TypeScript, SanityIO"
                    flip="left"
                    languageCover={nextjs}
                />

                <ProjectCard
                    image={amazon}
                    link="https://amazon-clone-next-theta.vercel.app/"
                    title="Amazon Clone"
                    description="Built using NextJS, Firebase, Redux and TailwindCSS"
                    flip="right"
                    languageCover={nextjs}
                    github="https://github.com/GautamPB/amazon-clone-next"
                />
                <ProjectCard
                    image={google}
                    link="https://google-clone-sepia.vercel.app/"
                    title="Google Clone"
                    description="Built using NextJS, TailwindCSS and Google API"
                    flip="left"
                    languageCover={nextjs}
                    github="https://github.com/GautamPB/google-clone"
                />
                <ProjectCard
                    image={hulu}
                    link="https://hulu-clone-ten.vercel.app/"
                    title="Hulu Clone"
                    description="Built using NextJS, TailwindCSS and TMDB API"
                    flip="right"
                    languageCover={nextjs}
                    github="https://github.com/GautamPB/hulu-clone"
                />

                <ProjectCard
                    image={uber}
                    title="Uber Clone"
                    link="https://uber-clone-sage.vercel.app"
                    description="Built using NextJS, Firebase, Mapbox and TailwindCSS"
                    flip="left"
                    languageCover={nextjs}
                    github="https://github.com/GautamPB/uber-clone/tree/main"
                />

                <ProjectCard
                    image={stories}
                    link="https://stories-made-simple.web.app/"
                    title="Stories Made Simple"
                    description="App where people can upload their stories, poems or blogs"
                    flip="right"
                    languageCover={react}
                />

                <ProjectCard
                    image={discord}
                    link="https://discord-clone-eta.vercel.app/"
                    title="Discord Clone"
                    description="Built using NextJS, Firebase and TailwindCSS"
                    flip="left"
                    languageCover={nextjs}
                    github="https://github.com/GautamPB/discord-clone"
                />
                <ProjectCard
                    image={whatsapp}
                    link="https://whatsapp-clone-next-wine.vercel.app/"
                    title="WhatsApp Clone"
                    description="Built using NextJS, TailwindCSS and Firestore"
                    flip="right"
                    languageCover={nextjs}
                    github="https://github.com/GautamPB/whatsapp-clone-next"
                />
            </div>
        </div>
    )
}

export default Projects
