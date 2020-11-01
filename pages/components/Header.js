import Logo from "../components/Logo";
import Menu from "../components/Menu";

const Header = () => (
        <div class="p-12 flex justify-between items-center  lg:block lg:text-center">
            <Logo />
            <Menu />
        </div>
);
export default Header;
