import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='flex flex-row'>
        <div className="main h-full w-[calc(50%)] pr-6">
            <h1 className='font-bold text-8xl mb-6'>
                Recipio
            </h1>
            <p className='w-[90%]'>
                Welcome! Recipio is a recipe search engine that helps you find recipes based on your preferences. Click on the button below to get started.
            </p>
            <Link to="/pick-preferences">
                <button className='bg-amber-500 text-white font-semibold py-2 px-4 rounded-lg my-4'>
                    Pick Preferences
                </button>
            </Link>
        </div>
        <div className="heroimg h-[calc(100vh-8rem)] w-1/2 flex justify-center items-center overflow-hidden rounded-2xl">
            <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1981&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Hero image" />
        </div>
    </div>
  )
}

export default Home