import ProjectCard from './ProjectCard'
import snakegame from '../../assets/snake-game.png'
import amazon from '../../assets/amazon-clone.png'
import google from '../../assets/google-clone.png'
import hulu from '../../assets/hulu-clone.png'
import sparkbooks from '../../assets/sparkbooks.png'
import stories from '../../assets/stories-made-simple.png'
import hangman from '../../assets/hangman.jpg'
import whatsapp from '../../assets/whatsapp-clone.png'

const Projects = () => {
    return (
        <div className="projects bg-blue-50 w-full p-10">
            <div className="text-4xl font-bold mb-5 border-b-2 border-[#FC0C57]">
                <h1 className="mb-5">My Projects</h1>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:flex 2xl:flex-wrap justify-center">
                <ProjectCard
                    image={snakegame}
                    link="https://github.com/GautamPB/Snake-Game"
                    title="Snake Game"
                    description="Built using PyGame"
                    flip="left"
                />

                <ProjectCard
                    image={amazon}
                    link="https://amazon-clone-next-theta.vercel.app/"
                    title="Amazon Clone"
                    description="Built using NextJS, Firebase, Redux and TailwindCSS"
                    flip="right"
                />
                <ProjectCard
                    image={google}
                    link="https://google-clone-sepia.vercel.app/"
                    title="Google Clone"
                    description="Built using NextJS, TailwindCSS and Google API"
                    flip="left"
                />
                <ProjectCard
                    image={hulu}
                    link="https://hulu-clone-ten.vercel.app/"
                    title="Hulu Clone"
                    description="Built using NextJS, TailwindCSS and TMDB API"
                    flip="right"
                />

                <ProjectCard
                    image={sparkbooks}
                    title="SparkBooks Online Store"
                    ongoing="true"
                    description="A startup company, built using ReactJS, Firebase and TailwindCSS"
                    flip="left"
                />

                <ProjectCard
                    image={stories}
                    link="https://stories-made-simple.web.app/"
                    title="Stories Made Simple"
                    description="App where people can upload their stories, poems or blogs"
                    flip="right"
                />

                <ProjectCard
                    image={hangman}
                    link="https://github.com/GautamPB/Hangman"
                    title="Hangman"
                    description="Built using C++"
                    flip="left"
                />
                <ProjectCard
                    image={whatsapp}
                    link="https://whatsapp-clone-next-wine.vercel.app/"
                    title="WhatsApp Clone"
                    description="Built using NextJS, TailwindCSS and Firestore"
                    flip="right"
                />
            </div>
        </div>
    )
}

export default Projects
