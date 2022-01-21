import Slider from "react-slick";
import img from "./img/icon-1.png"
import { settings } from "./config";
import { FaGithub } from "react-icons/fa"


function Portfolio(){
    function Project({img, link, name, description}){
        return(
            <div className="group relative bg-primary flex items-center justify-center w-36 h-44 sm:w-full rounded-md overflow-hidden">
                <div className="absolute left-0 top-0 w-full h-0 flex transition-height duration-700 group-hover:h-full bg-black-100 bg-opacity-25 justify-center items-center">
                    <div className="w-full p-6  text-sm text-center">
                        <h1 className="font-bold hidden group-hover:block">{ name }</h1>
                        <p className="hidden group-hover:block">{ description }</p>
                    </div>
                </div>
                <a className="absolute block bg-black-300 w-7 h-7 hover:w-14 p-1 rounded-full left-0 top-0 m-3" href={link} target="_blank" rel="noreferrer"><FaGithub className="text-xl"/></a>
                <img className="w-full object-contain h-full" src={img} alt={name}/>
            </div>
        )
    }
    
    return(
        <>
        <div className="w-full px-2 sm:px-10 my-18 md:py-7 md:pl-0 lg:pl-16 xl:pl-32 scroll-snap-align" id="Portfolio">
            <h1 className="text-primary font-bold text-4xl width-full text-center py-5 px-2 border-solid border-primary border-b">My <span className="text-white">Portfolio</span></h1>
            <div className="overflow-x-hidden gap-6 noScroll my-10">
                <div className="group relative bg-primary flex items-center justify-center w-36 h-44 rounded-md overflow-hidden">
                    <div className="absolute left-0 top-0 w-full h-0 flex transition-height duration-700 group-hover:h-full bg-black-100 bg-opacity-25 justify-center items-center">
                        <div className="w-full py-4 px-2  text-sm text-center">
                            <h1 className="font-bold text-sm hidden group-hover:block">Glass</h1>
                            <p className="hidden text-xs group-hover:block">This is an E-commerce Site where one can buy and His or Her glasses</p>
                            <a href="https://glass-app-1.herokuapp.com" className="hidden group-hover:block border border-solid border-white rounded-full px-3 py-1 text-xs hover:bg-white hover:text-black-100" >preview <i className="fa fa-eye"></i></a>
                        </div>
                    </div>
                    {/* <a className="absolute block bg-black-300 w-7 h-7 hover:w-14 p-1 rounded-full left-0 top-0 m-3" href="www.google.com" target="_blank" rel="noreferrer"><FaGithub className="text-xl"/></a> */}
                    <img className="w-6/12 object-contain h-auto" src={img} alt="glasses"/>
                </div>
            </div>
            {/* <div className="sm:hidden my-10">
                <Slider {...settings} >
                    <div>
                        <Project img={img} link="www.google.com" name="my first Project" description="This is an E-commerce Site where you can buy and sell your product"/>
                    </div>
                </Slider>
            </div> */}
        </div>

        <ul>
            <li></li>
        </ul>
        </>
    )
}

export default Portfolio
// grid responsive-grid overflow-x-hidden gap-6 noScroll my-10
{/* <div className="grid responsive-grid overflow-x-hidden gap-6 noScroll my-10">
                <div className="group relative bg-primary flex items-center justify-center w-36 h-44 sm:w-full rounded-md overflow-hidden">
                    <div className="absolute left-0 top-0 w-full h-0 flex transition-height duration-700 group-hover:h-full bg-black-100 bg-opacity-25 justify-center items-center">
                        <div className="w-full p-6  text-sm text-center">
                            <h1 className="font-bold hidden group-hover:block">Glass</h1>
                            <p className="hidden group-hover:block">This is an E-commerce Site where</p>
                        </div>
                    </div>
                    <a className="absolute block bg-black-300 w-7 h-7 hover:w-14 p-1 rounded-full left-0 top-0 m-3" href="www.google.com" target="_blank" rel="noreferrer"><FaGithub className="text-xl"/></a>
                    <img className="w-6/12 object-contain h-auto" src={img} alt="glasses"/>
                </div>
            </div> */}