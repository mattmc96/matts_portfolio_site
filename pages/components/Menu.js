import Link from "next/link";

const Menu = () => (
        <ul class="mt-5px mx-0 mb-0 p-0 list-none flex">
            <li>
                <Link href="/">
                    <a class="text-xl ">Home</a>
                </Link>
            </li>
            <li>
                <Link href="/services">
                    <a>Services</a>
                </Link>
            </li>
            <li>
                <Link href="/portfolio">
                    <a>Portfolio</a>
                </Link>
            </li>
            <li>
            <Link href="/about">
                <a>About</a>
            </Link>
            </li>
        </ul>
);

export default Menu;
