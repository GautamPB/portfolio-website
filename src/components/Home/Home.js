import Connect from '../Connect/Connect'
import Bitmoji from '../../assets/bitmoji.webp'

const Home = () => {
    return (
        <div className="main items-center pt-40 home flex flex-col text-black h-screen mx-auto text-center space-y-40">
            <div className="space-y-6 flex flex-col items-center">
                <p className="lg:text-5xl text-2xl font-bold text-blue-500">
                    <p>Web Developer, Self-Learner & Tech Enthusiast</p>
                </p>

                <div className="w-[20rem] lg:w-[30rem] flex mx-auto">
                    <p className="text-md">
                        I build simple and beautiful websites and love what I
                        do.
                    </p>
                </div>

                <img src={Bitmoji} alt="" />
            </div>

            <Connect />
        </div>
    )
}

export default Home
