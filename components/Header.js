import Logo from "../components/Logo";
import Menu from "../components/Menu";
import Whoami from '../components/Whoami'

const Header = () => (
        <div class="p-12 justify-between items-center sm:block sm:text-center">
            <Whoami/>
            <Logo />
            <Menu />
        </div>
);
export default Header;
