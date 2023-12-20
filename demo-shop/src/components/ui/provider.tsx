"use client"

import { trpc } from '@/src/trpc/client';
import {QueryClient} from '@tanstack/react-query'
import { httpBatchLink } from '@trpc/client';
import { useState } from "react";

const Providers = () =>{
    const [queryClient] = useState(() => new QueryClient());
    const [trpcClient] = useState(()=> trpc.createClient({
        links: [
            httpBatchLink({
                url: `${process.env.NEXT_PUBLIC_SERVER_URL}/api/trpc`,
                fetch(url, options){
                    return fetch(url, {
                    ...options,
                    credentials: 'include',
                })
                },
                
            }),
        ]
    }))
}
export default Providers;