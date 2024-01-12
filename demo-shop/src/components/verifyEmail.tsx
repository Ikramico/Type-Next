'use client'

import { XCircle } from "lucide-react"
import { trpc } from "../trpc/client"

interface VerifyEmailProps{
    token: string
}
const VerifyEmail =({token} : VerifyEmailProps) =>{
    const {data, isLoading, isError} = trpc.auth.verifyEmail.useQuery({
        token,
    })
    if(isError){
        return(
            <div className="flex flex-col items-center gap-2">
                <XCircle className=" h-8 w-8 text-red-600"/>
                <h3 className="font-semibold text-xl">There was a problem</h3>
                <p className="text-muted-foreground text-sm">
                    This token is not valid or might be expired.
                    <b>Please try again</b>
                </p>
            </div>
        )
    }
}

export default VerifyEmail;