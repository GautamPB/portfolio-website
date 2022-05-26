import {
    InformationCircleIcon,
    RefreshIcon,
    CodeIcon,
} from '@heroicons/react/outline'

const About = () => {
    return (
        <div className="about bg-blue-500 w-full flex flex-col items-center py-[15rem] relative">
            <div className="w-full text-center space-y-5 text-white">
                <h1 className="font-bold text-3xl lg:text-5xl">
                    Hey there, I'm Gautam! Nice to meet you.
                </h1>

                <div className="max-w-[30rem] mx-auto p-4 text-white">
                    <p className="text-md lg:text-xl flex items-center flex-col">
                        <span>
                            I have collaborated with multiple frontend, backend
                            and full stack developers to create beautiful
                            websites and have worked in a few startups with
                            developers who have lots of experience in this field
                            to create products for business as well as for
                            consumer use.
                        </span>
                    </p>
                </div>
            </div>

            <div className="items-center w-[90%] space-y-5 lg:space-y-0 lg:justify-around bottom-[-110rem] lg:bottom-[-30rem] absolute flex flex-col lg:flex-row lg:space-x-5">
                {/* about card birthday, hobbies etc */}
                <div className="bg-white p-10 rounded-xl  transition ease-out duration-300 border border-blue-500 flex flex-col items-center w-full h-[40rem]">
                    {/* header */}
                    <div className="flex flex-col items-center space-y-5">
                        <InformationCircleIcon className="h-10 text-blue-500" />
                        <h1 className="font-bold text-lg lg:text-2xl">
                            About me
                        </h1>
                    </div>

                    {/* content */}
                    <div className="flex flex-col items-center space-y-4">
                        <p className="mt-6 text-center">
                            I am a naturally curious and committed person who
                            solves his problems, one at a time.
                        </p>

                        <div className="flex flex-col items-center text-center space-y-2">
                            <p className="font-bold text-lg text-blue-500">
                                More about myself:
                            </p>
                            <p className=" font-bold">
                                Born on -{' '}
                                <span className="font-normal">
                                    24th February, 2001
                                </span>
                            </p>
                            <p className=" font-bold">
                                I am -{' '}
                                <span className="font-normal">
                                    21 years old
                                </span>
                            </p>
                            <p className=" font-bold">
                                Reach me -{' '}
                                <span className="font-normal">
                                    pbg2402@gmail.com
                                </span>
                            </p>
                            <p className=" font-bold">
                                Based in -{' '}
                                <span className="font-normal">
                                    Bangalore, India
                                </span>
                            </p>
                            <p className=" font-bold">
                                Currently pursuing -{' '}
                                <span className="font-normal">
                                    B-Tech at PES University
                                </span>
                            </p>
                        </div>
                    </div>
                </div>

                {/* what I do card */}
                <div className="bg-white h-[40rem] p-10 rounded-xl  transition ease-out duration-300 border border-blue-500 flex flex-col items-center w-full">
                    {/* header */}
                    <div className="flex flex-col items-center space-y-5">
                        <RefreshIcon className="h-10 text-blue-500" />
                        <h1 className="font-bold text-lg lg:text-2xl">
                            What I do
                        </h1>
                    </div>

                    {/* content */}
                    <div className="flex flex-col items-center space-y-4">
                        <p className="mt-6 text-center">
                            I love building websites and learning new things. I
                            also love working in a team
                        </p>

                        <div className="flex flex-col items-center text-center space-y-2">
                            <p className="font-bold text-lg text-blue-500">
                                Some of my hobbies:
                            </p>
                            <p>Coding</p>
                            <p>Watching Movies</p>
                            <p>Listening to music</p>
                            <p>Gymming</p>
                            <p>Gaming</p>
                        </div>
                    </div>
                </div>

                {/* languages I speak (dev stuff) */}
                <div className="bg-white h-[40rem] p-10 rounded-xl transition ease-out duration-300 border border-blue-500 flex flex-col items-center w-full">
                    {/* header */}
                    <div className="flex flex-col items-center space-y-5">
                        <CodeIcon className="h-10 text-blue-500" />
                        <h1 className="font-bold text-lg lg:text-2xl">
                            Tools I Use
                        </h1>
                    </div>

                    {/* content */}
                    <div className="flex flex-col items-center space-y-4">
                        <p className="mt-6 text-center">
                            I am a fast learner and learn by watching and
                            collaborating with others
                        </p>

                        <div className="flex flex-col items-center text-center space-y-2">
                            <p className="font-bold text-lg text-blue-500">
                                Languages I speak:
                            </p>
                            <p>HTML</p>
                            <p>CSS</p>
                            <p>JavaScript</p>
                            <p>ReactJS</p>
                            <p>NextJS</p>
                            <p>TailwindCSS</p>
                            <p>Figma</p>
                            <p>Sanity.io</p>
                            <p>Git</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
