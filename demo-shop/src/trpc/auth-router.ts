import { TRPCError } from "@trpc/server";
import { getPayloadClient } from "../get-payload";
import { AuthCredentialsValidator } from "../lib/validators/account-credentials";
import { publicProcedure, router } from "./trpc";
import z from "zod";
import payload from "payload";


export const authRouter = router({
    createPayloadUser: publicProcedure.input(AuthCredentialsValidator).mutation(async ({input}) =>{
        const {email, password} = input;
        const payload = await getPayloadClient();

        //check user
        const {docs: users} = await payload.find({
            collection: 'users',
            where:{
                email:{
                    equals: email,
                }
            }
        });
        if(users.length !==0){
            throw new TRPCError({code: 'CONFLICT'})
        }

            await payload.create({
                collection: 'users',
                data: {
                    email,
                    password,
                    role: 'user'
                },
            })

            return {success: true, sentToEmail: email}
        
    }),

    verifyEmail: publicProcedure.input(z.object({token: z.string()})).query(async({input})=>{
        const {token} =input
        const payload = await getPayloadClient();
        const isVerified = await payload.verifyEmail({
            collection: 'users',
            token,
        })
        if(!isVerified)
         throw new TRPCError({code: 'UNAUTHORIZED'})
        return{success: true}
    }),
})