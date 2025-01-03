import SocialComponent from './SocialComponent'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import InstagramIcon from '@mui/icons-material/Instagram'

const SocialBanner = ({ color }: { color: string }) => {
    return (
        <div className="flex space-x-8">
            <SocialComponent
                Icon={LinkedInIcon}
                link="https://www.linkedin.com/in/gautam-b-959394200/"
                color={color}
            />
            <SocialComponent
                Icon={GitHubIcon}
                link="https://github.com/GautamPB"
                color={color}
            />
            <SocialComponent
                Icon={InstagramIcon}
                link="https://www.instagram.com/_.gautampb._/"
                color={color}
            />
        </div>
    )
}

export default SocialBanner
