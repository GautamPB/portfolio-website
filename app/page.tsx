import SocialBanner from './components/SocialBanner'
import Tool from './components/Tool'
import Experience from './components/Experience'
import { FileDownload } from '@mui/icons-material'
import Connect from './components/Connect'

const Home = () => {
    return (
        <div>
            {/* section 1 */}
            <div className="w-full relative h-screen max-h-[100vh]">
                <img
                    src="/assets/background.jpg"
                    alt=""
                    className="w-full h-full object-cover"
                />

                <div className="h-full w-full bg-black/70 absolute top-0 text-gray-300 flex-col space-y-10 flex items-center justify-center">
                    <div className="text-center space-y-3">
                        <h1 className="lg:text-6xl text-3xl md:text-4xl font-bold">
                            Gautam P B
                        </h1>
                        <h2 className="text-xl md:text-2xl lg:text-4xl font-semibold">
                            Frontend Developer | Tech Enthusiast
                        </h2>
                    </div>

                    <SocialBanner color="white" />
                </div>
            </div>

            {/* section 2 */}
            <div className="my-20">
                <div>
                    <h1 className="text-center font-bold text-3xl tracking-wider">
                        ABOUT ME
                    </h1>
                    <div className="border border-blue-500 w-20 mx-auto my-4" />
                </div>

                <div className="p-4 max-w-7xl text-lg mx-auto md:grid md:grid-cols-2 md:gap-20">
                    <p className="text-lg">
                        I am a highly self motivated and result driven{' '}
                        <span className="font-bold">
                            frontend web developer
                        </span>{' '}
                        with a keen interest to learn. I always have my eye on
                        new technologies and am open to experimenting with them.
                        <br />
                        <br />
                        My goal is to deliver{' '}
                        <span className="font-bold">
                            fast, responsive and seamless
                        </span>{' '}
                        user experiences in my applications. Focused on
                        delivering{' '}
                        <span className="font-bold">
                            picture perfect products
                        </span>
                        , I am always looking to improve my skills and learn new
                        technologies.
                    </p>

                    <div className="mt-12 md:mt-0">
                        <h2 className="font-bold text-xl">Tools I use</h2>

                        <div className="flex flex-wrap mt-2 gap-4">
                            <Tool tool="HTML" />
                            <Tool tool="CSS" />
                            <Tool tool="JavaScript" />
                            <Tool tool="TypeScript" />
                            <Tool tool="ReactJS" />
                            <Tool tool="NextJS" />
                            <Tool tool="TailwindCSS" />
                            <Tool tool="Framer Motion" />
                            <Tool tool="Figma" />
                            <Tool tool="React Redux" />
                            <Tool tool="Zustand" />
                            <Tool tool="Sanity I/O" />
                            <Tool tool="Firebase" />
                            <Tool tool="Git" />
                            <Tool tool="Postman" />
                            <Tool tool="UiPath" />
                            <Tool tool="Node.js" />
                            <Tool tool="MaterialUI" />
                            <Tool tool="Shadcn" />
                            <Tool tool="Clerk Authentication" />
                            <Tool tool="OAuth" />
                            <Tool tool="JWT" />
                        </div>
                    </div>
                </div>
            </div>

            {/* section 3 */}
            <div className="mb-20">
                <h1 className="text-center font-bold text-3xl tracking-wider">
                    EXPERIENCE
                </h1>
                <div className="border border-blue-500 w-20 mx-auto my-4" />
                <Experience />
            </div>

            {/* section 4 */}
            <div className="max-w-7xl mx-auto mb-20 p-4">
                <div className="flex-col space-y-6 lg:flex-row lg:items-center lg:space-y-0 justify-between flex items-center border border-blue-500 rounded-lg py-16 px-8">
                    <h1 className="font-bold text-blue-500 text-2xl">
                        My Resume
                    </h1>
                    <p className="text-center">
                        I love working in a team. Given a problem, I will try my
                        best to find the most efficient and best solution.
                    </p>
                    <a
                        href="/assets/Gautam Frontend Resume.pdf"
                        download="GautamPB - Resume.pdf"
                        className="flex items-center space-x-4 px-4 py-2 rounded-lg font-bold text-blue-500 border border-blue-500 hover:bg-blue-500 hover:text-white transition duration-200 cursor-pointer"
                    >
                        <h1>Resume</h1>
                        <FileDownload />
                    </a>
                </div>
            </div>

            {/* section 5 */}

            <div className="mb-10 max-w-7xl mx-auto px-4">
                <div>
                    <h1 className="text-center font-bold text-3xl tracking-wider">
                        CONNECT WITH ME
                    </h1>
                    <div className="border border-blue-500 w-20 mx-auto my-4" />
                </div>

                <Connect />
            </div>
        </div>
    )
}

export default Home
