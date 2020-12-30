import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Layout = props => (
        <div className="z-10">
            <Navbar transparent/>
            <main className="profile-page">
                <section className="relative block" style={{ height: '500px' }}>
                    <div
                            className="absolute top-0 w-full h-full bg-center bg-cover"
                            style={{
                                backgroundImage:
                                    "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')",
                            }}
                    >
                        <span id="blackOverlay" className="w-full h-full absolute opacity-50 bg-black"></span>
                    </div>
                    <div
                            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
                            style={{ height: '70px', transform: 'translateZ(0)' }}
                    >
                        <svg
                                className="absolute bottom-0 overflow-hidden"
                                xmlns="http://www.w3.org/2000/svg"
                                preserveAspectRatio="none"
                                version="1.1"
                                viewBox="0 0 2560 100"
                                x="0"
                                y="0"
                        >
                            <polygon className="text-gray-300 fill-current" points="2560 0 2560 100 0 100"></polygon>
                        </svg>
                    </div>
                </section>
            </main>
                    {props.children}
            <Footer/>
        </div>
)
export default Layout;


