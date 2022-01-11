import { createContext,  useState } from "react";

export const HeroContext = createContext()

export default function HeroProvider ({children}){
    const [readMore, setReadMore] = useState(false)
    return(
        <HeroContext.Provider value={{readMore, setReadMore}}>{children}</HeroContext.Provider>
    )
}

