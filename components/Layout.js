import Header from '../components/Header'
import Footer from '../components/Footer'
import Head from 'next/head'

const Layout = (props) => (
        <>
            <Head>
                <title>Matts Porfolio</title>
                <meta name="image" property="og:image" content="/screenshotportfolio.png"/>
            </Head>
            <div>
                <Header/>
                <div class="w-5/6 h-screen relative right-12 mx-4 bg-white box-border  transform translate-x-32 rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto sm:min-h-0 text-center font-Roboto">{props.children}</div>
                <Footer/>
            </div>
        </>
)
export default Layout
