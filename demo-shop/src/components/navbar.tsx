import Link from "next/link"
import MaxWidthWrapper from "./maxWidthWrapper"
import { Blocks } from "lucide-react"
import { Icons } from "./icons"
import NavItems from "./navItems"

const Navbar=()=>{
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
                        </div>
                    </div>
                </MaxWidthWrapper>
            </header>
        </div>
    )
}

export default Navbar;