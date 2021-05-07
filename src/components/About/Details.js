const Details = ({ title, data, entry }) => {
    return (
        <div data-aos={`fade-${entry}`} className="flex">
            <h1 className="text-[#1773EA] font-bold">{title}:&nbsp;</h1>
            <p className="text-gray-500">{data}</p>
        </div>
    )
}

export default Details
