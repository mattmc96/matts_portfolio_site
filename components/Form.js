// import { FaRegPaperPlane } from "react-icons/fa"

export default class Form extends React.Component {
    constructor(props) {
        super(props)
        this.submitForm = this.submitForm.bind(this)
        this.state = {
            status: ''
        }
    }

    render() {
        const { status } = this.state
        return (
                <div class="w-full max-w-sm">
                    <div>

                    </div>
                    <div className="w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
                        <form
                                onSubmit={this.submitForm}
                                action="https://formspree.io/f/mvovrvoe"
                                method="POST"
                        >
                            <div class="md:flex md:items-center mb-6">
                                <h1 class="prose xl:prose-xl text-gray-500 text-xl font-bold">Contact</h1>
                                <div class="md:w-1/3">
                                    <label class="flex justify-start block items-end text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4 font-bold">What
                                        Email can I reach you at?</label>
                                </div>
                                <div class="md:2-2/3">
                                    <input class=" bg-gray-300 appearance-none border-2 border-indigo-200 rounded w-full py-2 px-4  text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                           type="email" name="email"/>
                                </div>
                                <div class="md:flex md:items-center mb-6">
                                    <div class="md:w-1/3">
                                        <label class=" flex justify-start items-end block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4 font-bold transform translate-y-4">Send
                                            me a message directly!</label>
                                    </div>
                                </div>
                                <input class="bg-gray-300 h-40 text-sm appearance-none border-2 border-indigo-200 rounded w-full py-2 px-4  text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                       type="text" name="message"/>
                            </div>
                            {status==='SUCCESS' ? <p class="text-gray-700 text-xl flex-row">Thanks!</p>:
                                    <button class="flex-shrink-0 bg-indigo-700 border-indigo-300 hover:border-indigo-700 text-sm border-4 text-white py-1 px-2 rounded">Submit</button>}
                            {status==='ERROR' && <p>Ooops! There was an error.</p>}
                        </form>
                    </div>
                </div>
        )
    }

// <FaRegPaperPlane class="flex flex-row transform translate-x-64"/>

    submitForm(ev) {
        ev.preventDefault()
        const form = ev.target
        const data = new FormData(form)
        const xhr = new XMLHttpRequest()
        xhr.open(form.method, form.action)
        xhr.setRequestHeader('Accept', 'application/json')
        xhr.onreadystatechange = () => {
            if (xhr.readyState!=XMLHttpRequest.DONE) return
            if (xhr.status===200) {
                form.reset()
                this.setState({ status: 'SUCCESS' })
            } else {
                this.setState({ status: 'ERROR' })
            }
        }
        xhr.send(data)
    }
}
