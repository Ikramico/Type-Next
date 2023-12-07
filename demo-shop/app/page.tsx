import MaxWidthWrapper from "@/components/maxWidthWrapper"
import { Button, buttonVariants } from "@/components/ui/button"
import Link from "next/link"
import React from "react"


export default function Home() {
  

  return (
    <>
    <MaxWidthWrapper>
      <div className="py-20 mx-auto text-center flex flex-col max-w-3xl items-center">
        <h1 className="text-4xl font-bold tracking-tight text-grey-900 sm:text-6xl">
          Your marketplace for High Quality {' '}
          <span className="text-blue-600">
            digital assets
          </span>.
        </h1>
        <p className="mt-6 text-lg max-w-prose text-muted-foreground">Welcome to Digital Platform. Every
        asset on our platform is verified by our team to ensure
        our highest quality standards.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Link href='/products' className={buttonVariants({ variant: "outline" })}>
            Browse Trending
          </Link>
          <Button variant='ghost'>Our Quality Promise &rarr;</Button>
        </div>
      </div>
    </MaxWidthWrapper>
    {/**To do list for products*/}
    <section className="border-t border-gray-200 bg-gray-50">
      <MaxWidthWrapper className="py-20">
        <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-8"></div>
      </MaxWidthWrapper>
    </section>
    </>
  )
}
