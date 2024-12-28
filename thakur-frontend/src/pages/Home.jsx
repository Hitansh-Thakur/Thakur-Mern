import React from 'react'

const Home = () => {
    return (
        <>

            <div className="main-bg absolute top-0 -z-20    bg-center bg-no-repeat bg-cover h-screen w-full">

            </div>
            <main className=' h-screen grid items-center'>
                <div className="text-white grid container grid-cols-2 gap-6 w-3/4  mx-auto">

                    <div className='relative py-4 before:h-full before:absolute before:w-1 before:bg-white before:-ml-5'>

                        <h1 className='py-8 font-light text-8xl'>Destination for CNC Automation</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit similique atque dolores voluptas mollitia perferendis repellendus repellat, iste incidunt necessitatibus!</p>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <div className='hero-card '>Clients <span>320+</span></div>
                        <div className='hero-card'>states <span>40+</span></div>
                        <div className='hero-card'>Machines <span>460+</span></div>
                    </div>
                    {/* add a div and 2 cta buttons and style them dark and orange and make them next to each other nad little rounded corners */}
                    <div className='flex gap-4'>
                        <button className='bg-white text-black px-4 py-2 rounded-lg'>Our Products &rarr;</button>
                        <button className='bg-white text-black px-4 py-2 rounded-lg'>Contact Us</button>
                        </div>
                    
                </div>
            </main>


        </>
    )
}

export default Home