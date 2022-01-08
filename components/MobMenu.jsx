import { useContext } from "react"
import { GiArcTriomphe, GiAncientColumns } from "react-icons/gi"
import { NavItem } from "./Navbar"
import {links} from './data/data'
import { NavbarContext } from "./providers/NavContext"





const MobMenu = () => {
   const {toggleMenu, setToggleMenu} = useContext(NavbarContext)

   
    return (
<>
        {toggleMenu && 
        
        <ul className="fixed top-0 -right-0 p-3 w-[100vw] h-screen shadow-2xl md:hidden list-none flex flex-col justify-start rounded-md bg-gradient-to-t from-slate-600 to-purple-700 text-red-600" >
        <li className="text-xl w-full my-2"  >
            <GiArcTriomphe 
        fontSize={48}
        onClick={() => setToggleMenu(false)}
        />
        </li>
        {links.map((item,index) => 
             <NavItem key={item + index} title={item.name} url={item.url} classProps="my-2 text-lg text-white"/>
        )}
    </ul>
        }

        {       !toggleMenu &&                                   
                   <GiAncientColumns
                    fontSize={48} className="text-white md:hidden cursor-pointer mr-4" onClick={() => setToggleMenu(true)}/>}
</>
    )
}

export default MobMenu

