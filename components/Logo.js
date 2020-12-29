import Link from 'next/link'
import Typed from 'react-typed'

export default function Logo() {
    return (

            <div class="flex flex-row-reverse justify-center items-center gap-x-4  ">

                <Link href="/">
                    <a>
                        <img src="/me.png" alt="me" class="h-56 w-56"/>
                    </a>
                </Link>

            </div>
    )
}


