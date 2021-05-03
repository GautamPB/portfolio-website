import { motion } from 'framer-motion'

const About = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="pl-10 pt-10 pb-20 bg-gray-200 w-full"
        >
            <div className="w-5/6 space-y-6">
                <div className="text-4xl font-bold mb-5 border-b-2 border-[#FC0C57]">
                    <h1 className="mb-5">About Me</h1>
                </div>

                <div>
                    <p className="text-3xl">
                        I am an entry-level engineer who likes to code. I am a
                        self-learner and a team player who is always looking to
                        learn and create something new.
                    </p>
                </div>

                <div className="text-2xl">
                    <p>
                        I study
                        <bold className="font-bold text-[#236B8E]">
                            {' '}
                            Electronics and Communication Engineering
                        </bold>
                    </p>
                    <p>
                        at{' '}
                        <bold className="font-bold text-[#236B8E]">
                            PES University
                        </bold>
                    </p>
                </div>
            </div>
        </motion.div>
    )
}

export default About
