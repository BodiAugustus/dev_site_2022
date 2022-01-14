

const Button = ({children,
     className = "bg-blue-600 shadow-2xl shadow-blue-500/75 border-sky-400 text-white ", ...rest
    }) => {
    return (
        <button  {...rest} key="connect" className={`disabled:opacity-50 disabled:cursor-pointer py-2 px-4 rounded-lg outline-none cursor-pointer transition-all hover:bg-blue-600, hover:scale-110 active:scale-100 list-none relative lg:left-12 xl:left-14 xs:invisible xs:hidden md:inline-block md:visible md:text-xl font-medium border-[3px] ${className}`} >{children}</button>
    )
}

export default Button 