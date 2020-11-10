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
                <div class="sm:min-h-0 text-center font-Roboto">{props.children}</div>
                <Footer/>
            </div>
        </>
)
export default Layout
