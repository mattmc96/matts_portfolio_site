// import React, { useState } from 'react'
import Layout from '../components/Layout'
import Animation from '../components/Animation'
import Form from '../components/Form'

const Homepage = () => {
    return (

            <Layout>
                <div>
                    <div class="container mx-auto flex flex-row justify-center mt-40 mb-40 ">
                        <Animation/>
                    </div>
                    <div class="flex justify-center">
                        <Form/>
                    </div>
                </div>
            </Layout>
    )
}

export default Homepage
