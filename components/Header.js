import Logo from "../components/Logo";
import Menu from "../components/Menu";

const Header = () => (
        <div class="p-12 flex justify-between items-center sm:block sm:text-center">
            <Logo />
            <Menu />
        </div>
);
export default Header;
