import pic from '../../assets/pic.png'
import { motion } from 'framer-motion'
import Connect from '../Connect/Connect'

const Home = () => {
    return (
        <div className="home flex justify-between p-10 ml-0 bg-[#040404] h-screen">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ y: -100, opacity: 1 }}
                transition={{ duration: 1.5 }}
                className="mt-[17%] ml-10 text-[#00ffff] space-y-40"
            >
                <div className="space-y-4">
                    <h1 className="text-8xl font-bold">Hi there,</h1>
                    <p className="text-5xl font-bold">I'm Gautam</p>
                    <p className="text-2xl font-semibold">
                        A Web Developer and a Tech Enthusiast
                    </p>
                </div>

                <Connect />
            </motion.div>

            <div className="hidden md:inline-block">
                <motion.img
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5 }}
                    src={pic}
                    alt="pic"
                    className="rounded-full w-[25%] absolute right-10 mt-15"
                />
            </div>
        </div>
    )
}

export default Home
