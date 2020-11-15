import Link from 'next/link'

const Menu = () => (
        <ul class="mt-0 pr-8 pt-8 p-0 list-none flex absolute top-0 right-0 sm:block sm:mt-2">
            <li class=" sm:inline-block font-light text-indigo-500 hover:text-gray-800   ">
                <Link href="/">
                    <a class="pb-2 border-b-2 border-transparent hover:border-gray-400  text-grey-800 font-light padding py-2 px-1 my-0 mx-3 no-underline hover:pb-1 hover:border-b-2 sm:text-lg">Home</a>
                </Link>
            </li>
            <li class="sm:inline-block font-light text-indigo-500 hover:text-gray-800 ">
                <Link href="/services">
                    <a class=" pb-2 border-b-2  border-transparent hover:border-gray-400 text-grey-800 font-light padding py-2 px-1 my-0 mx-3 no-underline hover:pb-1 hover:border-b-2  sm:text-lg">Services</a>
                </Link>
            </li>
            <li class="sm:inline-block font-light text-indigo-500 hover:text-gray-800 ">
                <Link href="/portfolio">
                    <a class=" pb-2 border-b-2  border-transparent hover:border-gray-400 text-grey-800 font-light padding py-2 px-1 my-0 mx-3 no-underline hover:pb-1 hover:border-b-2  sm:text-lg">Portfolio</a>
                </Link>
            </li>
            <li class="sm:inline-block font-light text-indigo-500 hover:text-gray-800 ">
                <Link href="/about">
                    <a class=" pb-2 border-b-2 border-transparent hover:border-gray-400 text-grey-800 font-light padding py-2 px-1 my-0 mx-3 no-underline hover:pb-1 hover:border-b-2  sm:text-lg">About</a>
                </Link>
            </li>
            <li className="sm:inline-block font-light text-indigo-500 hover:text-gray-800 ">
                <Link href="/contact">
                    <a className=" pb-2 border-b-2 border-transparent hover:border-gray-400 text-grey-800 font-light padding py-2 px-1 my-0 mx-3 no-underline hover:pb-1 hover:border-b-2  sm:text-lg">Contact</a>
                </Link>
            </li>
        </ul>
)

export default Menu
