import './ProjectCard.css'
import { ExternalLinkIcon } from '@heroicons/react/solid'
import { Button } from '@material-ui/core'
import GitHubIcon from '@material-ui/icons/GitHub'

const ProjectCard = ({
    image,
    link,
    title,
    description,
    flip,
    ongoing,
    languageCover,
    github,
}) => {
    return (
        <div
            className="project flex flex-col group hover:bg-[#B5FFFD] transition duration-500 ease-in-out mr-5 items-center p-6 rounded-2xl space-y-3 cursor-pointer"
            data-aos={`flip-${flip}`}
        >
            <div className="project__picture mb-4 transition duration-500 ease-in transform hover:scale-110">
                <img
                    src={image}
                    alt=""
                    className="project__coverPicture w-80 group-hover:rounded-xl transition duration-500 ease-in-out transform"
                />

                <img
                    src={languageCover}
                    alt=""
                    className="project__languagePicture w-80 group-hover:rounded-xl transition duration-500 ease-in-out transform"
                />
            </div>

            <h3 className="font-bold">{title}</h3>

            <div className="flex flex-col opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out items-center space-y-2">
                <p>{description}</p>

                <a target="_blank" rel="noreferrer" href={link}>
                    <div className="flex items-center bg-[#040404] rounded-lg">
                        <Button className="p-2">
                            <ExternalLinkIcon className="h-6 text-white" />
                            <p className="text-white font-semibold ml-2">
                                View Project
                            </p>
                        </Button>
                    </div>
                </a>

                {github ? (
                    <a target="_blank" rel="noreferrer" href={github}>
                        <div className="flex items-center bg-[#040404] rounded-lg">
                            <Button className="p-2">
                                <GitHubIcon className="h-6 text-white" />
                                <p className="text-white font-semibold ml-2">
                                    View Repository
                                </p>
                            </Button>
                        </div>
                    </a>
                ) : (
                    ''
                )}
            </div>
        </div>
    )
}

export default ProjectCard
