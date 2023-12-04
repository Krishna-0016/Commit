import Landing_Image from './../assets/Landing_Image.png';
import Employees from './../assets/Employees.png';
import Search from '../components/Search';

const Landing = () => {

    return (
        <div className="w-full min-h-screen flex Center">
            <div className="Landing_Section max-lg:mt-[74px] max-lg:flex-col-reverse relative Inner_Container h-full flex ">
                <div className="w-full justify-center  flex flex-col gap-[20px] max-lg:gap-[10px]">
                    <h1>
                        Join the Future
                        of Financial
                        Excellence
                    </h1>
                    <p >
                        At Sky, we're more than a financial institution – we're a powerhouse of innovation, empowerment, and growth.
                    </p>
                    <Search />
                    <div className='flex items-center gap-[15px]'>
                        <img src={Employees} alt="Employees" />
                        <p className='leading-tight text-dark-grey'>10k+ Happy<br />Employees</p>
                    </div>
                </div>
                <div className="w-full flex h-full  flex-col  items-center justify-center">
                    <img className='w-[80%]' src={Landing_Image} alt="" />
                </div>

            </div>
        </div>
    )
}

export default Landing