import React,{useState} from 'react'
import Sidebar from '../components/Sidebaar'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Info from '../components/infosection';
import  {homeObjOne, homeObjSecond,homeObjThree} from '../components/infosection/Data';
import Services from '../components/Services';
import Footer from '../components/footer';
export const Home = () => {

    const [isOpen,setIsOpen]= useState(false);

    const toggle=()=>{
        setIsOpen(!isOpen)
    }
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <Hero/>
            <Info {...homeObjOne}/>
            <Info {...homeObjSecond}/>  <Services/>
            <Info {...homeObjThree}/>
             <Footer/>
        </>
         )
}

export default Home;
