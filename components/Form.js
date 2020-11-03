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
                <form
                        class="w-full max-w-sm "
                        onSubmit={this.submitForm}
                        action="https://formspree.io/f/mvovrvoe"
                        method="POST"
                >
                    <div class="md:flex md:items-center mb-6">
                    <div class="md:w-1/3">
                        <label class="flex justify-start block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">Email</label>
                    </div>
                        <div class="md:2-2/3">
                        <input class="bg-gray-300 appearance-none border-2 border-indigo-200 rounded w-full py-2 px-4  text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text"
                               type="email" name="email" aria-label="Full name"
                        />
                        </div>
                        <div class="md:flex md:items-center mb-6">
                            <div class="md:w-1/3">
                        <label class="flex justify-start block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-message">Message</label>
                            </div>
                            <div>
                        <input class="bg-gray-300 appearance-none border-2 border-indigo-200 rounded w-full py-2 px-4  text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" />
                            </div>
                        </div>
                        {status==='SUCCESS' ? <p>Thanks!</p>:<button
                                class="flex-shrink-0 bg-indigo-700 border-indigo-300 hover:border-indigo-700 text-sm border-4 text-white py-1 px-2 rounded"
                                type="button"
                        >Submit</button>}
                        {status==='ERROR' && <p>Ooops! There was an error.</p>}
                    </div>
                </form>
        )
    }

    submitForm(ev) {
        ev.preventDefault()
        const form = ev.target
        const data = new FormData(form)
        const xhr = new XMLHttpRequest()
        xhr.open(form.method, form.action)
        xhr.setRequestHeader('Accept', 'application/json')
        xhr.onreadystatechange = () => {
            if (xhr.readyState!==XMLHttpRequest.DONE) return
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
