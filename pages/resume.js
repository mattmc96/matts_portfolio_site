import Layout from '../components/Layout'

const Home = () => {
  return (
    <Layout>
      <section className="relative py-16 bg-gray-300">
        <div className="container mx-auto px-4">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
            <img
              src='/NewResume.png'
              alt='resume image'
            />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Home
