import { RefObject } from 'react'

interface Props {
    company: string
    designation: string
    duration: string
    work: string[]
    ref: RefObject<null>
    isInView: boolean
}

const WorkComponent = ({
    company,
    designation,
    duration,
    work,
    ref,
    isInView,
}: Props) => {
    return (
        <div
            className={`border-l border-black px-2 relative opacity-0 ${
                isInView && 'opacity-100 transform duration-1000'
            }`}
            ref={ref}
        >
            <h1 className="absolute -top-5 -left-2">〇</h1>
            <div className="flex items-start flex-col font-semibold text-lg md:text-xl md:flex-row md:font-bold justify-between">
                <div>
                    <h1 className="font-bold">{company}</h1>
                    <h2 className="font-semibold text-lg">{designation}</h2>
                </div>
                <h1>{duration}</h1>
            </div>

            <ul className="mt-2 list-disc mx-8 text-lg">
                {work.map((w) => (
                    <li key={w}>{w}</li>
                ))}
            </ul>
        </div>
    )
}

export default WorkComponent
