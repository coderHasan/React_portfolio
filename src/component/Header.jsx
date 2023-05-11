
import React from 'react'
import Logo from '../assets/m.png'

const Header = () => {
  return (
    <header className=' py-6'>
        <div className='container mx-auto'>
            <div className=' flex justify-between items-center'>
                <a href="#" className='font-primary font-semibold text-[25px]'>
                    Mehedi H.
                </a>

                <button className='btn btn-sm'>
                    Work with me
                </button>

            </div>
        </div>
    </header>
  )
}

export default Header