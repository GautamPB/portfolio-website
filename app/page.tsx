import SocialBanner from './components/SocialBanner'

const Home = () => {
    return (
        <div>
            {/* section 1 */}
            <div className="w-full relative max-h-[80vh]">
                <img
                    src="/assets/background.jpg"
                    alt=""
                    className="w-full max-h-[80vh] object-cover"
                />

                <div className="h-full w-full bg-black/70 absolute top-0 text-gray-300 flex-col space-y-10 flex items-center justify-center">
                    <div className="text-center space-y-3">
                        <h1 className="lg:text-6xl text-3xl md:text-4xl font-bold">
                            Gautam P B
                        </h1>
                        <h2 className="text-xl md:text-2xl lg:text-4xl font-semibold">
                            Frontend Developer | Tech Enthusiast
                        </h2>
                    </div>

                    <SocialBanner color="none" />
                </div>
            </div>

            {/* section 2 */}
            <div className="my-20">
                <div>
                    <h1 className="text-center font-bold text-3xl tracking-wider">
                        ABOUT ME
                    </h1>
                    <div className="border border-blue-500 w-20 mx-auto my-4" />
                </div>

                <div className="p-4 max-w-7xl text-lg mx-auto">
                    <p className="text-lg">
                        I am a highly self motivated and result driven{' '}
                        <span className="font-bold">
                            frontend web developer
                        </span>{' '}
                        with a keen interest to learn. I always have my eye on
                        new technologies and am open to experimenting with them.
                        <br />
                        <br />
                        My goal is to deliver{' '}
                        <span className="font-bold">
                            fast, responsive and seamless
                        </span>{' '}
                        user experiences in my applications. Focused on
                        delivering{' '}
                        <span className="font-bold">
                            picture perfect products
                        </span>
                        , I am always looking to improve my skills and learn new
                        technologies.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Home
