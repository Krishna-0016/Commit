import React from 'react'

const Heading = ({text,heading}) => {
    return (
        <div className='flex flex-col gap-1'>
            <div className='flex gap-[5px] items-center'>
                <span className=' h-[2px] w-6 Gradient_Background'></span>
                <p className='Gradient_Text'>{text}</p>                
            </div>
            <h2>
                {heading}
            </h2>
        </div>
    )
}

export default Heading