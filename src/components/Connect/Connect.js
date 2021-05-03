import ConnectItem from './ConnectItem'
import GitHubIcon from '@material-ui/icons/GitHub'
import InstagramIcon from '@material-ui/icons/Instagram'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import TwitterIcon from '@material-ui/icons/Twitter'

const Connect = () => {
    return (
        <div className="flex space-x-10">
            <ConnectItem
                Icon={GitHubIcon}
                profile="https://github.com/GautamPB"
            />

            <ConnectItem
                Icon={InstagramIcon}
                profile="https://www.instagram.com/_.gautampb._/"
            />

            <ConnectItem
                Icon={LinkedInIcon}
                profile="https://www.linkedin.com/in/gautam-b-959394200/"
            />

            <ConnectItem
                Icon={TwitterIcon}
                profile="https://twitter.com/Gautam_PB/"
            />
        </div>
    )
}

export default Connect
