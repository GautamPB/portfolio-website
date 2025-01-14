'use client'
import { useEffect, useRef } from 'react'
import { useInView } from 'framer-motion'

const Experience = () => {
    const pwcRef = useRef(null)
    const soconRef = useRef(null)
    const animallRef = useRef(null)
    const pyramidRef = useRef(null)

    const pwcIsInView = useInView(pwcRef, { once: true, amount: 0.75 })
    const soconIsInView = useInView(soconRef, { once: true, amount: 0.75 })
    const animallIsInView = useInView(animallRef, { once: true, amount: 0.75 })
    const pyramidIsInView = useInView(pyramidRef, { once: true, amount: 0.75 })

    useEffect(() => {
        console.log('pwc is in view')
    }, [pwcIsInView])

    return (
        <div className="max-w-7xl mx-auto space-y-16 p-4">
            {/* PwC India */}
            <div
                className={`border-l border-black px-2 relative opacity-0 ${
                    pwcIsInView && 'opacity-100 transform duration-1000'
                }`}
                ref={pwcRef}
            >
                <h1 className="absolute -top-5 -left-2">〇</h1>
                <div className="flex items-start flex-col font-semibold text-lg md:text-xl md:flex-row md:font-bold justify-between">
                    <div>
                        <h1 className="font-bold">PwC India</h1>
                        <h2 className="font-semibold text-lg">
                            Technical Consultant
                        </h2>
                    </div>
                    <h1>Jan 2023 - Present</h1>
                </div>

                <ul className="mt-2 list-disc mx-8 text-lg">
                    <li>
                        Certified UiPath Intelligent Automation and RPA
                        Development with experience in developing automation
                        solutions using UiPath and Microsoft Excel.{' '}
                    </li>
                    <li>
                        Served as a Business Process Modeller for ABB, utilizing
                        SAP Signavio to optimize workflows and streamline
                        business process mapping.
                    </li>
                    <li>
                        Increased automated tasks efficiency by 23%. Designed a
                        platform to monitor and execute UiPath robots within an
                        orchestrator.
                    </li>
                </ul>
            </div>

            {/* Socon Menu Cart */}
            <div
                className={`border-l border-black px-2 relative opacity-0 ${
                    soconIsInView && 'opacity-100 transform duration-200'
                }`}
                ref={soconRef}
            >
                <h1 className="absolute -top-5 -left-2">〇</h1>
                <div className="flex items-start text-lg md:text-xl flex-col md:flex-row font-semibold md:font-bold justify-between">
                    <div>
                        <h1 className="font-bold">Socon Menu Cart</h1>
                        <h2 className="font-semibold text-lg">
                            Frontend Web Developer (Paid Internship)
                        </h2>
                    </div>
                    <h1>June 2022 - Aug 2022</h1>
                </div>

                <ul className="mt-2 list-disc mx-8 text-lg">
                    <li>
                        Optimized backend API calls and refined frontend code to
                        enhance application performance.
                    </li>
                    <li>
                        Integrated RazorPay as a payment platform, developed new
                        designs for food subscription models.
                    </li>
                    <li>
                        Improved app routing for a seamless user experience by
                        reducing page refreshes improving the overall speed by
                        30%.
                    </li>
                </ul>
            </div>

            {/* Animall Technologies */}
            <div
                className={`border-l border-black px-2 relative opacity-0 ${
                    animallIsInView && 'opacity-100 transform duration-1000'
                }`}
                ref={animallRef}
            >
                <h1 className="absolute -top-5 -left-2">〇</h1>
                <div className="flex items-start flex-col md:flex-row font-semibold text-lg md:text-xl md:font-bold justify-between">
                    <div>
                        <h1 className="font-bold">Animall Technologies</h1>
                        <h2 className="font-semibold text-lg">
                            Frontend Web Developer (Paid Internship)
                        </h2>
                    </div>
                    <h1>Feb 2022 - May 2022</h1>
                </div>

                <ul className="mt-2 list-disc mx-8 text-lg">
                    <li>
                        Redesigned the user profile page using Figma to deliver
                        accurate, visually appealing designs increasing app
                        usage by 10%.
                    </li>
                    <li>
                        Enhanced the posts UI for user uploads, ensuring full
                        responsiveness across all screen sizes. Optimized
                        frontend API calls
                    </li>
                    <li>
                        Improving app speed by 25%, and leveraged Postman to
                        query and understand backend API interactions.
                    </li>
                </ul>
            </div>

            {/* Pyramid Developers */}
            <div
                className={`border-l border-black px-2 relative opacity-0 ${
                    pyramidIsInView && 'opacity-100 transform duration-1000'
                }`}
                ref={pyramidRef}
            >
                <h1 className="absolute -top-5 -left-2">〇</h1>
                <div className="flex items-start flex-col md:flex-row font-semibold text-lg md:text-xl md:font-bold justify-between">
                    <div>
                        <h1 className="font-bold">Pyramid Developers</h1>
                        <h2 className="font-semibold text-lg">
                            Student Developer (Paid Internship)
                        </h2>
                    </div>
                    <h1>Apr 2021 - Apr 2022</h1>
                </div>

                <ul className="mt-2 list-disc mx-8 text-lg">
                    <li>
                        Contributed to the development of the companys landing
                        page frontend and worked extensively on projects like
                        NegoYourCase during a 10-month tenure.
                    </li>
                    <li>
                        Played a key role in implementing authentication
                        workflows with Firebase and Redux
                    </li>
                    <li>
                        Built a dynamic Kanban Board, and supported backend
                        functionality leveraging Firebase technologies.
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Experience
