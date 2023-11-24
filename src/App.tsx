import  { useEffect, useState } from 'react'
import Navbar from './scenes/navbar'
import { SelectedPage } from './types/types';
import Home from './scenes/home';
import Benefits from './scenes/benefits';
import Fit from './scenes/fit';
import OurClasses from './scenes/classes';
import JoinNow from './scenes/joinNow';
import Footer from './scenes/footer';

const App = () => {
  const [isNavOnTop,setIsNavOnTop]=useState<boolean>(true);
  const [selectedPage,setSelectedPage]=useState<SelectedPage>(SelectedPage.Home);
  useEffect(()=>{
    const handleNavOnTop=()=>{
      if(window.scrollY===0 ) setIsNavOnTop(true);
      else setIsNavOnTop(false)
    }
    window.addEventListener('scroll',handleNavOnTop);
    return ()=>window.removeEventListener('scroll',handleNavOnTop)
  },[])
  return (
    <>
      <Navbar isNavOnTop={isNavOnTop} selectedPage={selectedPage}  />
      <Home    setSelectedPage={setSelectedPage}  />
      <Benefits   setSelectedPage={setSelectedPage} />
      <Fit/>
      <OurClasses   setSelectedPage={setSelectedPage} />
      <JoinNow   setSelectedPage={setSelectedPage} />
      <Footer/>
    </>
  )
}

export default App