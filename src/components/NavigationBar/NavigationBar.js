import { HomeIcon } from '@heroicons/react/solid'
import { InformationCircleIcon } from '@heroicons/react/solid'
import NavBarItem from '../NavBarItem/NavBarItem'
import { CodeIcon } from '@heroicons/react/solid'
import { DocumentReportIcon } from '@heroicons/react/solid'
import { PhoneIcon } from '@heroicons/react/solid'

const NavigationBar = () => {
    return (
        <header className="flex text-white justify-between p-5 sticky top-0 bg-[#040404] z-50 text-lg">
            <div className="flex space-x-6">
                <NavBarItem title="Home" Icon={HomeIcon} />
                <NavBarItem title="About Me" Icon={InformationCircleIcon} />
                <NavBarItem title="My Projects" Icon={CodeIcon} />
                <NavBarItem title="My Resume" Icon={DocumentReportIcon} />
            </div>

            <div>
                <NavBarItem title="Contact Me" Icon={PhoneIcon} />
            </div>
        </header>
    )
}

export default NavigationBar
