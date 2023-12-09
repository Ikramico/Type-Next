"use client"

import { useState } from "react"
import { categories } from "../config"
import NavItem from "./navItem"

const NavItems =()=>{
    const[activeIndex, setActiveIndex] = useState<null | number>(null)
    const isAnyOpen = activeIndex !== null;

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
                <NavItem category={category} handleOpen={handleOpen} isOpen={isOpen} key={category.value} isAnyOpen={isAnyOpen} />
            )
        })}
    </div>
}

export default NavItems;