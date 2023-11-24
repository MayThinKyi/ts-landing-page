import React from 'react'
import { SelectedPage } from '../../types/types'
import EvolveText from '../../assets/EvolveText.png'
import HomePageGraphic from '../../assets/HomePageGraphic.png'
import HomePageText from '../../assets/HomePageText.png'
import Button from '../../shared/Button'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import SponsorForbes from '../../assets/SponsorForbes.png'
import SponsorFortune from '../../assets/SponsorFortune.png'
import SponsorRedBull from '../../assets/SponsorRedBull.png'
import { motion } from 'framer-motion';
type HomeProps = {
    setSelectedPage:(page:SelectedPage)=>void
}

const Home = ({setSelectedPage}: HomeProps) => {
    const flexBetween='flex  justify-between'
  return (<div className='bg-[#F8F4EB] pt-10 mt-[80px] '>
    <div className={`${flexBetween} flex-wrap xl:flex-nowrap px-5 sm:px-10  `}>
        <motion.div id={SelectedPage.Home}   onViewportEnter={()=>setSelectedPage(SelectedPage.Home)} 
         initial="hidden"
          whileInView="visible"
          viewport={{  amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        className='xl:w-[60%] '>
            <img className='h-0 xl:h-[120px]' src={EvolveText} alt='Evolve Text' />
            <div className=" sm:px-10 ">
                <img className='sm:h-[140px] xl:mt-[-50px]' src={HomePageText} alt='Home Page Text' />
                <p className="text-[15px] mt-6 text-primary-500">
                    Unrivaled Gym. Unparalleled Training Fitness Classes. World Class Studios to get the Body Shapes That you Dream of.. Get Your Dream Body Now.
                </p>
                <div className={`flex flex-wrap sm:flex-nowrap items-center mt-8 gap-10`}>
                    <Button name='Join Now' link={SelectedPage.ContactUs} />
                    <AnchorLink href={SelectedPage.ContactUs} >
                        <p className='text-[15px] font-semibold underline text-secondary-500 hover:text-yellow-500'>
                            Learn More
                        </p>
                    </AnchorLink>
                </div>
            </div>
        </motion.div>
        <div className='xl:w-[40%] mx-auto'>
            <img className='xl:h-[450px]   xl:ml-[30px] xl:mt-[-50px]' src={HomePageGraphic} alt='Home Page Graphic' />
        </div>
    </div>
    <div className='bg-[#FFE1E0]   px-20 py-10 hidden md:flex items-center gap-36'>
        <img src={SponsorForbes} />
        <img src={SponsorFortune} />
        <img src={SponsorRedBull} />

    </div>
    </div>
  )
}

export default Home