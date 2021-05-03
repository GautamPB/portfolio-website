import './ConnectItem.css'

const ConnectItem = ({ Icon, profile }) => {
    return (
        <a
            href={profile}
            target="_blank"
            rel="noreferrer"
            className="connectItem"
        >
            <Icon className="text-[#00ffff] cursor-pointer" />
        </a>
    )
}

export default ConnectItem
