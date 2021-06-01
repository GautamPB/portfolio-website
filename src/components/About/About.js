import img from '../../assets/Capture.jpg'
import Details from './Details'

const About = () => {
    return (
        <div className="about bg-gray-200 w-full p-10">
            <div className="text-4xl font-bold mb-5 border-b-2 border-[#FC0C57]">
                <h1 className="mb-5">About Me</h1>
            </div>

            <div className="w-full space-y-6 md:flex pb-6 space-x-4">
                <div className="mr-10 w-100" data-aos="fade-up">
                    <img className="rounded-2xl" src={img} alt="" />
                </div>

                <div>
                    <div data-aos="fade-up">
                        <p className="text-3xl">
                            I am an entry-level engineer who likes to code. I am
                            a self-learner and a team player who is always
                            looking to learn and create something new.
                        </p>
                    </div>

                    <br />
                    <br />

                    <div className="text-2xl" data-aos="fade-up">
                        <p>
                            I am a student of
                            <bold className="font-bold text-[#236B8E]">
                                {' '}
                                Electronics and Communication Engineering
                            </bold>
                        </p>
                        <p>
                            at{' '}
                            <bold className="font-bold text-[#236B8E]">
                                PES University
                            </bold>
                        </p>
                    </div>

                    <div className="flex flex-col lg:flex-row lg:space-x-40 mt-10 text-xl space-y-4">
                        <div className="space-y-4">
                            <Details
                                title="Born on"
                                data="24th February, 2001"
                                entry="right"
                            />

                            <Details
                                title="I am"
                                data="20 years"
                                entry="right"
                            />

                            <Details
                                title="Reach me"
                                data="pbg2402@gmail.com"
                                entry="right"
                            />
                        </div>

                        <div className="mt-4 md:mt-0 space-y-4">
                            <Details
                                title="Based in"
                                data="Bangalore, India"
                                entry="left"
                            />

                            <Details
                                title="Contact me"
                                data="+91 83173 78551"
                                entry="left"
                            />

                            <Details
                                title="Currently pursuing"
                                data="B.Tech"
                                entry="left"
                            />
                        </div>
                    </div>

                    <div data-aos="fade-up" className="mt-8">
                        <h1 className="text-xl font-semibold text-[#1773EA]">
                            My Hobbies
                        </h1>

                        <div className="space-y-2 text-lg text-gray-500">
                            <p>&gt; Coding</p>
                            <p>&gt; Watching movies</p>
                            <p>&gt; Listening to music</p>
                            <p>&gt; Gaming</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
