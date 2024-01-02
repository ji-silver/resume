import Link from "next/link"
import MaxWidthWrapper from "./MaxWidthWrapper"
import { buttonVariants } from "./ui/button"
import { ArrowRight } from 'lucide-react'

const Navbar = () => {
    return (
        <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
            <MaxWidthWrapper>
                <div className="flex h-14 items-center justify-between border-b border-zinc-200">
                    <Link href='/' className="flex z-40 font-semibold"><span>로고</span></Link>

                    <div className="hidden items-center space-x-4 sm:flex">
                        <>
                            <Link href='/pricing' className={buttonVariants({ variant: 'ghost', size: 'sm' })}>멤버십</Link>
                            {/* <Link href='/login' className={buttonVariants({
                                size: 'sm'
                            })}>로그인</Link> */}
                            <Link href='/register' className={buttonVariants({
                                size: 'sm'
                            })}>가입하기</Link>
                            <Link href='/register' className={buttonVariants({ variant: 'ghost', size: 'sm' })}>시작하기 <ArrowRight className="ml-1.5 w-5 h-5" /></Link>
                        </>
                    </div>

                </div>
            </MaxWidthWrapper>
        </nav >
    )
}

export default Navbar