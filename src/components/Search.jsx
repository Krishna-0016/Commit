import { useRef } from 'react';
import EmployeeCard from './../assets/Card.svg';
import LocationImg from './../assets/Location.svg';
import DownArrow from './../assets/Dropdown.svg';

export const SelectOption = ({ name, item, svg }) => (
    <div className='flex gap-[10px] items-center'>
        <div>
            <img src={svg} alt="" />
        </div>
        <div>
            <div className='flex gap-1'>
                <select className='bg-transparent text-grey '>
                    <option>{name}</option>
                </select>
                <img src={DownArrow} alt='Down Arrow' />
            </div>
            {item}
        </div>
    </div>
)

const Search = ({ className }) => {
    const options = useRef({
        location: "New Delhi",
        jobProfile: "Dev Ops"
    })

    return (
        <div className='w-full p-[20px] bg-[#F6FAFD] flex justify-between rounded-[20px] flex-wrap gap-[20px] '>
            <div className='flex gap-[40px]'>
                <SelectOption svg={LocationImg} name='Location' item={options.current.location} />
                <SelectOption svg={EmployeeCard} name='Job Profile' item={options.current.jobProfile} />
            </div>
            <button className='Gradient_Button max-lg:w-full'>Find Job</button>
        </div>
    )
}

export default Search