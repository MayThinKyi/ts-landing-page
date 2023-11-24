import { useState } from 'react'
import { SelectedPage } from '../types/types'
import { Bars3Icon,XMarkIcon } from '@heroicons/react/24/solid'
import { slide as Menu } from 'react-burger-menu'


import Link from './navbar/Link'
type SliderProps = {
    selectedPage:SelectedPage
}

const Slider = ({selectedPage}: SliderProps) => {
    const [isSliderOpen,setIsSliderOpen]=useState<boolean>(false);
    const checkIsActive=(page:SelectedPage)=>page===selectedPage ? true :false;
  return (
    <div>
    <div onClick={()=>setIsSliderOpen(!isSliderOpen)} className=' w-[40px] h-[40px] p-2 rounded-full bg-yellow-500 text-white'>
        <Bars3Icon />
    </div>
   
    <Menu width={300} isOpen={isSliderOpen} onStateChange={(state)=>setIsSliderOpen(state.isOpen)} right  className='p-14 fixed top-0 right-0 bottom-0 bg-[#FFE1E0]  text-primary-500 hover:text-secondary-500 transition-all duration-150 ease-in-out'>
        <div className="flex-col gap-10">
            <div className="flex justify-end mb-8 cursor-pointer " onClick={()=>setIsSliderOpen(false)}>
                <XMarkIcon  className='  w-8 h-8'  />
            </div>
              <Link isActive={checkIsActive(SelectedPage.Home)} name='Home' link={SelectedPage.Home} />
                <Link isActive={checkIsActive(SelectedPage.Benefits)} name='Benefits' link={SelectedPage.Benefits} />
                <Link isActive={checkIsActive(SelectedPage.OurClasses)} name='Our Classes' link={SelectedPage.OurClasses} />
                <Link  isActive={checkIsActive(SelectedPage.ContactUs)} name='Contact Us' link={SelectedPage.ContactUs} />
        </div>
    </Menu>
    </div>
  )
}

export default Slider
