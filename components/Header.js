import Logo from "../components/Logo";
import Navbar from "./Navbar";
import Whoami from '../components/Whoami'

const Header = () => (
        <div class="p-12 justify-between items-center sm:block sm:text-center">
            <Whoami/>
            <Logo />
            <Navbar />
        </div>
);
export default Header;
