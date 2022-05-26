import { useState } from 'react'
import db from '../../firebase'
import { DownloadIcon } from '@heroicons/react/solid'
import resume from '../../assets/Resume.pdf'
import GitHubIcon from '@material-ui/icons/GitHub'
import InstagramIcon from '@material-ui/icons/Instagram'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import TwitterIcon from '@material-ui/icons/Twitter'

const Contact = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        db.collection('messages').add({
            name: name,
            email: email,
            message: message,
        })

        setName('')
        setEmail('')
        setMessage('')
    }

    return (
        <div className="contact bg-blue-500 h-[60rem] md:h-[45rem] relative flex flex-col items-center mt-20 text-white">
            <div className="w-4/5 absolute -top-40">
                <div className="space-y-4 md:space-y-0 md:flex-row space-x-0 grid grid-cols-1 md:grid-cols-3 bg-[#001128] py-20 mt-20 rounded-lg shadow-xl p-4 text-center">
                    <h1 className="font-bold text-2xl whitespace-nowrap md:text-3xl lg:text-4xl m-auto">
                        My Resume
                    </h1>
                    <p>
                        I love working in a team. Given a problem, I will try my
                        best to find the most efficient and best solution.
                    </p>
                    <div className="flex justify-center">
                        <a
                            href={resume}
                            download="GautamPB-Resume.pdf"
                            className="flex space-x-2 bg-transparent border-2 border-white transition duration-300 group hover:bg-white cursor-pointer rounded-full items-center justify-center py-3 px-6 whitespace-nowrap"
                        >
                            <DownloadIcon className="h-7 text-white group-hover:text-black" />
                            <p className="text-white group-hover:text-black text-2xl font-bold">
                                Resume
                            </p>
                        </a>
                    </div>
                </div>

                <div className="bg-white mt-8 z-50 rounded-lg shadow-xl my-5 p-6 w-full">
                    <form
                        className="grid grid-cols-1 md:grid-cols-2 gap-3"
                        onSubmit={handleSubmit}
                    >
                        <div className="flex flex-col space-y-8">
                            <div className="space-y-2">
                                <label className="text-[#001128] font-bold text-xl">
                                    Your Name
                                </label>
                                <input
                                    className="bg-[#001128] font-bold text-lg py-6 px-3 rounded-lg text-white w-full"
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-[#001128] font-bold text-xl">
                                    Your Email
                                </label>
                                <input
                                    className="bg-[#001128] font-bold text-lg py-6 px-3 rounded-lg text-white w-full"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[#001128] font-bold text-xl">
                                Your Message
                            </label>
                            <textarea
                                className="bg-[#001128] font-bold text-lg py-6 px-3 rounded-lg text-white w-full resize-none h-[86%]"
                                type="text"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            />
                        </div>

                        <button
                            type="submit"
                            className="hidden"
                            onSubmit={handleSubmit}
                        />
                    </form>
                </div>

                <div className="p-6 w-full flex items-center justify-around space-x-4">
                    <a
                        href="https://github.com/GautamPB"
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-full shadow-xl border border-white group cursor-pointer hover:bg-white transition duration-300 ease-in-out"
                    >
                        <GitHubIcon className="text-white group-hover:text-blue-500" />
                    </a>

                    <a
                        href="https://www.instagram.com/_.gautampb._/"
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-full shadow-xl border border-white group cursor-pointer hover:bg-white transition duration-300 ease-in-out"
                    >
                        <InstagramIcon className="text-white group-hover:text-blue-500" />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/gautam-b-959394200/"
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-full shadow-xl border border-white group cursor-pointer hover:bg-white transition duration-300 ease-in-out"
                    >
                        <LinkedInIcon className="text-white group-hover:text-blue-500" />
                    </a>

                    <a
                        href="https://twitter.com/Gautam_PB/"
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-full shadow-xl border border-white  group cursor-pointer hover:bg-white transition duration-300 ease-in-out"
                    >
                        <TwitterIcon className="text-white group-hover:text-blue-500" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contact
