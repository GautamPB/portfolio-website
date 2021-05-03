const NavBarItem = ({ title, Icon }) => {
    return (
        <div className="flex items-center space-x-2 group cursor-pointer">
            <Icon className="h-8 group-hover:animate-bounce text-[#00ffff]" />
            <h1 className="hidden md:inline-block text-[#00ffff]">{title}</h1>
        </div>
    )
}

export default NavBarItem
