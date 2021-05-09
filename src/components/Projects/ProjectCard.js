import { ExternalLinkIcon } from '@heroicons/react/solid'
import { Button } from '@material-ui/core'

const ProjectCard = ({ image, link, title, description, flip, ongoing }) => {
    return (
        <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="flex flex-col group hover:bg-[#B5FFFD] transition duration-500 ease-in-out mr-5 items-center p-6 rounded-2xl space-y-3"
            data-aos={`flip-${flip}`}
        >
            <div className="transition duration-500 ease-in transform hover:scale-110 mb-4">
                <img
                    src={image}
                    alt=""
                    className="w-80 group-hover:rounded-xl transition duration-500 ease-in-out transform"
                />
            </div>

            <h3 className="font-bold">{title}</h3>

            <div className="flex flex-col opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out items-center space-y-2">
                <p>{description}</p>
                {link ? (
                    <a target="_blank" rel="noreferrer" href={link}>
                        <div className="flex items-center bg-[#040404] rounded-lg">
                            <Button className="p-2">
                                <ExternalLinkIcon className="h-6 text-[#00ffff]" />
                                <p className="text-[#00ffff] font-semibold ml-2">
                                    View Project
                                </p>
                            </Button>
                        </div>
                    </a>
                ) : (
                    <p className="bg-[#040404] text-[#00ffff] font-semibold p-2 rounded-lg">
                        In Progress
                    </p>
                )}
            </div>
        </a>
    )
}

export default ProjectCard
