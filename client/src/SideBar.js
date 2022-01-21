import picture from './img/profil-pic.jpg'

import { FaTimes } from "react-icons/fa";

function SideBar({ toggleSideBar, setToggleSideBar }){
    return(
        <header className={`fixed top-0 ${toggleSideBar? `-left-0` :`-left-full`} z-10 lg:-left-0 bg-black-200 h-screen flex flex-col justify-center items-center w-full sm:w-3/4 md:w-2/3 lg:w-1/3 pt-10 border-primary overscroll-auto text-center`}>
            <FaTimes className="absolute top-2 text-2xl right-2 text-white hover:text-primary lg:hidden" onClick={() => setToggleSideBar(false)}/>
            <img src={picture} alt="frank" className="block w-44 h-44 md:w-48 md:h-48 lg:w-52 lg:h-52 mb-4 object-cover rounded-full border-primary border-4" />
            <div>
                <h2 className="text-4xl">Agbo Francis</h2>
                <p className="text-lg">Web Developer</p>
            </div>
            <ul className="w-full px-10 py-4 mb-3">
                <li 
                onClick={() => setToggleSideBar(false)} 
                className="w-full">
                    <a href="#home" className="nav-btn">Home</a>
                </li>
                <li 
                onClick={() => setToggleSideBar(false)} 
                className="w-full">
                    <a href="#About" className="nav-btn">About</a>
                </li>
                {/* <li className="w-full"><a href="#Eduction" className="nav-btn">Eduction</a></li> */}
                <li 
                className="w-full"
                onClick={() => setToggleSideBar(false)}>
                    <a href="#Portfolio" className="nav-btn">Portfolio</a>
                </li>
                <li 
                className="w-full" 
                onClick={() => setToggleSideBar(false)}>
                    <a href="#Contact" className="nav-btn">Contact</a>
                </li>
            </ul>
        </header>
    )
}

export default SideBar