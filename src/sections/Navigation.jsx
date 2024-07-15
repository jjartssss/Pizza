import React from 'react'
import cartIcon from '../assets/home/cart.svg'
const Navigation = () => {
  return (
    <div className='absolute flex justify-center z-50 w-full h-[70px]'>
        {/* Nav Container  */}
        <div className='flex w-full max-w-[1500px]'>
            {/* LOGO HERE  */}
            <div className='ml-32 w-fit h-fit bg-jt-dark rounded-b-xl'>
                {/* Red line  */}
                <div className='w-full h-[20px] mt-5 bg-jt-red'></div>
                <div className='px-10 py-5'>
                    <h2 className='unlock-regular txt-70 text-jt-white'>Jjarts</h2>
                    <h2 className='unlock-regular txt-70 ml-5 text-jt-white'>Pizza</h2>
                </div>
            </div>

            <div>
                <ul className='flex py-10 px-20 gap-x-10 bahiana-regular txt-32'>
                    <li>ABOUT</li>
                    <li>MENU</li>
                    <li>DELIVERY</li>
                    <li>CONTACT</li>
                </ul>
            </div>
            <div className='flex justify-end h-fit  w-full  right-0'>
                <img src={cartIcon} className='py-5' />
            </div>
        </div>
    </div>
  )
}

export default Navigation