interface PageProps{
    searchParams:{
        [key: string]: string |string[] |undefined;
    }
}

const VerifyEmailPage =({searchParams}: PageProps) =>{
    const token = searchParams.token;
    const toEmail = searchParams.to;
    return (
        <div className="container relative flex pt-20 flex-col items-center justify-center lg:px-0">
            <div className="mx-auto fulex w-full flex-col justify-center sm:w-[350px]">
                {token && typeof token === 'string'? (
                    <div className="grid gap-6"></div>
                ): (
                    <div className="flex h-full flex-col items-center justify-center space-y-20">
                        <h3 className="font-semibold text-2xl">Check your mail</h3>

                        {
                            toEmail ? (<p className="text-muted-foreground text-center">
                                We&apos;ve sent a verification mail to <span className="text-semibold">{toEmail}</span>.
                            </p>):(
                                <p className="text-muted-foreground text-center">
                                We&apos;ve sent a verification mail to your email.
                            </p>
                            )
                        }
                    </div>
                )}
            </div>
        </div>
    )
}

export default VerifyEmailPage;