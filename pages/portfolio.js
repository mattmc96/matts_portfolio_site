import Layout from '../components/Layout'
import { TiArrowRightOutline } from 'react-icons/ti'

const Portfolio = () => (

<Layout>
    <section className="relative py-16 bg-gray-300">
        <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
            <h1 className="font-thin justify-center mx-auto">Projects</h1>
                <div className="mt-24 mb-24 flex justify-evenly">
                    <div className="max-w-sm rounded overflow-hidden shadow-xl ">
                        <img src="getawayPORT.png"/>
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">GetAway</div>
                            <p className="text-gray-700 text-base">
                                Need a break? Find a new place to get away for a bit! This site lets
                                users make reservations from people renting their homes
                                out for profit.
                            </p>
                        </div>
                        <div
                          className="flex flex-row justify-start items-center gap-x-2  pl-8 translate-x-4">
                            <TiArrowRightOutline class="text-gray-700"/>
                            <a className="text-sm  text-red-700" href="http://getaway.dev">Live.</a>
                            <a className="text-sm  text-red-700"
                               href="https://github.com/GetAway-DM/GetAway">Repo.</a>
                        </div>

                        <div className="px-6 pt-4 pb-2">
                            <span
                              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#react</span>
                            <span
                              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#express</span>
                            <span
                              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#material-ui</span>
                            <span
                              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#js</span>
                        </div>
                    </div>
                    <div className="max-w-sm rounded overflow-hidden shadow-lg ">

                        <img src="/connectPORT.png"/>
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">Connect</div>
                            <p className="text-gray-700 text-base">
                                Helping developers connect with each other. The need for teams to
                                communicate is more important than ever. Be able to connect in a
                                remote environment. Scedules, chat, profiles.
                            </p>
                        </div>
                        <div
                          className="flex flex-row justify-start items-center gap-x-2  pl-8 translate-x-4">
                            <TiArrowRightOutline class="text-gray-700"/>
                            <a className="text-sm  text-red-700"
                               href="https://www.connectpro.dev/">Live.</a>
                            <a className="text-sm  text-red-700"
                               href="https://github.com/mattmc96/connect">Repo.</a>
                        </div>

                        <div className="px-6 pt-4 pb-2">
                            <span
                              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#socket-io</span>
                            <span
                              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#react</span>
                            <span
                              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#sass</span>
                            <span
                              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#node</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</Layout>
)
export default Portfolio
