import { FaEnvelope, FaGithubSquare, FaInstagramSquare, FaLinkedin } from 'react-icons/fa'
import Link from 'next/link'

const Footer = () => (

        <div class="font-hairline gap-6 mt-64">
            <div class="flex justify-center items-center gap-6 gap-y-6 ">
                <div class="divide-x divide-black">
                    <h1 class="text-lg font-indigo">
                        Get In Touch!
                    </h1>
                </div>
                <div class="grid grid-cols-4  divide-x divide-black ">
                    <Link href="https://github.com/mattmc96">
                        <div class="text-center px-2">
                            <FaGithubSquare class="hover:opacity-75"/>
                        </div>
                    </Link>

                    <Link href="https://www.linkedin.com/in/matthew-mccarthy-774b331aa/">
                        <div  class="text-center px-2">
                            <FaLinkedin class="hover:opacity-75"/>
                        </div>
                    </Link>

                    <Link href="https://mail.google.com/mail/u/1/#inbox?compose=new">
                        <div  class="text-center px-2">
                            <FaEnvelope class="hover:opacity-75"/>
                        </div>
                    </Link>
                    <Link href="/404">
                        <div  class="text-center px-2">
                            <FaInstagramSquare class="hover:opacity-75"/>
                        </div>
                    </Link>
                </div>
            </div>
            <div class="flex justify-center gap-x-4 items-center">
                <h3 class="font-hairline place-self-auto text-sm tracking-wider text-gray-700">Website built and designed by Matt
                    Mccarthy</h3>
                <img src="/next.svg"/>

                <img src="/tailwind.svg"/>

            </div>
        </div>
)
export default Footer
