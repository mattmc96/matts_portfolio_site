// import React, { useState } from 'react'
import Layout from '../components/Layout'
import Form from '../components/Form'
// import axios from 'axios'

const Homepage = () => {
    // const [name, setName] = useState('')
    // const [message, setMessage] = useState('')
    // const [email, setEmail] = useState('')
    // const [sent, setSent] = useState(false)
    // const [buttonText, setButtonText] = useState('Send Message')
    //
    // formSubmit = (e) => {
    //     e.preventDefault()
    //     setButtonText({ buttonText: '...sending' })
    //     let data = { name: name, email: email, message: message, }
    //     axios.post('API_URI', data).then(res => {
    //         setSent({ sent: true }, resetForm())
    //     }).catch((err) => {
    //                 console.log(err)
    //             }
    //     )
    // }
    //
//     return (
//     //
//             <Layout>
//                  <div class="m-0">
//     //                 <div>
//     //                     <form class="w-full  max-w-sm flex absolute right-0 left-0 ">
//     //                         <div class="flex items-center border-b border-indigo-500 py-2">
//     //                             <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
//     //                                    type="text"
//     //                                    aria-label="Full Name"
//     //                                    value={email}
//     //                                    onChange={(e) => setEmail({email: e.target.value})}
//     //                             />
//     //                             <button class="flex-shrink-0 border-tranparent border-4 text-indigo-500 hover:text-indigo-800 text-sm py-1 px-2 rounded"
//     //                                     type="button">
//     //                                 {buttonText}
//     //                             </button>
//     //                         </div>
//     //                     </form>
//                     </div>
//                 </div>
//             </Layout>
//     )
// }
    return (

            <Layout>
                <div class="flex justify-center"><Form/></div>

            </Layout>
    )
}

export default Homepage
