const Education = ({ university, city, education, duration, description }) => {
    return (
        <div className="space-y-2" data-aos="fade-up">
            <div className="flex space-x-2 items-baseline">
                <h1 className="text-2xl font-bold">{university},</h1>
                <p className="text-xl font-semibold">{city}</p>
            </div>

            <div className="flex space-x-2 items-baseline">
                <p className="text-lg font-medium">{education}</p>
                <p className="text-gray-500">{duration}</p>
            </div>
            <p>{description}</p>
        </div>
    )
}

export default Education
