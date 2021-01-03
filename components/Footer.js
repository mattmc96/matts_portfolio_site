import Link from 'next/link';

function Footer() {

  return (
    <>
      <footer className="relative bg-gray-300 pt-8 pb-6">
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
          style={ { height: '80px', transform: 'translateZ(0)' } }
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
              className="text-gray-300 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl font-semibold">
                Let's get in touch!
              </h4>
              <h5 className="text-lg mt-0 mb-2 text-gray-700">
                Find me on any of these platforms.
              </h5>
              <div className="mt-6">

                <button
                  className="bg-white text-blue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                  type="button"
                >
                 <a href="https://www.linkedin.com/in/matthew-mccarthy-774b331aa/">
                  <i className="flex fab fa-linkedin"></i>
                 </a>
                </button>
                <button
                  className="bg-white text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                  type="button"
                >
                  <a href="https://www.instagram.com/mattylok14/">
                  <i className="flex fab fa-instagram" style={{color: "#845ef7"}}></i>
                  </a>
                </button>
                <button
                  className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                  type="button"
                >
                  <Link href="/404">
                  <i className="flex fab fa-dribbble" style={{color: "#f06595"}}></i>

                  </Link>
                </button>
                <button
                  className="bg-white text-gray-900 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                  type="button"
                >
                  <a href="https://github.com/mattmc96">
                  <i className="flex fab fa-github"></i>
                  </a>
                </button>
              </div>
            </div>
            <div className="w-full justify-center w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase text-gray-600 text-sm font-semibold mb-2">
                    Useful Links
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <Link href="/">

                        <a
                          className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        >About me
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">

                        <a
                          className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        >Blog
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">

                        <a
                          className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        >Github
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">

                        <a
                          className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        > Project
                        </a>
                      </Link>
                    </li>

                  </ul>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <span className="block uppercase text-gray-600 text-sm font-semibold mb-2">
                    Other Resources
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <Link href="/">
                        <a
                          className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        >MIT
                          License
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a
                          className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        >Terms & Conditions
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a
                          className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        >Privacy Policy
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a
                          className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        >Contact Me
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-400"/>
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="flex justify-center gap-x-4 mx-auto items-center">
              <h3
                className="font-hairline text-sm tracking-wider text-gray-700">
                © { new Date().getFullYear() }{ ' ' }Designed and Created by{ ' ' }
                Matt Mccarthy</h3>
              <img src="/next.svg"/>
              <img src="/tailwind.svg"/>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;

