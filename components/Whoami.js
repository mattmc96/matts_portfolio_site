import Link from 'next/link'

const Whoami = () => (
        <div class="absolute sm:hidden left-0 top-0 mt-8 ml-8 font-light text-indigo-500 hover:text-gray-800 transform motion-reduce:transform-none hover:-translate-y-1 hover:scale-105 transition ease-in-out duration-500">
            <Link href="/">
                <a class="pb-2 border-b-2 border-solid border-transparent hover:border-gray-400  ">Matt Mccarthy</a>
            </Link>
        </div>
)
export default Whoami
