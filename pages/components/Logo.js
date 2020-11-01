import Link from 'next/link'

const Logo = () => (
        <div>
            <Link href="/">
                <a>
                    <img class="block w-14 max-w-4xl lg:inline-block" src="/me.png"/>
                </a>
            </Link>
        </div>
)
export default Logo
