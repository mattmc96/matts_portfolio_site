import Layout from '../components/Layout'
import Form from '../components/Form'

function contact() {
    return (
            <Layout>
              <section className="pb-20 relative block bg-gray-900">
                <div
                  className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
                  style={{ height: "80px", transform: "translateZ(0)" }}
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
                    <polygon
                      className="text-gray-900 fill-current"
                      points="2560 0 2560 100 0 100"
                    ></polygon>
                  </svg>
                </div>

                <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
                  <div className="flex flex-wrap text-center justify-center">
                    <div className="w-full lg:w-6/12 px-4">
                      <h2 className="text-4xl font-semibold text-white">
                        Send Me a Message!
                      </h2>
                      <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-500">
                        Why hire me? Is there a question you'd like to ask? Please feel free to drop a message below.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap mt-12 justify-center">
                    <div className="w-full lg:w-3/12 px-4 text-center">
                      <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                        <i className="fas fa-medal text-xl"></i>
                      </div>
                      <h6 className="text-xl mt-5 font-semibold text-white">
                        Commitment to Excellence
                      </h6>
                      <p className="mt-2 mb-4 text-gray-500">
                        I put my heart and soul into my code. Its what I love to do!
                        I don't strive for anything less.
                      </p>
                    </div>
                    <div className="w-full lg:w-3/12 px-4 text-center">
                      <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                        <i className="fas fa-poll text-xl"></i>
                      </div>
                      <h5 className="text-xl mt-5 font-semibold text-white">
                        Grow with me!
                      </h5>
                      <p className="mt-2 mb-4 text-gray-500">
                      We are all learning. I love to learn new technologies and to constantly evolve my game. Lets grow together!
                      </p>
                    </div>
                    <div className="w-full lg:w-3/12 px-4 text-center">
                      <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                        <i className="fas fa-lightbulb text-xl"></i>
                      </div>
                      <h5 className="text-xl mt-5 font-semibold text-white">
                        Ideas Make the world go around.
                      </h5>
                      <p className="mt-2 mb-4 text-gray-500">
                        Creativity fuels my day to day. If I'm not thinking outside the box, Then I'm not problem solving.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
              <section className="relative block py-24 lg:pt-0 bg-gray-900">
                <div className="container mx-auto px-4">
                  <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300">
                        <div className="flex-auto p-5 lg:p-10">
                          <h4 className="text-2xl font-semibold">
                            Want to contact me?
                          </h4>
                          <p className="leading-relaxed mt-1 mb-4 text-gray-600">
                            Complete this form and I will get back to you as soon as possible
                          </p>
                          <div className="relative w-full mb-3 mt-8">
                            <label
                              className="block uppercase text-gray-700 text-xs font-bold mb-2"
                              htmlFor="full-name"
                            >
                              Full Name
                            </label>
                            <input
                              type="text"
                              className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                              placeholder="Full Name"
                              style={{ transition: "all .15s ease" }}
                            />
                          </div>

                          <div className="relative w-full mb-3">
                            <label
                              className="block uppercase text-gray-700 text-xs font-bold mb-2"
                              htmlFor="email"
                            >
                              Email
                            </label>
                            <input
                              type="email"
                              className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                              placeholder="Email"
                              style={{ transition: "all .15s ease" }}
                            />
                          </div>

                          <div className="relative w-full mb-3">
                            <label
                              className="block uppercase text-gray-700 text-xs font-bold mb-2"
                              htmlFor="message"
                            >
                              Message
                            </label>
                            <textarea
                              rows="4"
                              cols="80"
                              className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                              placeholder="Type a message..."
                            />
                          </div>
                          <div className="text-center mt-6">
                            <button
                              className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                              type="button"
                              style={{ transition: "all .15s ease" }}
                            >
                              Send Message
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </Layout>
    )
}

export default contact
