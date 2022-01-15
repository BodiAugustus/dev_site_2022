import { createContext, useState, useContext } from "react";


export const NavbarContext = createContext()

export default function NavbarProvider({children}){
    const [toggleMenu, setToggleMenu] = useState(false)
    
    return (
        <NavbarContext.Provider value={{toggleMenu, setToggleMenu}}>{children}</NavbarContext.Provider>
    )
}


export const useNavbarContext = () => {
    return useContext(NavbarContext)
}
