import React from 'react'
import Lindsay from '../assets/Lindsay.png';
import Ravi from '../assets/Ravi.png';
import Bradley from '../assets/Bradley.png';
import Christian from '../assets/Christian.png';

const Leaders = () => {
  const Pics = ({ image, name, designation }) => (
    <div className='text-center'>
      <div className='Light_Gradient_Background rounded-[20px] overflow-hidden '>

      <img src={image} className='transform transition-transform ease-in-out hover:scale-110' alt="Leaders" />
      </div>
      <div className='flex-col flex items-start'>
        <h3 className='text-24 max-lg:text-16 text-dark-grey leading-0'>{name}</h3>
        <p className='text-grey text-16 max-lg:text-14 leading-0 mt-[-5px]'>{designation}</p>
      </div>
    </div>
  )

  return (
    <div className='w-full Center py-[80px] max-lg:py-[40px] Leaders'>
      <div className='Inner_Container '>
        <div className='flex flex-col gap-[30px] max-lg:items-start  justify-center  items-center'>
          <div className='flex flex-col gap-1 '>
            <div className='flex gap-[5px] justify-center max-lg:justify-start items-center '>
              <span className=' h-[2px] w-6 Gradient_Background'></span>
              <p className='Gradient_Text'>Our Leaders</p>
            </div>
            <h2>
              Our Leaders at <br className='lg:hidden'/><span className="Gradient_Text">HDFC Sky</span>
            </h2>
          </div>
          <div className='w-full flex gap-[30px] max-lg:grid grid-cols-2 gap-x-[20px] gap-y-[20px]'>
            <Pics
              image={Lindsay}
              name={'Lindsay Lohan'}
              designation={'CEO'}
            />
            <Pics
              image={Bradley}
              name={'Bradley Martin'}
              designation={'Managing Director'}
            />
            <Pics
              image={Christian}
              name={'Christian Dave'}
              designation={'Chief Officer'}
            />
            <Pics
              image={Ravi}
              name={'Ravi Kumar'}
              designation={'Chief Executive'}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Leaders