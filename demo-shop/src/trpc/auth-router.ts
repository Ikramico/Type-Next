import { getPayloadClient } from "../get-payload";
import { AuthCredentialsValidator } from "../lib/validators/account-credentials";
import { publicProcedure, router } from "./trpc";


export const authRouter = router({
    createPayloadUser: publicProcedure.input(AuthCredentialsValidator).mutation(async ({input}) =>{
        const {email, password} = input;
        const payload = await getPayloadClient();

        //check user
        const {docs} = await payload.find({
            collection: 'users',
            where:{
                email:{
                    equals: email,
                }
            }
        })
    })
})