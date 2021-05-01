const NavBarItem = ({ title, Icon }) => {
    return (
        <div className="flex items-center space-x-2 group cursor-pointer">
            <Icon className="h-8 group-hover:animate-bounce" />
            <h1 className="hidden md:inline-block">{title}</h1>
        </div>
    )
}

export default NavBarItem
