import ConnectItem from './ConnectItem'
import GitHubIcon from '@material-ui/icons/GitHub'
import InstagramIcon from '@material-ui/icons/Instagram'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import TwitterIcon from '@material-ui/icons/Twitter'
import YouTubeIcon from '@material-ui/icons/YouTube'

const Connect = ({ hex, space }) => {
    return (
        <div className={`flex space-x-${space}`}>
            <ConnectItem
                Icon={GitHubIcon}
                profile="https://github.com/GautamPB"
                hex={hex}
            />

            <ConnectItem
                Icon={InstagramIcon}
                profile="https://www.instagram.com/_.gautampb._/"
                hex={hex}
            />

            <ConnectItem
                Icon={LinkedInIcon}
                profile="https://www.linkedin.com/in/gautam-b-959394200/"
                hex={hex}
            />

            <ConnectItem
                Icon={TwitterIcon}
                profile="https://twitter.com/Gautam_PB/"
                hex={hex}
            />

            <ConnectItem
                Icon={YouTubeIcon}
                profile="https://www.youtube.com/channel/UCVY2aMk5oxEosLOYMrK0MTA"
                hex={hex}
            />
        </div>
    )
}

export default Connect
