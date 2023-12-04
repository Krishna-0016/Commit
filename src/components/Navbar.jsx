
import { useMediaQuery } from 'react-responsive';
import Logo from './../assets/Logo.svg';
import { useState } from 'react';
import Hamburger from './../assets/Hamburger.svg';
import Search from './../assets/Search.svg';
import Close from './../assets/Close.svg';
import { motion } from "framer-motion";

const Navbar = () => {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1024px)' });
    const [closeMenu, setCloseMenu] = useState(false);


    return (
        <div className="w-full fixed top-0 flex z-[99] bg-[rgba(255,255,255,0.95)] items-center justify-center h-[74px] border-b-2 border-light-grey">
            <div className="Inner_Container flex max-lg:justify-between  ">
                <img
                    className='w-[104px]'
                    src={Logo}
                    alt='Logo'
                />
                {
                    !isTabletOrMobile && <>
                        <div className='w-full min-h-full items-center justify-center flex gap-[30px]'>
                            <div className='relative'>
                                <p className='Nav_Links'>Jobs </p>
                                <span className='bg-red Center p-[1px] px-[4px] absolute rounded-full top-[-5px] right-[-10px]  text-white text-[8px]'>5</span>
                            </div>
                            <p className='Nav_Links'>About Us</p>
                            <p className='Nav_Links'>Contact Us</p>
                        </div>
                        <div className='min-h-full flex items-center relative max-lg:hidden'>
                            <input
                                className='border-2 text-black text-sm font-light placeholder:text-gray-300 p-[10px] rounded-full'
                                type="text"
                                placeholder='Search' />
                            <button className='Gradient_Background rounded-full p-3 absolute right-[5px]'>
                                <img src={Search} alt="" />
                            </button>
                        </div>

                        <div className='flex justify-end w-full gap-[20px] max-lg:hidden'>
                            <button className='Gradient_Outline'>Sign In</button>
                            <button className='Gradient_Button'>Careers</button>
                        </div>
                    </>
                }
                {
                    isTabletOrMobile && (
                        <div className='Center'>
                            <img src={Hamburger} alt='Hamburger' width={40} onClick={() => { setCloseMenu(!closeMenu) }} />
                            {closeMenu &&
                                <motion.div
                                    initial={{ opacity: 0, translateY: -100 }}
                                    animate={{ opacity: 1, translateY: 0 }}

                                    exit={{ opacity: 0, translateY: -100 }}
                                    className='absolute min-h-screen h-screen w-full bg-white shadow-lg left-0 top-0 p-[20px]'>
                                    <div className='w-full flex flex-col'>

                                        <img src={Close} onClick={() => { setCloseMenu(false) }} width={40} alt="" />
                                        <div className='w-full min-h-full items-center justify-center flex-col flex gap-[10px]'>
                                            <div className='min-h-full w-full mt-[20px] mb-[40px] flex items-center relative '>
                                                <input
                                                    className='border-2 w-full text-black text-sm font-light placeholder:text-gray-300 p-[10px] rounded-full'
                                                    type="text"
                                                    placeholder='Search' />
                                                <button className='Gradient_Background rounded-full p-3 absolute right-[5px]'>
                                                    <img src={Search} alt="" />
                                                </button>
                                            </div>
                                            
                                            <div className='relative'>
                                                <p className='Nav_Links'>Jobs </p>
                                                <span className='bg-red Center p-[1px] px-[4px] absolute rounded-full top-[-5px] right-[-10px]  text-white text-[8px]'>5</span>
                                            </div>
                                            <p className='Nav_Links'>About Us</p>
                                            <p className='Nav_Links'>Contact Us</p>
                                        </div>
                                        <div className='flex justify-center mt-[40px] w-full gap-[20px] '>
                                                <button className='Gradient_Outline'>Sign In</button>
                                                <button className='Gradient_Button'>Careers</button>
                                            </div>
                                    </div>
                                </motion.div>
                            }
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Navbar