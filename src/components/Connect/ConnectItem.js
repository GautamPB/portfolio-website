import './ConnectItem.css'

const ConnectItem = ({ Icon, profile, hex }) => {
    return (
        <a
            href={profile}
            target="_blank"
            rel="noreferrer"
            className="connectItem"
        >
            <Icon className="text-[hex] cursor-pointer" />
        </a>
    )
}

export default ConnectItem
