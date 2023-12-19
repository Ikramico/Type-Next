import z from "zod"


export const AuthCredentialsValidator = z.object({
    email: z.string().email(),
    password: z.string().min(8, {message: 'Minimum 8 chararacters are required'})
})

export type TAuthCredentialsValodator = z.infer<typeof AuthCredentialsValidator>
