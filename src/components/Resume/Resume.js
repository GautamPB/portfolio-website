import resume from '../../assets/Resume.pdf'
import { DownloadIcon } from '@heroicons/react/outline'
import Education from './Education'

const Resume = () => {
    return (
        <div className="resume w-full p-10 bg-white">
            <div className="text-4xl font-bold mb-5 border-b-2 border-[#FC0C57]">
                <h1 className="mb-5">My Resume</h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 space-y-6 lg:space-y-0 items-center">
                <div className="items-center justify-center ml-auto mr-auto">
                    <a
                        href={resume}
                        download="Resume"
                        className="flex space-x-2 bg-[#040404] cursor-pointer p-3 rounded-lg items-center"
                    >
                        <DownloadIcon className="h-7 text-[#00ffff]" />
                        <p className="text-[#00ffff] text-2xl font-bold">
                            Download Resume
                        </p>
                    </a>
                </div>

                <div>
                    <h1 className="text-blue-800 font-bold text-2xl mb-5">
                        Education
                    </h1>

                    <div className="space-y-6">
                        <Education
                            university="Vidya Niketan School"
                            city="Bangalore"
                            education="ICSE 10th Grade Boards"
                            duration="July 2007 - July 2017"
                            description="Completed 10th grade boards at VNS with a final result of 90%. 
                            Scored 98% in Computer Science and 90% in Mathematics."
                        />

                        <Education
                            university="CMR NPS"
                            city="Bangalore"
                            education="CBSE 12th Grade Boards"
                            duration="June 2017 - June 2019"
                            description="Completed 12th grade boards with a final result 83%.
                            Scored 90% in Mathematics and 81% in Computer
                            Science."
                        />

                        <Education
                            university="PES University"
                            city="Bangalore"
                            education="B.Tech"
                            duration="August 2019 - August 2023"
                            description="Currently pursuing a B.Tech degree while studying
                            Electronics and Communication Engineering."
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <h1
                        className="text-blue-800 font-bold text-2xl mb-5"
                        data-aos="fade-right"
                    >
                        Extracurriculars
                    </h1>

                    <div className="space-y-2" data-aos="fade-right">
                        <h1>
                            &gt; Founded a YouTube channel, Incodenito, where I
                            upload coding tutorials
                        </h1>
                        <a
                            href="https://www.youtube.com/channel/UCVY2aMk5oxEosLOYMrK0MTA"
                            target="_blank"
                            rel="noreferrer"
                            className="text-blue-500 underline"
                        >
                            Incodenito
                        </a>

                        <h1>
                            &gt; Participated in a Smart India Hackathon at
                            college.
                        </h1>

                        <h1>
                            &gt; Participated in a SpaceJam hackathon at college
                        </h1>

                        <h1>
                            &gt; Participated in Hackezee, a hardware based
                            hackathon at college.
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume
