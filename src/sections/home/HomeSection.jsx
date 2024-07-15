import React from 'react'
import redSideSVG from '../../assets/home/red-side.svg'
import darkCenterSVG from '../../assets/home/dark-center.svg'
import pizza from '../../assets/home/p1.png'
import botPattern from '../../assets/home/botpart.svg'

const HomeSection = () => {
  return (
    <div className='flex justify-center  w-full h-screen bg-jt-lite-yellow'>
        <img src={botPattern} className='-bottom-96 absolute w-full' />
        <img src={redSideSVG} className='absolute w-1/3 object-cover right-0 top-0 h-[125%]' />
        <img src={darkCenterSVG} className='top-16 absolute w-full' />
        <div className='grid grid-cols-2 absolute top-0 w-full h-screen max-w-[1500px] items-center content-center justify-center'>
            <div className='ml-32 flex items-center'>
                <div className='mt-60 w-[90%] h-fit p-5'>
                    <h1 className='unlock-regular txt-90 text-jt-white'>Everything is <bold className='text-jt-orange'>better</bold></h1>
                    <h1 className='unlock-regular txt-90 text-jt-red' >with Pizza</h1>
                    <button className='mt-5 btnPrimary txt-72 bahiana-regular'>ORDER NOW</button>
                </div>
            </div>
            <div className='flex justify-center overflow-hidden'>
                <img src={pizza} className='p-16 min-w-[400px] min-h-[400px] aspect-square' />
            </div>
        </div>
    </div>
  )
}

export default HomeSection