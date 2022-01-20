import { useState } from "react";
import axios from 'axios'
import { FaEnvelope, FaPhone, FaWhatsapp, FaPaperPlane } from "react-icons/fa";

function Contact({ setMessages }){
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [projectName, setProjectName] = useState('')
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)

    async function submit(e){
        e.preventDefault()
        setLoading(true)

        if(!name || !message){
            await setTimeout(() => setMessages(''), 5000);
            setLoading(false)
            return setMessages("Please enter either your name or message")
        }
        let docs = {
            name,
            email,
            projectName,
            message
        }
        let body = JSON.stringify(docs),
        let res = await axios.post('/', body, {headers: {"Content-Type": "application/json"}})
        let data = await res.json()
        console.log(data);
        if(data.message){
            setName('')
            setProjectName('')
            setEmail('')
            setMessage('')
            setLoading(false)
            await setTimeout(() => setMessages(''), 5000);
            return setMessages(data.message)
        }
        if(data.err){
            setLoading(false)
            await setTimeout(() => setMessages(''), 5000);
            return setMessages('Something went wrong while sending Please Try sending again')
        }
    }
    return(

        <div className="w-full my-20 px-2 sm:px-10 md:pl-0 lg:pl-16 xl:pl-28 scroll-snap-align" id="Portfolio">
            <h1 className="text-primary font-bold text-4xl width-full text-center px-2 border-solid border-primary border-b">Contact <span className="text-white">Me</span></h1>
            <div className="flex xl:flex-row lg:flex-col md:flex-row flex-col gap-8 w-full justify-between my-10">
                <div className="h-full w-screen my-auto xl:w-1/3 lg:w-full md:w-1/3 flex">
                    <ul className="space-y-5">
                        <h1 className="font-extrabold text-2xl mb-2">CONTACT INFO</h1>
                        <li className="flex gap-3">
                            <FaEnvelope className="text-primary text-2xl"/> 
                            <div className="flex flex-col gap-3">
                                <p className="font-bold text-xl">Address:</p>
                                <a href="mailto:agbofrank531@gmail.com" className="text-sm text-black-400">agbofrank531@gmail.com</a>
                            </div>
                        </li>
                        <li className="flex gap-3" onClick={() => {
                            window.location.href = "tel: 09061588791"
                        }}>
                            <FaPhone className="text-primary text-2xl"/>
                            <div className="flex flex-col gap-3">
                                <p className="font-bold text-xl">Phone Number:</p>
                                <a className="text-sm text-black-400"> 09061588791</a>
                            </div>
                        </li>
                        <li className="flex gap-3">
                            <FaWhatsapp className="text-primary text-2xl"/>
                            <div className="flex flex-col gap-3">
                                <p className="font-bold text-xl">What App:</p>
                                <a className="text-sm text-black-400">09061588791</a>
                            </div> 
                        </li>
                    </ul>
                </div>
                <form className="md:w-2/3 lg:w-full xl:w-2/3" onSubmit={(e) => submit(e)}>
                    <input 
                    type="text" 
                    placeholder="Name" 
                    className="bg-black-200 p-3  w-full rounded-md mb-3"  
                    value={name}
                    onChange={(e) => setName(e.target.value)}/>
                    <input 
                    type="email" 
                    placeholder="Email" 
                    className="bg-black-200 p-3 w-full rounded-md mb-3" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}/>
                    <input 
                    type="text" 
                    placeholder="Project Name" 
                    className="bg-black-200 p-3 w-full rounded-md mb-3" 
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}/>
                    <textarea 
                    placeholder="Message..." 
                    className="resize-none bg-black-200 h-60 p-3 w-full rounded-md mb-3"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}></textarea>
                    <button type="submit" className="self-start flex gap-2 bg-black-300 rounded-full px-7 py-1 justify-center items-start hover:bg-primary">
                        {loading ? 'Sending...' : 'Send'} 
                        <FaPaperPlane className="text-sm self-center"/>
                    </button >
                </form>
            </div>
        </div>
    )
}

export default Contact