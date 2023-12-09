"use client"

import { useState } from "react"
import { categories } from "../config"
import NavItem from "./navItem"

const NavItems =()=>{
    const[activeIndex, setActiveIndex] = useState<null | number>(null)

    return <div className="flex gap-4 full">
        {categories.map((category, i)=>{

            const handleOpen =() =>{
                if(activeIndex ===i ){
                    setActiveIndex (null)
                }
                else{ 
                    setActiveIndex(i);
                }
            }
            const isOpen =i === activeIndex;

            return(
                <NavItem/>
            )
        })}
    </div>
}

export default NavItems;