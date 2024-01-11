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
                ): null}
            </div>
        </div>
    )
}

export default VerifyEmailPage;