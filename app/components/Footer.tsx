import SocialBanner from './SocialBanner'

const Footer = () => {
    return (
        <div className="bg-blue-500 text-white flex-col space-y-10 flex items-center justify-center py-10 ">
            <SocialBanner />
            <div className="border w-[90%]" />

            <div className="flex flex-col items-center">
                <h1>Made by Gautam P B</h1>
                <h2>Updated 2025</h2>
            </div>
        </div>
    )
}

export default Footer
