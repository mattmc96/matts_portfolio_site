import Layout from '../components/Layout'
import { TiArrowRightOutline } from 'react-icons/ti'

const Portfolio = () => (
        <Layout>
            {/*<div className="w-6/12 bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">*/}

            <div class="mt-12 mb-12 flex justify-evenly">

                <div class="max-w-sm rounded overflow-hidden shadow-xl ">
                    <img src="getawayPORT.png"/>
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">GetAway</div>
                        <p class="text-gray-700 text-base">
                            Need a break? Find a new place to get away for a bit! This site lets users make reservations from people renting their homes
                            out for profit.
                        </p>
                    </div>
                    <div class="flex flex-row justify-start items-center gap-x-2  pl-8 translate-x-4">
                        <TiArrowRightOutline class="text-gray-700"/>
                        <a class="text-sm  text-red-700" href="http://getaway.dev">Live.</a>
                        <a class="text-sm  text-red-700" href="https://github.com/GetAway-DM/GetAway">Repo.</a>
                    </div>

                    <div class="px-6 pt-4 pb-2">
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#react</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#express</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#material-ui</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#js</span>
                    </div>
                </div>
                <div class="max-w-sm rounded overflow-hidden shadow-lg ">

                    <img src="/connectPORT.png"/>
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">Connect</div>
                        <p class="text-gray-700 text-base">
                            Helping developers connect with each other. The need for teams to communicate is more important than ever. Be able to connect in a remote environment. Scedules, chat, profiles.
                        </p>
                    </div>
                    <div class="flex flex-row justify-start items-center gap-x-2  pl-8 translate-x-4">
                        <TiArrowRightOutline class="text-gray-700"/>
                        <a class="text-sm  text-red-700" href="https://www.connectpro.dev/">Live.</a>
                        <a class="text-sm  text-red-700" href="https://github.com/mattmc96/connect">Repo.</a>
                    </div>

                    <div class="px-6 pt-4 pb-2">
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#socket-io</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#react</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#sass</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#node</span>
                    </div>
                </div>
            </div>
            {/*</div>*/}
        </Layout>
)
export default Portfolio
