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

                        <span className="mt-6">
                            I am a naturally curious and committed person who
                            solves his problems, one at a time.
                        </span>
                    </p>
                </div>
            </div>

            <div className="items-center w-[90%] space-y-5 lg:space-y-0 lg:justify-around bottom-[-10rem] lg:bottom-[-3rem] absolute flex flex-col lg:flex-row lg:space-x-5">
                {/* about card birthday, hobbies etc */}
                <div className="bg-white p-10 rounded-xl hover:border-none hover:shadow-xl transition ease-out duration-300 cursor-pointer border border-blue-500 flex flex-col items-center w-full">
                    <h1 className="font-bold text-lg lg:text-2xl">About me</h1>
                </div>

                {/* what I do card */}
                <div className="bg-white p-10 rounded-xl hover:border-none hover:shadow-xl transition ease-out duration-300 cursor-pointer border border-blue-500 flex flex-col items-center w-full">
                    <h1 className="font-bold text-lg lg:text-2xl">What I do</h1>
                </div>
            </div>
        </div>
    )
}

export default About
