import Link from 'next/link'

const Logo = () => (
        <div class="block w-40 sm:inline-block">
            <Link href="/">
                <a>
                    <img src="/me.png" alt="me"/>
                </a>
            </Link>
        </div>
)
export default Logo
