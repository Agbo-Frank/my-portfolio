import SideBar from "./SideBar";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import Home from "./Home";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Alert from "./Alert/alert";

function App() {
  const [message, setMessage] = useState('')
  const [toggleSideBar, setToggleSideBar] = useState(false)
  function showSideBar(){
    if(toggleSideBar){
      setToggleSideBar(false)
    }
    else{
      setToggleSideBar(true)
    }
  }
  return (
    <div className="App scroll-snap-y">
      <SideBar toggleSideBar={toggleSideBar} setToggleSideBar={setToggleSideBar}/>
      <FaBars onClick={showSideBar}className=" fixed top-0 right-0 lg:-right-full m-2 text-4xl box-border p-2 bg-black-300 cu"/>
      <Home />
      <About/>
      <Portfolio/>
      <Contact setMessages={setMessage}/>
      <Alert message={message} />
    </div>
  );
}

export default App;
