import Logo from './../assets/Logo.svg';
import Facebook from './../assets/Facebook.svg';
import Instagram from './../assets/Instagram.svg';
import LinkedIn from './../assets/LinkedIn.svg';
import Twitter from './../assets/Twitter.svg';
import LinkImg from './../assets/Link.svg';
import About from './../assets/About.svg';
import LocationImg from './../assets/Location_on.svg';
import Phone from './../assets/Phone.svg';
import Mail from './../assets/Mail.svg';
import Gallery from './../assets/Gallery.svg';
import { GalleryImgs } from '../utilities/constants';

export const Input = () => (
    <div className='relative'>
        <input
            placeholder='Enter Your Mail'
            className='p-3 w-full placeholder:text-gray-300 text-14 rounded-full' />
        <button className=' top-[8px] right-[8px] absolute Gradient_Background text-14 rounded-full py-1 px-2 text-white'>Contact Us</button>
    </div>
)

const Footer = () => {
    return (
        <div className='w-full  min-h-[50vh] Footer Center gap-[30px] flex-col pt-[120px] pb-[60px]'>
            <div className='Inner_Container  h-full flex max-lg:flex-col gap-[30px] '>
                <div className='flex flex-col w-full gap-3'>
                    <img width={104} src={Logo} alt="Logo" />
                    <div className='flex gap-2'>
                        <img className='Footer_Icons' src={Facebook} alt="instagram" />
                        <img className='Footer_Icons' src={LinkedIn} alt="linkedin" />
                        <img className='Footer_Icons' src={Instagram} alt="facebook" />
                        <img className='Footer_Icons' src={Twitter} alt="twitter" />
                    </div>
                    <Input />
                </div>
                <div className='flex flex-col w-full'>
                    <div className='flex items-center mb-4 gap-[10px]'>
                        <img src={LinkImg} width={40} alt="Link" />
                        <h4 className='text-24 text-blue'>Quick Links</h4>
                    </div>
                    <div className='flex flex-col items-start '>
                        <p className='Nav_Links'>About Us</p>
                        <p className='Nav_Links'>Career</p>
                        <p className='Nav_Links'>Contact Us</p>
                        <p className='Nav_Links'>Sign In</p>
                    </div>
                </div>
                <div className='flex flex-col w-full'>
                    <div className='flex items-center gap-[10px] mb-4'>
                        <img src={About} width={40} alt="Link" />
                        <h4 className='text-24 text-blue'>About</h4>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <div className='flex items-start gap-2 cursor-pointer'>
                            <img src={LocationImg} alt="location" />
                            <p className=''>208/14 Navi Mumbai,<br />Mumbai, 110012,<br />India</p>
                        </div>
                        <div className='flex items-center gap-2 cursor-pointer'>
                            <img src={Phone} alt="phone" />
                            <p className=''> +91 2230144123</p>
                        </div>
                        <div className='flex items-center gap-2 cursor-pointer'>
                            <img src={Mail} alt="mail" />
                            <p className=''>Info@hdfcsec.com</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col w-full'>
                    <div className='flex items-center gap-[10px] mb-4'>
                        <img src={Gallery} width={40} alt="Link" />
                        <h4 className='text-24 text-blue'>Gallery</h4>
                    </div>
                    <div class="grid grid-cols-2 md:grid-cols-2 gap-[15px] max-lg:grid-cols-2">
                        {GalleryImgs.slice(0,4).map((item, index) => (<img key={index} className='rounded-[10px] transform transition-transform ease-in-out hover:scale-110' src={item} alt='Gallery' />))}
                    </div>
                </div>
            </div>
            <div className='Inner_Container  border-t-[1px] border-gray-300 w-full pt-4 '>
                <p className='text-14 max-lg:text-center text-gray-300'>Copyrights @2023 All Rights Reserved</p>
            </div>
        </div>
    )
}

export default Footer