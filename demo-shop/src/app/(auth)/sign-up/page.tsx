'use client'

import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";
import { Icons } from "@/src/components/icons"
import { Button, buttonVariants } from "@/src/components/ui/button";
import { cn } from "@/src/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod'
import { TAuthCredentialsValodator, AuthCredentialsValidator } from "@/src/lib/validators/account-credentials";
import { trpc } from "@/src/trpc/client";
import {toast} from 'sonner';



const Page = () =>{

    const {register, handleSubmit, formState:{errors}} = useForm<TAuthCredentialsValodator>({
        resolver: zodResolver(AuthCredentialsValidator),
    });

    const {mutate, isLoading} = trpc.auth.createPayloadUser.useMutation({
        
            onError: (err) =>{
                if(err.data?.code === 'CONFLICT'){
                    toast, .
                }
            },
        
    });
    

    const onSub =({email, password}: TAuthCredentialsValodator) =>{
        mutate({email, password})
    }
    return(
        <>
        <div className="container relative flex pt-20 flex-col items-center justify-center lg:space-x-6">
            <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                <div className="flex flex-col items-center space-y-2 text-center">
                    <Icons.logo className="h-20 w-20"/>
                    <h1 className="text-2xl font-bold ">
                        Create an account
                    </h1>

                    <Link className={buttonVariants({variant: 'link', className: 'gap-2'})} href='/sign-in'>
                        Already have an account? Sign-in
                        <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>

                <div className="grid gap-6">
                    <form onSubmit={handleSubmit(onSub)}>
                        <div className="grid gap-2">
                            <div className="grid gap-1 py-2">
                                <Label htmlFor="email">Email</Label>
                                <Input {...register('email')} className={cn({'focus-visible:bg-red-200 focus-visible:ring-gray-200': errors.email})} placeholder="mail@host.com" />
                            </div>
                        </div>
                        <div className="grid gap-2">
                            <div className="grid gap-1 py-2">
                                <Label htmlFor="password mb-5">Password</Label>
                                <Input {...register('password')} type="password" className={cn({'focus-visible:bg-red-200 focus-visible:ring-gray-200': errors.password})} placeholder="password" />
                            </div>
                        </div>

                        <Button className={buttonVariants({variant:'link', className:'text-white px-20 mt-10 justify-center'})}>
                            Sign Up
                        </Button>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default Page;