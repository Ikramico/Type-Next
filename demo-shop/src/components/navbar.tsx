'use client'

import Link from "next/link"
import MaxWidthWrapper from "./maxWidthWrapper"
import { Blocks } from "lucide-react"
import { Icons } from "./icons"
import NavItems from "./navItems"
import { buttonVariants } from "./ui/button"
import Cart from "./cart"

const Navbar=()=>{

    //dummy user
    const user = null;
    return(
        <div className="bg-white sticky z-50 top-0 inset-x-0 h-16">
            <header className="relative bg-white">
                <MaxWidthWrapper>
                    <div className="border-b border-gray-200">
                        <div className="flex h-16 items-center">
                            {/**Mobile View */}
                            <Link href='/'>
                                <Icons.logo className="h-20 w-10 mx-5"/>
                            </Link>
                            <div className="hidden z-50 lg:ml-8 lg:block lg:self-stretch">
                                <NavItems/>
                            </div>
                            <div className="ml-auto flex items-center">
                                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                                    {user ? null :(
                                        <Link href='/sign-in' className={`${buttonVariants({variant: 'outline'})} bg-primary text-white`}>
                                            Sign In
                                            </Link>
                                    )}

                                    {user ? null : (
                                        <span className="h-6 w-px bg-gray-200" aria-hidden='true' />
                                    )}

                                    {user ? (
                                        <p></p>
                                    ):(
                                        <Link href='/sign-up' className={`${buttonVariants({variant: 'outline'})} text-gray-900 hover:bg-primary hover:text-white`}>
                                            Sign-Up
                                            </Link>
                                    )}
                                    {user ?  (
                                        <span className="h-6 w-px bg-gray-200" aria-hidden='true' />
                                    ) : null}
                                    
                                    {user ? null : (
                                        <div className="flex lg:ml-6">
                                            <span className="h-6 w-px bg-gray-200" aria-hidden='true' />                                        
                                        </div>

                                    )}

                                    <div className="ml-4 flow-root lg:ml-6">
                                        <Cart/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </MaxWidthWrapper>
            </header>
        </div>
    )
}

export default Navbar;