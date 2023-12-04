import Heading from "../components/Heading"
import { useRef } from "react"
import { PrevNext } from "./Testimonials"
import Search from "../components/Search"
import { SelectOption } from "../components/Search"
import EmployeeCard from './../assets/Card.svg';
import LocationImg from './../assets/Location.svg';
import Full from './../assets/Full.svg';
import { JobProfiles } from "../utilities/constants";
import Part from './../assets/Part.svg';
import Hybrid from './../assets/Hybrid.svg';
import Remote from './../assets/Remote.svg';

const Jobs = () => {


    const Card = ({ designation, department, img, jobType, work, ctc, description }) => {
        return (
            <div className="w-full Card bg-white shadow-lg px-[20px] py-[40px] gap-[20px] flex flex-col rounded-[20px]">
                <div className="flex gap-[10px]">
                    <img src={img} className="m-[-15px]" alt="" />
                    <div>
                        <h3 className="leading-none text-[22px] text-dark-grey">{designation}</h3>
                        <p className="text-grey">{department}</p>
                    </div>
                </div>
                <div className="flex gap-[10px]">
                    {jobType === "F" && <img src={Full} alt="Full Time" />}
                    {jobType === "P" && <img src={Part} alt="Part Time" />}
                    {work === "R" && <img src={Remote} alt="Remote" />}
                    {work === "H" && <img src={Hybrid} alt="Hybrid" />}
                </div>
                <div>
                    <p>{description}</p>
                </div>
                <div className="w-full flex justify-between ">
                    <h3 className="text-[18px]">{ctc}</h3>
                    <p className="text-14 Gradient_Text">Posted 1hr Ago</p>
                </div>
            </div>
        )
    }

    return (
        <div className="w-full Center min-h-screen py-[60px]">
            <div className="Inner_Container Jobs flex flex-col gap-[30px] max-lg:gap-[20px]">
                <Heading
                    text='Featured Jobs'
                    heading={<>Explore<span className="Gradient_Text"> Opportunities </span><br className="lg:hidden"/> with HDFC Sky</>}
                />
                <div className="flex justify-between max-lg:flex-col max-lg:hidden">
                    <p className="lg:w-1/2">
                        Join us in shaping the future of finance. Explore diverse career opportunities across various functions including
                    </p>
                    <PrevNext />
                </div>
                <Search />

                <div className="w-full flex gap-[20px] max-lg:flex-col">
                    {JobProfiles.map((item) => {
                        const { designation,
                            department,
                            img,
                            jobType,
                            work,
                            ctc,
                            description } = item
                        return (
                            < Card
                                designation={designation}
                                department={department}
                                img={img}
                                jobType={jobType}
                                work={work}
                                ctc={ctc}
                                description={description}
                            />
                        )
                    }
                    )}
                </div>
                <div className="lg:hidden w-full flex justify-end">
                    <PrevNext />
                </div>
                <div className="w-ful flex gap-[20px] Center">
                    <button className="Gradient_Outline">
                        View Instructions
                    </button>
                    <button className="Gradient_Button">
                        View More
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Jobs