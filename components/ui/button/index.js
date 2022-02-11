

const ButtonNav = ({
    children,
      className,
      variant = "blue",
      hoverable = true,
      ...rest
    }) => {

      const variants = {
        blue: `bg-blue-600 shadow-2xl shadow-blue-500/75 border-sky-400 text-white ${hoverable && "hover:bg-blue-600"}`,
        red: "bg-red-600 shadow-2xl shadow-red-500/75 border-pink-400 text-white",

      }
  
    return (
        <button
          
          {...rest} // contains the onClick={}
          className={`disabled:opacity-70 disabled:cursor-not-allowed py-2 px-4 rounded-lg outline-none cursor-pointer transition-all hover:scale-110 active:scale-100 list-none font-medium border-[3px] disabled:hover:scale-100 relative  
          xxs:hidden
          xs:invisible  
          md:inline-block md:visible md:text-xl md:px-2
          lg:left-12 
          xl:left-14   ${className} ${variants[variant]}`} >

          {children}

          </button>
    )
}

export const ButtonHero = ({
    children,
    className,
    variant = "blue",
    hoverable = true,
      ...rest
    }) => {

      const variants = {
        blue: `bg-blue-600 shadow-2xl shadow-blue-500/75 border-sky-400 text-white ${hoverable && "hover:bg-blue-600"}`,
        red: "bg-red-600 shadow-2xl shadow-red-500/75 border-pink-400 text-white ",

      }

  return (
      <button
        
         {...rest} // contains the onClick={}        
        className={`py-2 w-[40%]  sm:mx-auto mt-6 -mb-5
                    rounded-lg  outline-none cursor-pointer transition-all hover:bg-blue-600, hover:scale-110 active:scale-100 list-none  md:hidden md:invisible  font-medium tracking-wider border-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 ${className} ${variants[variant]}`} >

        {children}

        </button>
  )
}

export const ButtonSend = ({
    children,
    className = "bg-blue-600 shadow-md shadow-blue-500/75 border-sky-400 text-white",
    type, 
    hoverable = true,
    ...rest

    }) => {

  return (
      <button
         {...rest} // contains the onClick={}        
        className={`w-[39%] bg-blue-600 shadow-md shadow-blue-500/75 mt-4 border-[2px] p-2 rounded-full cursor-pointer font-russon transition-all hover:scale-110 active:scale-100 tracking-wide 
        xs:pb-[8px] 
        sm:w-[40%] sm:px-3 sm:pb-[9px]
        md:w-[35%] md:pb-[11px] md:text-2xl md:py-2 md:mt-8 
        lg:w-[40%] lg:pb-3"
        xl:w-[40%]
        2xl:w-[50%]" ${className}`}>

        {children}

        </button>
  )
}

export default ButtonNav 