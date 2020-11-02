import Link from 'next/link'

const Logo = () => (
        <div class="block flex sm:inline-block">
            <Link href="/">
                <a>
                    <img src="/me.png" alt="me" class="h-auto w-auto"/>
                </a>
            </Link>
        </div>
)
export default Logo
