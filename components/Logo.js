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
                    <div class="absolute left-0 ml-40 ">
                        <Typed
                                strings={[
                                    'Hi, my names Matt!',
                                    'I\'m a full-stack web developer',
                                    'Welcome to my portfolio',
                                    'I\'m currently available for hire'
                                ]}
                                typeSpeed={60}
                                backSpeed={60}
                                smartBackspace={true}
                                loop={false}/>

                    </div>
            </div>
    )
}

