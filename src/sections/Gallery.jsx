import React from 'react'
import { GalleryImgs } from '../utilities/constants';

const Gallery = () => {



    return (
        <div className='w-full Center py-[80px]'>
            <div className='Inner_Container flex flex-col gap-[40px] max-lg:gap-[20px] Gallery'>
                <div className='flex w-full flex-col gap-1 '>
                    <div className='flex gap-[5px] justify-center max-lg:justify-start items-center '>
                        <span className=' h-[2px] w-6 Gradient_Background'></span>
                        <p className='Gradient_Text'>Gallery</p>
                    </div>
                    <h2 className='lg:text-center'>
                        Some Views of our <br className='lg:hidden' /><span className="Gradient_Text">HDFC Sky</span>
                    </h2>
                </div>
                <div class="grid grid-cols-4 md:grid-cols-4 gap-[20px] max-lg:grid-cols-2">
                    {GalleryImgs.map(item => (<img className='rounded-[20px] transform transition-transform ease-in-out hover:scale-110' src={item} alt='Gallery' />))}
                </div>
                <div className='w-full Center'>
                    <button className='Gradient_Button'>View More</button>
                </div>
            </div>


        </div>
    )
}

export default Gallery