import Skills from "./Skills"

function About(){
    function Box({num, text}){
        return(
            <div className="group flex flex-col justify-center items-center gap-3 sm:gap-4 p-1 sm:p-3 bg-black-200 hover:bg-primary">
                <h1 className="text-primary text-4xl font-bold group-hover:text-black-100">{ num }</h1>
                <p className="font-semibold text-center group-hover:text-black-100">{text}</p>
            </div>
        )
    }
    return(
        <div className="px-2 sm:px-10 lg:pl-16 xl:pl-36 scroll-snap-align flex flex-col" id="About">
            <h1 className="text-primary font-bold text-4xl width-full text-center p-2 border-solid border-primary border-b">About <span className="text-white">Me</span></h1>
            <div className="flex justify-between my-4 flex-col gap-10 sm:flex-row">
                <div className="space-y-4 w-full sm:w-1/2">
                    <p className="font-semibold"><span>Name:</span> <span className="text-primary ml-2">Agbo Frank</span></p>
                    <p className="font-semibold"><span>Age:</span> <span className="text-primary ml-2">21</span></p>
                    <p className="font-semibold"><span>stack:</span> <p className="inline ml-2"><span className="text-blue">React.js</span> / <span className="text-green-100">MongoDB</span> / <span className="text-green-200">Node.js</span> </p></p>
                    <p className="font-semibold"><span>Language:</span> <span className="text-primary ml-2">Igbo, Yoruba English</span></p>
                </div>
                <div className="w-full sm:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <Box num="1+" text="Years of Experience" />
                    <Box num="5+" text="Projects Completed" />
                    {/* <Box num="140+" text="Happy Customers" /> */}
                    {/* <Box num="10+" text="Awards Won"/> */}
                </div>
            </div>
            <Skills />
        </div>
    )
}

export default About