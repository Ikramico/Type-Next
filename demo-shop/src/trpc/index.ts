import { publicProcedure, router } from "./trpc";


export const appRouter = router({
    anyApiRoute: publicProcedure.query(()=>{
        return 'hi there'
    })
})

export type AppRouter = typeof appRouter;