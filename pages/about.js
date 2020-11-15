import Layout from '../components/Layout'

const About = () => (
        <Layout>
            {/*<div className="w-6/12 bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">*/}
                <div class="flex divide-x-2 mx-20 mt-32 mb-40 divide-gray-600 justify-center  ">
                    <div class="">
                        <h1 class="prose lg:prose-xl p-12 font-semibold ">Little bit about me </h1>
                    </div>
                    <div class="prose lg:prose-xl">
                        <p class="flex prose lg:prose-xl p-12 text-left">Currently reside in Dallas, TX.<br/> Hobbies
                            include martial arts, cooking,<br/> coding, and hiking with my dog. I
                            recently<br/> graduated
                            from DevMountains immersive bootcamp.<br/> I am a full-stack developer but enjoy working in
                            the<br/> backend more than anything. </p>
                    </div>
                </div>
                <div class="flex gap-4 justify-center">
                    <h1 class="prose text-xl">Powered by</h1>
                    <img width={75} height={75} src="/coffee-cup.svg"/>
                    <di class="flex items-center">+</di>
                    <img width={75} height={75} src="webstorm.svg"/>
                </div>

            {/*</div>*/}
        </Layout>
)
export default About
 
