import { SvgIconComponent } from '@mui/icons-material'
interface Props {
    Icon: SvgIconComponent
    link: string
}

const SocialComponent = ({ Icon, link }: Props) => {
    return (
        <a
            href={link}
            target="_blank"
            className="p-2 border-2 hover:animate-bounce rounded-full shadow-lg cursor-pointer group"
        >
            <Icon fontSize="large" className="transition duration-200" />
        </a>
    )
}

export default SocialComponent
