import { useState } from 'react'
import db from '../../firebase'
import Connect from '../Connect/Connect'
import { LocationMarkerIcon, MailIcon, PhoneIcon } from '@heroicons/react/solid'

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
        <div className="contact w-full p-10 bg-[#E9FEFF] pb-40">
            <div className="text-4xl font-bold mb-5 border-b-2 border-[#FC0C57]">
                <h1 className="mb-5">Contact Me</h1>
            </div>

            <div className="flex flex-col lg:flex-row lg:space-x-20 space-y-10 lg:space-y-0">
                <form
                    className="bg-white p-4 rounded-lg w-full lg:w-3/5"
                    data-aos="fade-up"
                >
                    <div className="flex flex-col space-y-4 mb-4">
                        <div className="flex flex-col p-3 rounded-lg w-full bg-[#eff2f5]">
                            <p className="font-semibold text-blue-500 text-xl">
                                Your Name
                            </p>

                            <input
                                type="text"
                                className="bg-transparent p-2 w-5/6 outline-none border-none rounded-lg text-blue-400 font-semibold text-xl"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>

                        <div className="flex flex-col p-3 rounded-lg w-full bg-[#eff2f5]">
                            <p className="font-semibold text-blue-500 text-xl">
                                Your Email
                            </p>

                            <input
                                type="text"
                                className="bg-transparent p-2 w-full outline-none border-none rounded-lg text-blue-400 font-semibold text-xl"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="flex flex-col p-3 rounded-lg w-full bg-[#eff2f5]">
                            <p className="font-semibold text-blue-500 text-xl">
                                Your Message
                            </p>

                            <textarea
                                type="text"
                                className="bg-transparent p-2 w-full outline-none border-none rounded-lg text-blue-400 font-semibold text-xl resize-none"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="w-full px-[30%]">
                        <button
                            type="submit"
                            // onSubmit={handleSubmit}
                            onClick={handleSubmit}
                            className="bg-[#040404] text-white p-2 rounded-lg font-bold w-full"
                        >
                            Send Message
                        </button>
                    </div>
                </form>

                <div className="flex flex-col space-y-8">
                    <Connect hex="#040404" />

                    <div className="space-y-8">
                        <div
                            className="flex items-center space-x-3"
                            data-aos="fade-right"
                        >
                            <LocationMarkerIcon className="h-8 text-blue-500" />
                            <p className="font-semibold text-xl">
                                Bangalore, Karnataka, India
                            </p>
                        </div>

                        <div
                            className="flex items-center space-x-3"
                            data-aos="fade-right"
                        >
                            <MailIcon className="h-8 text-blue-500" />
                            <p className="font-semibold text-xl">
                                pbg2402@gmail.com
                            </p>
                        </div>

                        <div
                            className="flex items-center space-x-3"
                            data-aos="fade-right"
                        >
                            <PhoneIcon className="h-8 text-blue-500" />
                            <p className="font-semibold text-xl">
                                +91 83173 78551
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
