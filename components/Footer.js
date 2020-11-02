import { FaEnvelope, FaGithubSquare, FaInstagramSquare, FaLinkedin } from 'react-icons/fa'
import Link from 'next/link'

const Footer = () => (

        <div class="h-auto text-center mt-24 py-6 px-2 font-hairline">
            <div class="mb-2">
                {new Date().getFullYear()} Contact Me!
            </div>
            <div>
                <Link href="https://github.com/mattmc96">
                    <FaGithubSquare/>
                </Link>
            </div>

            <div>
                <Link href="https://www.linkedin.com/in/matthew-mccarthy-774b331aa/">
                    <FaLinkedin/>
                </Link>
            </div>

            <div>
                <Link href="https://mail.google.com/mail/u/1/#inbox?compose=new">
                    <FaEnvelope/>
                </Link>
            </div>
            <div>
                <Link href="/404">
                    <FaInstagramSquare/>
                </Link>
            </div>
        </div>
)
export default Footer
