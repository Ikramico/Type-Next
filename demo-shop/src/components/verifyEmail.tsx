'use client'

import { trpc } from "../trpc/client"

const VerifyEmail =() =>{
    const {} = trpc.auth.verifyEmail
}

export default VerifyEmail;