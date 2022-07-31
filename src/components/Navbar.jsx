import React, {useState} from 'react'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <div className='w-full h-[90px] bg-black'>
        <div className='max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full'>
            <div>
                <h1 className='text-[#00d8ff] text-lg sm:text-2xl'>SYDNEY TRADING</h1>
            </div>
            <div className='hidden md:flex'>
                <ul className='flex text-white items-center'>
                    <li>Platform</li>
                    <li>Developers</li>
                    <li>Community</li>
                    <li>About</li>
                    <button className='ml-4'>Use Defi</button>
                </ul>
            </div>

            {/* Hamburger Menu */}
            <div onClick={handleNav} className='block md:hidden'>
                {!nav ? <AiOutlineMenu className='text-white' size={30} /> : <AiOutlineClose className='text-white' size={30} /> }
            </div>

            {/* Mobile Menu */}
            <div className={nav ? 'w-full bg-black text-white absolute top-[90px] left-0 flex justify-center text-center' : 'hidden'}>
                <ul>
                    <li className='text-xl'>Platform</li>
                    <li className='text-xl'>Developers</li>
                    <li className='text-xl'>Community</li>
                    <li className='text-xl'>About</li>
                    <button className='m-8'>Use Defi</button>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar