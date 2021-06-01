import './NavigationBar.css'
import { HomeIcon } from '@heroicons/react/solid'
import { InformationCircleIcon } from '@heroicons/react/solid'
import NavBarItem from '../NavBarItem/NavBarItem'
import { CodeIcon } from '@heroicons/react/solid'
import { DocumentReportIcon } from '@heroicons/react/solid'
import { PhoneIcon } from '@heroicons/react/solid'
import { Link } from 'react-scroll'

const NavigationBar = () => {
    return (
        <header className="flex text-white justify-between p-5 sticky top-0 bg-[#040404] z-50 text-lg">
            <div className="flex space-x-6">
                <Link
                    activeClass="active"
                    to="home"
                    duration={1000}
                    smooth={true}
                    offset={-80}
                >
                    <NavBarItem title="Home" Icon={HomeIcon} />
                </Link>

                <Link
                    activeClass="active"
                    to="about"
                    duration={1000}
                    smooth={true}
                    offset={-70}
                >
                    <NavBarItem title="About Me" Icon={InformationCircleIcon} />
                </Link>

                <Link to="projects" duration={1000} offset={-60} smooth={true}>
                    <NavBarItem title="My Projects" Icon={CodeIcon} />
                </Link>

                <Link to="resume" duration={1000} smooth={true} offset={-60}>
                    <NavBarItem title="My Resume" Icon={DocumentReportIcon} />
                </Link>
            </div>

            <div>
                <Link to="contact" duration={1000} smooth={true} offset={-60}>
                    <NavBarItem title="Contact Me" Icon={PhoneIcon} />
                </Link>
            </div>
        </header>
    )
}

export default NavigationBar
