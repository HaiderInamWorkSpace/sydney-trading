import React from 'react'
import terminal from '../assets/terminal.png'

const Developers = () => {
  return (
    <div className='w-full text-white bg-black px-8 md:px-16'>
        <div className='max-w-[1240px] mx-auto items-center px-4 py-16 md:flex'>
            
            {/* left */}
            <div>
                <h1>Superpowers for our customers.</h1>
                <p>
                    Checkout the <span className='blue'>documentation</span>, the <span className='blue'>quick start</span> or a guide
                    below to integrate your project with thousands of tokens
                    and billions of liquidity.
                </p>
            </div>

            {/* right */}
            <div className='flex justify-center px-4 py-16'>
                <img  className='max-w-[240px] shadow-lg shadow-cyan-500/50' src={terminal} alt='/' />
            </div>
        </div>
    </div>
  )
}

export default Developers