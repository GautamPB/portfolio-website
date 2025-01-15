import SocialComponent from './SocialComponent'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import InstagramIcon from '@mui/icons-material/Instagram'

const SocialBanner = () => {
    return (
        <div className="flex space-x-8">
            <SocialComponent
                Icon={LinkedInIcon}
                link="https://www.linkedin.com/in/gautam-b-959394200/"
            />
            <SocialComponent
                Icon={GitHubIcon}
                link="https://github.com/GautamPB"
            />
            <SocialComponent
                Icon={InstagramIcon}
                link="https://www.instagram.com/_.gautampb._/"
            />
        </div>
    )
}

export default SocialBanner
