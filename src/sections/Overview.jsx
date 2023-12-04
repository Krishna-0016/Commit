import ReactPlayer from 'react-player';
import { useRef } from 'react';
import Heading from './../components/Heading'
import Overview1 from './../assets/Overview1.svg'
import Overview2 from './../assets/Overview2.svg'
import Overview3 from './../assets/Overview3.svg'
import Overview4 from './../assets/Overview4.svg'

const Overview = () => {
    const videoSrc = 'videos/Video.mp4'
    const playerRef = useRef(null);
    const Content = ({ heading, para, icon }) => (
        <div className='Content'>
            <img src={icon} alt='icon' className='ml-[-20px] mb-[-20px]' />
            <h3 className=' text-24 text-black border-l-4 pl-2 leading-none ml-[-12px]'>{heading}</h3>
            <p className=''>{para}</p>
        </div>
    );

    return (
        <div className='w-full Overview Center max-lg:min-h-screen b-bottom Overview_Background max-lg:pt-[80px]'>
            <div className='Inner_Container flex-col gap-[30px] py-[80px] items-center max-lg:flex-col'>
                <div className='max-lg:mb-[20px]'>
                    <Heading
                        text={'Culture and Overview'}
                        heading={<>Why Choose <span className="Gradient_Text"><br className='lg:hidden'/>HDFC Sky?</span></>}
                    />
                </div>
                <div className='flex items-center gap-[30px] max-lg:flex-col-reverse max-lg:gap-[20px]'>
                    <div className='w-full'>

                        <div className='grid grid-cols-2 gap-x-[40px] max-lg:flex max-lg:flex-col'>
                            <Content
                                icon={Overview1}
                                heading="Innovative Culture"
                                para="Embrace cutting-edge technologies."
                            />
                            <Content
                                icon={Overview2}
                                heading="Career Growth"
                                para="Access to continuous learning & Development."
                            />
                            <Content
                                icon={Overview3}
                                heading="Diversity & Learn"
                                para="Embrace diversity in thoughts."
                            />
                            <Content
                                icon={Overview4}
                                heading="Work-Life Balance"
                                para={<>Focus on employee <br />wellness.</>}
                            />
                        </div>
                    </div>
                    <div className='w-full h-full flex Center'>
                        <div className='max-lg:h-[150px]  w-full  Center overflow-hidden'>
                            <ReactPlayer
                                ref={playerRef}
                                url={videoSrc}
                                width={'100%'}
                                controls={false}
                                loop={true}
                                playing={true}
                                muted={true}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Overview