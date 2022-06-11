import { FaUser } from "react-icons/fa";

function Home(){
    return(
        <div id="home" className="h-screen w-full scroll-snap-align">
            <div className="h-full w-full px-2 sm:px-10 lg:pl-16 xl:pl-36 flex justify-center items-center flex-col text-left ">
                <p className="self-start text-xl font-semibold">HELLO THERE!</p>
                <h1 className="self-start text-4xl font-bold my-2">I'M <span className="text-primary">AGBO FRANK</span></h1>
                <p className="text-left my-4">
                    I started my journey as a Web Developer in February 2020 and since 
                    then I've been able to learn a lot and grow myself. I code for fun and build 
                    amazingly beautiful and simple things as a hobby. I Pay attention to best practices 
                    known to me and I'm always open to learn new things and take on challenging paths.
                    Apart from web developement, I also pay attention to AI and IoT and also spend my 
                    free time doing other geeky stuff.
                </p>
                <a 
                href="https://docs.google.com/document/d/19_QTlrY98E-lqQAhZ-cVRilOwOnKawr0gmmN8YrdtR4/edit?usp=sharing" 
                className="self-start flex gap-2 bg-black-300 rounded-full px-7 py-1 justify-center items-start hover:bg-primary">
                    About Me 
                    <FaUser className="text-sm self-center"/>
                </a>
            </div>
        </div>
    )
}

export default Home