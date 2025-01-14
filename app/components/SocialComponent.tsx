import { SvgIconComponent } from '@mui/icons-material'
interface Props {
    Icon: SvgIconComponent
    link: string
    color: string
}

const SocialComponent = ({ Icon, link, color }: Props) => {
    return (
        <a
            href={link}
            target="_blank"
            className="p-2 border-2 rounded-full shad1ow-lg cursor-pointer group hover:bg-white transition duration-200"
        >
            <Icon
                fontSize="large"
                className={`group-hover:${
                    color === 'white' ? 'text-white' : 'text-blue-500'
                } transition duration-200`}
            />
        </a>
    )
}

export default SocialComponent
