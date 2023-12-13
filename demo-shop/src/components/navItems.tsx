"Use client"

import { useEffect, useRef, useState } from "react"
import { categories } from "../config"
import NavItem from "./navItem"
import { useOnClickOutside } from "../hooks/outClick"

const NavItems =()=>{
    const[activeIndex, setActiveIndex] = useState<null | number>(null)
    const isAnyOpen = activeIndex !== null;

    const navRef = useRef<HTMLDivElement | null>(null);

    useEffect(()=>{
        const handler =(e: KeyboardEvent)=>{
            if(e.key === 'Escape'){
                setActiveIndex(null)
            }
        }
        document.addEventListener('keydown', handler);

        return()=>{
            document.removeEventListener('keydown', handler);
        }
    },[])

    useOnClickOutside(navRef, ()=>{
        setActiveIndex(null)
    });
    return <div className="flex gap-4 full" ref={navRef}>
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