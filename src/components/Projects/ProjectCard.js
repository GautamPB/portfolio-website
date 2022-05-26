import './ProjectCard.css'
import { LinkIcon } from '@heroicons/react/solid'

const ProjectCard = ({ image, link, title, description }) => {
    return (
        <div className="w-full h-full rounded-lg group relative transition-all duration-300">
            <div className="w-full h-full opacity-100 group-hover:transition-opacity transition duration-300 overflow-hidden">
                <img
                    src={image}
                    alt=""
                    className="h-full w-full rounded-lg group-hover:scale-110 transform transition duration-500 ease-in-out"
                />
            </div>

            <div className="opacity-0 space-y-4 text-white flex items-center justify-center flex-col w-full h-full invisible bg-black rounded-lg absolute group-hover:top-0 group-hover:flex group-hover:z-50 group-hover:visible group-hover:opacity-95 transition duration-500">
                <h1 className="font-bold hidden md:block text-2xl">{title}</h1>

                <p className="text-center hidden xl:block px-10">
                    {description}
                </p>

                <a
                    href={link}
                    rel="noreferrer"
                    target="_blank"
                    className="text-white flex items-center space-x-3 px-5 py-2 border-2 border-blue-500 rounded-full cursor-pointer"
                >
                    <LinkIcon className="h-8" />
                    <h1 className="font-bold">Visit website</h1>
                </a>
            </div>
        </div>
    )
}

export default ProjectCard
