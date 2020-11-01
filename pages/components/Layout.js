import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = (props) => (
        <div>
            <Header />
            <div class="m-h-full text-center font-Roboto">{props.children}</div>
            <Footer />
        </div>
);
export default Layout;
