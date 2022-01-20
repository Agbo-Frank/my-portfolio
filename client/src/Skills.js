import { skills } from './db'

function Skills(){
    return(
        <div className="scroll-snap-align my-20">
            <h1 className="text-primary font-bold text-4xl width-full text-center p-2 border-solid border-primary border-b">My <span className="text-white">Skills</span></h1>
            <div className="my-5 grid justify-center gap-3 responsive-grid2">
                {
                    skills.map(skill => (
                        <div className="flex flex-col justify-center gap-3 w-full p-4 bg-black-200">
                            <img src={skill.img} alt="html" className="mx-auto w-12 object-cover" />
                            <h4 className="text-center">{skill.name}</h4>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Skills