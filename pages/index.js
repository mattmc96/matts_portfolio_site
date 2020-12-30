import Layout from '../components/Layout';
import Typed from 'react-typed'

const Home = () => {
  return (
    <Layout>
      <section className="relative py-16 bg-gray-300">
        <div className="container mx-auto px-4">
          <div
            className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
            <div className="px-6">
              <div className="flex flex-wrap justify-center">
                <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                  <div className="relative">
                    <img
                      alt="..."
                      src="./me.png"
                      className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16"
                      style={ { maxWidth: '150px' } }
                    />
                  </div>
                </div>
                <div className="absolute left-0 mx-24 mt-12">
                  <Typed
                    strings={[
                      'Hi, my names Matt!',
                      'I\'m a full-stack web developer.',
                      'I\'m currently available for hire.'
                    ]}
                    typeSpeed={60}
                    backSpeed={70}
                    backDelay={500}
                    startDelay={1000}
                    smartBackspace={true}
                    loop={false}/>
                </div>
                <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                  <div className="py-6 px-3 mt-32 sm:mt-0">
                    <button
                      className="bg-gray-900 z-20 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1"
                      type="button"
                      style={ { transition: 'all .15s ease' } }
                    >
                      Connect
                    </button>
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4 lg:order-1">
                  <div className="flex justify-center py-4 lg:pt-4 pt-8">

                  </div>
                </div>
              </div>
              <div className="text-center mt-12">
                <h3 className="text-4xl font-semibold leading-normal mb-2 text-gray-800 mb-2">
                  Matt McCarthy
                </h3>
                <div className="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase">
                  <i className="fas fa-map-marker-alt mr-2 text-lg text-gray-500"></i>{ ' ' }
                  DFW-Metroplex, Texas
                </div>
                <div className="mb-2 text-gray-700 mt-10">
                  <i className="fas fa-briefcase mr-2 text-lg text-gray-500"></i>
                  Full-Stack - Web Developer
                </div>
                <div className="mb-2 text-gray-700">
                  <i className="fas fa-university mr-2 text-lg text-gray-500"></i>
                  Graduate of Dev Mountain
                </div>
              </div>
              <div className="mt-10 py-10 border-t border-gray-300 text-center">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-9/12 px-4">
                    <p className="mb-4 text-lg leading-relaxed text-gray-800 pb-8">
                      Currently reside in Dallas, TX.
                      Hobbies include<br/> martial arts, cooking,
                      coding, and hiking with my dog. I recently<br/>
                      graduated from DevMountains immersive bootcamp.
                      I am a full-stack developer<br/> but enjoy working in the
                      backend more than anything.
                    </p>
                    <div className="flex gap-4 justify-center">
                      <h1 className="prose text-xl">Powered by</h1>
                      <img width={ 75 } height={ 75 }
                           src="/coffee-cup.svg"/>
                      <di className="flex items-center">+</di>
                      <img width={ 75 } height={ 75 } src="webstorm.svg"/>
                    </div>
                    <h1 className="font-thin pt-6">Current.</h1>
                    <div className=" my-0 box-border">
                      <div
                        className="py-0 px-2 flex flex-wrap place-items-center items-start justify-evenly grid grid-rows-3 grid-flow-col gap-0 gap-x-0">
                        <div className="p-2 mb-3 w-1/2  px-1 py-2 ">
                          <h2
                            className="mt-0 mr-0 mb-1 ml-0">HTML</h2>
                          <img
                            className=" transform motion-reduce:transform-none hover:-translate-y-1 hover:scale-105 transition ease-in-out duration-500"
                            width={ 200 } height={ 200 }
                            src="/html5-original.svg"/>
                        </div>
                        <div
                          className="p-2 mb-3 w-1/2 w-auto px-1 py-2 justify-center">
                          <h2 className="mt-0 mr-0 mb-1 ml-0">CSS</h2>
                          <img
                            className="transform motion-reduce:transform-none hover:-translate-y-1 hover:scale-105 transition ease-in-out duration-500"
                            width={ 200 } height={ 200 }
                            src="/css3-original.svg"/>
                        </div>
                        <div
                          className="p-2 mb-3 w-1/2 w-auto px-1 py-2">
                          <h2
                            className="mt-0 mr-0 mb-1 ml-0">JavaScript</h2>
                          <img
                            className="transform motion-reduce:transform-none hover:-translate-y-1 hover:scale-105 transition ease-in-out duration-500"
                            width={ 200 } height={ 200 }
                            src="/javascript-original.svg"/>
                        </div>
                        <div
                          className="p-2 mb-3 w-1/2 w-auto px-1 py-2">
                          <h2
                            className="mt-0 mr-0 mb-1 ml-0">React</h2>
                          <img
                            className="transform motion-reduce:transform-none hover:-translate-y-1 hover:scale-105 transition ease-in-out duration-500"
                            width={ 200 } height={ 200 }
                            src="/react-original.svg"/>
                        </div>
                        <div
                          className="p-2 mb-3 w-1/2 w-auto px-1 py-2">
                          <h2
                            className="mt-0 mr-0 mb-1 ml-0">Express</h2>
                          <img
                            className="transform motion-reduce:transform-none hover:-translate-y-1 hover:scale-105 transition ease-in-out duration-500"
                            width={ 200 } height={ 200 }
                            src="/express-original.svg"/>
                        </div>
                        <div
                          className="p-2 mb-3 w-1/2 w-auto px-1 py-2">
                          <h2
                            className="mt-0 mr-0 mb-1 ml-0">Node</h2>
                          <img
                            className="transform motion-reduce:transform-none hover:-translate-y-1 hover:scale-105 transition ease-in-out duration-500"
                            width={ 200 } height={ 200 }
                            src="/nodejs-original.svg"/>
                        </div>
                        <div
                          className="p-2 mb-3 w-1/2 w-auto px-1 py-2">
                          <h2
                            className="mt-0 mr-0 mb-1 ml-0">PostgreSQL</h2>
                          <img
                            className="transform motion-reduce:transform-none hover:-translate-y-1 hover:scale-105 transition ease-in-out duration-500"
                            width={ 200 } height={ 200 }
                            src="/postgresql-original.svg"/>
                        </div>
                        <div
                          className="p-2 mb-3 w-1/2 w-auto px-1 py-2">
                          <h2
                            className="mt-0 mr-0 mb-1 ml-0">Redux</h2>
                          <img
                            className="transform motion-reduce:transform-none hover:-translate-y-1 hover:scale-105 transition ease-in-out duration-500"
                            width={ 200 } height={ 200 }
                            src="/redux-original.svg"/>
                        </div>
                        <div
                          className="p-2 mb-3 w-1/2 w-auto px-1 py-2">
                          <h2
                            className="mt-0 mr-0 mb-1 ml-0">SASS</h2>
                          <img
                            className="transform motion-reduce:transform-none hover:-translate-y-1 hover:scale-105 transition ease-in-out duration-500"
                            width={ 200 } height={ 200 }
                            src="/sass-original.svg"/>
                        </div>
                        <div
                          className="p-2 mb-3 w-1/2 w-auto px-1 py-2">
                          <h2
                            className="mt-0 mr-0 mb-1 ml-0">Next</h2>
                          <img
                            className="transform motion-reduce:transform-none hover:-translate-y-1 hover:scale-105 transition ease-in-out duration-500"
                            width={ 200 } height={ 200 }
                            src="next.svg"/>
                        </div>
                        <div
                          className="p-2 mb-3 w-1/2 w-auto px-1 py-2">
                          <h2
                            className="mt-0 mr-0 mb-1 ml-0">TailwindCSS</h2>
                          <img
                            className="transform motion-reduce:transform-none hover:-translate-y-1 hover:scale-105 transition ease-in-out duration-500"
                            width={ 200 } height={ 200 }
                            src="tailwind.svg"/>
                        </div>
                        <div
                          className="p-2 mb-3 w-1/2 w-auto px-1 py-2">
                          <h2 className="mt-0 mr-0 mb-1 ml-0">Vim</h2>
                          <img
                            className="transform motion-reduce:transform-none hover:-translate-y-1 hover:scale-105 transition ease-in-out duration-500"
                            width={ 200 } height={ 200 }
                            src="/vim-original.svg"/>
                        </div>
                        <div
                          className="p-2 mb-3 w-1/2 w-auto px-1 py-2">
                          <h2 className="mt-0 mr-0 mb-1 ml-0">Git</h2>
                          <img
                            className="transform motion-reduce:transform-none hover:-translate-y-1 hover:scale-105 transition ease-in-out duration-500"
                            width={ 200 } height={ 200 }
                            src="/git-original.svg"/>
                        </div>
                        <div
                          className="p-2 mb-3 w-1/2 w-auto px-1 py-2">
                          <h2
                            className="mt-0 mr-0 mb-1 ml-0">Gulp</h2>
                          <img
                            className="transform motion-reduce:transform-none hover:-translate-y-1 hover:scale-105 transition ease-in-out duration-500"
                            width={ 200 } height={ 200 }
                            src="/gulp-plain.svg"/>
                        </div>
                        <div
                          className="p-2 mb-3 w-1/2 w-auto px-1 py-2">
                          <h2
                            className="mt-0 mr-0 mb-1 ml-0">Jest</h2>
                          <img
                            className="transform motion-reduce:transform-none hover:-translate-y-1 hover:scale-105 transition ease-in-out duration-500"
                            width={ 200 } height={ 200 }
                            src="/jest.svg"/>
                        </div>
                      </div>
                      <div className="flex justify-center  pb-40 pt-20">
                        <div className=" flex flex-col  ">
                          <h1
                            className="font-thin pb-4">Exploring.</h1>
                          <div
                            className="gap-x-24  py-0 px-2 flex flex-wrap place-items-center items-center justify-center grid grid-cols-3 grid-flow-col ">

                            <div
                              className="p-2 mb-3 w-1/2  w-auto px-1 py-2 ">
                              <h2
                                className="mt-0 mr-0 mb-1  ml-0 transform -translate-x-2 gap-x-2">TypeScript</h2>
                              <img
                                className="flex justify-between transform motion-reduce:transform-none hover:-translate-y-1 hover:scale-105 transition ease-in-out duration-500"
                                width={ 200 } height={ 200 }
                                src="/typescript-original.svg"/>
                            </div>
                            <div
                              className="p-2 mb-3 w-1/2 w-auto px-1 py-2">
                              <h2
                                className="mt-0 mr-0 mb-1 ml-0 transform -translate-x-2 gap-x-2">Sequelize</h2>
                              <img
                                className="flex justify-between transform motion-reduce:transform-none hover:-translate-y-1 hover:scale-105 transition ease-in-out duration-500"
                                width={ 200 } height={ 200 }
                                src="/sequelize-original.svg"/>
                            </div>
                            <div
                              className="p-2 mb-3 w-1/2 w-auto px-1 py-2">
                              <h2
                                className="mt-0 mr-0 mb-1 ml-0 transform -translate-x-2 gap-x-2">AWS</h2>
                              <img
                                className="flex justify-between transform motion-reduce:transform-none hover:-translate-y-1 hover:scale-105 transition ease-in-out duration-500"
                                width={ 200 } height={ 200 }
                                src="/amazonwebservices-original-wordmark.svg"/>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
