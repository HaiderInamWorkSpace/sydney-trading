import React from 'react'

function Subscribe() {
  return (
    <div className='w-full px-4 py-16 bg-black text-white text-center'>
        <h1>Join Our Sydney Traders Community</h1>
        <div className='py-4'>
            <input className='text-center p-3 rounded-3xl mr-4' type='email' placeholder='Enter your email' />
            <button>Sign Up</button>
        </div>
        <div className='text-xs sm:text-base flex items-center justify-center py-2'>
            <input className='sm:mr-2 hidden sm:flex' type='checkbox' />
            <p>Yes, I agree to recieve email communications from Sydney Trading.</p>
        </div>
    </div>
  )
}

export default Subscribe