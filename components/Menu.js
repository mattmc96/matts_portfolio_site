import Link from 'next/link'

const Menu = () => (
        <ul class="mt-5px mx-0 mb-0 p-0 list-none flex sm:block sm:mt-2">
            <li class=" sm:inline-block ">
                <Link href="/">
                    <a class="text-xl text-grey-800 font-light padding py-2 px-1 my-0 mx-3 no-underline hover:pb-1 hover:border-b-2 hover:border-solid hover:border-teal-800 sm:text-lg">Home</a>
                </Link>
            </li>
            <li class="sm:inline-block">
                <Link href="/services">
                    <a class=" text-xl text-grey-800 font-light padding py-2 px-1 my-0 mx-3 no-underline hover:pb-1 hover:border-b-2 hover:border-solid hover:border-teal-800 sm:text-lg">Services</a>
                </Link>
            </li>
            <li class="sm:inline-block">
                <Link href="/portfolio">
                    <a class=" text-xl text-grey-800 font-light padding py-2 px-1 my-0 mx-3 no-underline hover:pb-1 hover:border-b-2 hover:border-solid  hover:border-teal-800 sm:text-lg">Portfolio</a>
                </Link>
            </li>
            <li class="sm:inline-block">
                <Link href="/about">
                    <a class=" text-xl text-grey-800 font-light padding py-2 px-1 my-0 mx-3 no-underline hover:pb-1 hover:border-b-2 hover:border-solid hover:border-white-500 sm:text-lg">About</a>
                </Link>
            </li>
        </ul>
)

export default Menu
