import Link from "next/link"
import {FaTwitter, FaGithub, FaLaptop} from 'react-icons/fa'

export default function Navbar() {
  return (
    <nav className="bg-slate-600 p-4 sticky top-0 drop-shadow-xl z-10">
        <div className="prose prose-xl mx-auto flex justify-between flex-col sm:flex-row">
            <h1 className="text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0">
                <Link href={'/'} className="text-white no-underline hover:text-white">
                    Raushan Kumar
                </Link>
            </h1>
            <div className="flex flex-row justify-center items-center sm:justify-evenly align-middle gap-8 text-white text-2xl lg:text-3xl">
                <Link className="text-white/90 hover:text-white" href="https://www.twitter.com/raushanksujal/">
                    <FaTwitter />
                </Link>
                <Link className="text-white/90 hover:text-white" href="https://www.github.com/code-raushan/">
                    <FaGithub />
                </Link>
                <Link className="text-white/90 hover:text-white" href="https://www.rdev.hashnode.dev/">
                    <FaLaptop />
                </Link>

            </div>            

        </div>
    </nav>
  )
}
