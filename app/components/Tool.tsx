interface Props {
    tool: string
}

const Tool = ({ tool }: Props) => {
    return (
        <div className="font-semibold bg-gray-400 border-white px-4 py-2 rounded-md">
            {tool}
        </div>
    )
}

export default Tool
