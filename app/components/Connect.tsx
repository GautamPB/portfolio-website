'use client'

import { useEffect, useState } from 'react'
import { db } from '@/firebase'
import { collection, addDoc } from '@firebase/firestore'
import Emailvalidator from 'email-validator'

const Connect = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [disabled, setDisabled] = useState(true)
    const [isValid, setIsValid] = useState<boolean>()
    const [submitted, setSubmitted] = useState(false)

    useEffect(() => {
        if (name && email && message) {
            setDisabled(() => {
                return false
            })
        } else {
            setDisabled(() => {
                return true
            })
        }
    }, [name, email, message])

    const handleFormSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault()

        setIsValid(() => {
            return Emailvalidator.validate(email)
        })

        if (isValid) {
            const data = {
                name,
                email,
                message,
            }

            await addDoc(collection(db, 'messages'), data)
            setSubmitted(true)
        } else {
            console.log('Email is not valid')
        }
    }

    if (!submitted) {
        return (
            <div className="flex items-center flex-col py-6">
                <p className="text-lg">
                    Interested in working together? Drop a message and
                    let&apos;s chat!
                </p>

                <div className="mt-6 w-full flex-col flex items-center">
                    {isValid === false && (
                        <h1 className="text-red-500">Email is invalid</h1>
                    )}
                    <form className="flex w-full flex-col">
                        <div className="flex w-full md:space-x-10 space-y-6 md:space-y-0 flex-col md:flex-row space-x-0">
                            <div className="w-full space-y-6">
                                <div className="flex flex-col w-full space-y-2">
                                    <label className="text-lg font-semibold">
                                        Your name
                                    </label>
                                    <input
                                        type="text"
                                        value={name}
                                        onChange={(e) =>
                                            setName(e.target.value)
                                        }
                                        className="border outline-none border-blue-500 rounded-lg px-4 py-2"
                                    />
                                </div>

                                <div className="w-full flex flex-col space-y-2">
                                    <label className="text-lg font-semibold">
                                        Your email
                                    </label>
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                        className="border outline-none border-blue-500 rounded-lg px-4 py-2"
                                    />
                                </div>
                            </div>

                            <div className="w-full flex flex-col space-y-2">
                                <label className="text-lg font-semibold">
                                    Your message
                                </label>
                                <textarea
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    className="resize-none outline-none p-2 w-full h-full border border-blue-500 rounded-lg"
                                />
                            </div>
                        </div>

                        <div className="mx-auto">
                            <button
                                type="submit"
                                onClick={handleFormSubmit}
                                className={`${
                                    disabled
                                        ? 'cursor-not-allowed text-gray-400 border-gray-400'
                                        : 'text-blue-500 border-blue-500 hover:bg-blue-500 hover:text-white'
                                } font-semibold border rounded-xl mt-8 px-8 py-2 transition duration-300`}
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
    return (
        <div className="border border-green-500 rounded-lg">
            <h1 className="font-bold text-2xl text-green-500 text-center py-10">
                Your message was submitted successfully
            </h1>
        </div>
    )
}

export default Connect
