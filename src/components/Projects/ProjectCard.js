import './ProjectCard.css'
// import { ExternalLinkIcon } from '@heroicons/react/solid'
// import { Button } from '@material-ui/core'

const ProjectCard = ({ image, link, title, description }) => {
    return (
        <div className="w-full h-full rounded-lg group relative transition-all duration-300">
            <div className="w-full h-full group-hover:invisible transition duration-300">
                <img src={image} alt="" className="h-full  w-full rounded-lg" />
            </div>

            <div className="w-full h-full bg-black rounded-lg invisible absolute group-hover:visible group-hover:top-0 group-hover:flex group-hover:z-50 transition duration-300"></div>
        </div>
    )
}

export default ProjectCard
