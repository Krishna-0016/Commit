import { useState } from "react"
import Heading from "../components/Heading"
import { testimonials } from "../utilities/constants"
import Quotes from './../assets/quotes.svg'

export const PrevNext = ({ prev, next }) => (

    <div className="flex gap-[20px]">
        <button onClick={prev} className=" w-[50px] h-[50px] leading-none font-semibold  text-grey rounded-full border-[1px] border-grey cursor-pointer">{'<'}</button>
        <button onClick={next} className="w-[50px] h-[50px] leading-none font-semibold bg-white  text-blue  rounded-full border-[1px] border-white cursor-pointer shadow-md">{'>'}</button>
    </div>

)

export const Testimonial = ({ para, img, name, designation, index }) => {

    const visible = ' bg-white justify-between rounded-[20px] flex flex-col gap-[20px] p-[40px] shadow-md relative';
    const transparent = ' bg-white opacity-[30%] scale-[90%] justify-between rounded-[20px]  p-[40px] flex flex-col gap-[20px] p-[20px] shadow-md'
    return (
        <div className={index % 2 === 0 ? visible : transparent}>
            {index % 2 === 0 && <img src={Quotes} alt="profile" width={50} className="absolute right-0 top-[-20px]" />}
            <p className="">{para}</p>
            <div className="flex items-center justify-start gap-3">
                <img
                    className="rounded-[60px] h-[50px] w-[50px]"
                    src={img}
                    alt="profile" />
                <div>
                    <p className="text-16  text-dark-grey leading-none">{name}</p>
                    <p className="text-14 text-grey">{designation}</p>
                </div>
            </div>
        </div>
    )
}

const Testimonials = () => {
    const [page, setPage] = useState(0);
    console.log(page ,testimonials.length)
    return (
        <div className="w-full Center Light_Gradient_Background py-[60px] overflow-hidden">
            <div className="Inner_Container relative gap-[30px] max-lg:gap-[20px] flex max-lg:flex-col">
                <div className="w-full flex flex-col gap-[10px]">
                    <Heading
                        heading={<><span className="text-black">Empowering Careers</span><br /><span className="Gradient_Text">Inspiring Journeys</span></>}
                        text={'Testimonials'}
                    />
                    <p>
                        Welcome to HDFC Sky, where we believe in nurturing talent, fostering growth, and empowering careers that inspire.
                    </p>
                    <PrevNext
                       
                        prev={() => {
                            if (page > 1) {
                                setPage(page - 1)
                            }
                        }}
                        next={() => {
                            if (page === 6) {
                                return false;
                            } else {
                                setPage(page + 1)
                            }
                        }}
                    />
                </div>
                <div className="w-full flex">
                    <div className="flex gap-[30px] absolute max-lg:hidden w-full">
                        {testimonials.length > 0 &&
                            testimonials.slice(page, page + 2).map((item, index) =>
                            (<Testimonial
                                name={item.name}
                                img={item.img}
                                para={item.para}
                                designation={item.designation}
                                index={index}
                            />))
                        }
                    </div>
                </div>
                <div className="w-full flex lg:hidden">
                    <div className="flex gap-[30px]  w-full">
                        {testimonials.length > 0 &&
                            testimonials.slice(page, page + 1).map((item, index) =>
                            (<Testimonial
                                name={item.name}
                                img={item.img}
                                para={item.para}
                                designation={item.designation}
                                index={index}
                            />))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials