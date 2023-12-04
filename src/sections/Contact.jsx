import Man_Laptop from './../assets/Man_Laptop.png'
import { Input } from '../components/Footer'

const Contact = () => {
    return (
        <div className="w-full Center py-[80px]">
            <div className="Inner_Container">
                <div className="flex items-end max-lg:flex-col-reverse max-lg:min-h-[50vh]  Light_Gradient_Background rounded-[20px] lg:h-[50vh]">
                    <div className='w-full Center px-[40px]'>
                        <img src={Man_Laptop} alt="" />
                    </div>
                    <div className='w-full h-full justify-center flex p-[20px] flex-col gap-[10px]'>
                        <h2 className='text-black '>Feel Free to<br />
                            <span className='Gradient_Text'>Contact Us</span></h2>
                        <p className='text-black mb-[20px]'>For any inquiries or further information regarding career opportunities at HDFC Sky, please feel free to reach out to us.</p>
                        <div className='lg:w-2/3'>
                            <Input />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact