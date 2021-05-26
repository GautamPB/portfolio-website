// bg-[#040404]
import './Home.css'
import Connect from '../Connect/Connect'
import Typewriter from 'typewriter-effect'

const Home = () => {
    return (
        <div className="main items-center pt-40 home flex flex-col text-white h-screen mx-auto text-center space-y-40">
            <div className="space-y-4">
                {/* <h1 className="text-8xl font-bold">Hi there,</h1> */}
                <p className="text-8xl font-bold">I'm Gautam,</p>
                {/* <p className="text-2xl font-semibold">
                    A Web Developer, Self-Learner and a Tech Enthusiast
                </p> */}
                <p className="text-5xl font-semibold">
                    a&nbsp;
                    <Typewriter
                        options={{
                            strings: [
                                'Web Developer',
                                'Self-learner',
                                'Tech Enthusiast',
                            ],
                            loop: true,
                            autoStart: true,
                        }}
                    />
                </p>
            </div>

            <Connect hex="#00ffff" />
        </div>
    )
}

export default Home
