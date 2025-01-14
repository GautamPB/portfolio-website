'use client'

import { useRef } from 'react'
import { useInView } from 'framer-motion'
import WorkComponent from './WorkComponent'

const Experience = () => {
    const pwcRef = useRef(null)
    const soconRef = useRef(null)
    const animallRef = useRef(null)
    const pyramidRef = useRef(null)

    const pwcIsInView = useInView(pwcRef, { once: true, amount: 0.75 })
    const soconIsInView = useInView(soconRef, { once: true, amount: 0.75 })
    const animallIsInView = useInView(animallRef, { once: true, amount: 0.75 })
    const pyramidIsInView = useInView(pyramidRef, { once: true, amount: 0.75 })

    const pwcWork = [
        'Certified UiPath Intelligent Automation and RPA Development with experience in developing automation solutions using UiPath and Microsoft Excel.',
        'Served as a Business Process Modeller for ABB, utilizing SAP Signavio to optimize workflows and streamline business process mapping.',
        'Increased automated tasks efficiency by 23%. Designed a platform to monitor and execute UiPath robots within an orchestrator.',
    ]

    const soconWork = [
        'Optimized backend API calls and refined frontend code to enhance application performance.',
        'Integrated RazorPay as a payment platform, developed new designs for food subscription models.',
        'Improved app routing for a seamless user experience by reducing page refreshes improving the overall speed by 30%.',
    ]

    const animallWork = [
        'Redesigned the user profile page using Figma to deliver accurate, visually appealing designs increasing app usage by 10%.',
        'Enhanced the posts UI for user uploads, ensuring full responsiveness across all screen sizes. Optimized frontend API calls',
        'Improving app speed by 25%, and leveraged Postman to query and understand backend API interactions.',
    ]

    const pyramidWork = [
        "Contributed to the development of the company's landing page frontend and worked extensively on projects like NegoYourCase during a 10-month tenure.",
        'Played a key role in implementing authentication workflows with Firebase and Redux',
        'Built a dynamic Kanban Board, and supported backend functionality leveraging Firebase technologies.',
    ]

    return (
        <div className="max-w-7xl mx-auto space-y-16 p-4">
            <WorkComponent
                company="PwC India"
                designation="Technical Consultant"
                duration="Jan 2023 - Present"
                work={pwcWork}
                ref={pwcRef}
                isInView={pwcIsInView}
            />

            <WorkComponent
                company="Socon Menu Cart"
                designation="Frontend Web Developer (Paid Internship)"
                duration="June 2022 - Aug 2022"
                work={soconWork}
                ref={soconRef}
                isInView={soconIsInView}
            />

            <WorkComponent
                company="Animall Technologies"
                designation="Frontend Web Developer (Paid Internship)"
                duration="Feb 2022 - May 2022"
                work={animallWork}
                ref={animallRef}
                isInView={animallIsInView}
            />

            <WorkComponent
                company="Pyramid Developers"
                designation="Student Developer (Paid Internship)"
                duration="Apr 2021 - Apr 2022"
                work={pyramidWork}
                ref={pyramidRef}
                isInView={pyramidIsInView}
            />
        </div>
    )
}

export default Experience
