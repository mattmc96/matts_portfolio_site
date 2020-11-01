import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = (props) => (
        <div>
            <Header />
            <div class="sm:min-h-0 text-center font-Roboto">{props.children}</div>
            <Footer />
        </div>
);
export default Layout;
