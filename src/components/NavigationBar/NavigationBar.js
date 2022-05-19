import { Link } from 'react-scroll'

const NavigationBar = () => {
    return (
        <header className="flex text-black w-full bg-white shadow-lg justify-between p-5 bg-transparent">
            <div className="text-blue-500 ml-auto py-2 px-5 rounded-full cursor-pointer border border-blue-500 mr-5 hover:bg-blue-500 hover:text-white transition ease-in-out duration-300">
                <Link to="contact" duration={1000} smooth={true} offset={-60}>
                    <p>Let's connect</p>
                </Link>
            </div>
        </header>
    )
}

export default NavigationBar
