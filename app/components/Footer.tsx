import SocialComponent from './SocialComponent'

const Footer = () => {
    return (
        <div className="bg-green-500 text-white flex-col space-y-6 flex items-center justify-center py-10 ">
            <h1 className="font-bold text-2xl">Gautam P B</h1>
            <SocialComponent />
            <div className="border w-[90%]" />
            <h1>Made by Gautam P B</h1>
        </div>
    )
}

export default Footer
