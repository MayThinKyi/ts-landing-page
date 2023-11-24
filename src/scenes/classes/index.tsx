import { ClassType, SelectedPage } from '../../types/types'
import HeadingText from '../../shared/HeadingText'
import  image1 from '../../assets/image1.png'
import  image2 from '../../assets/image2.png'
import  image3 from '../../assets/image3.png'
import  image4 from '../../assets/image4.png'
import  image5 from '../../assets/image5.png'
import  image6 from '../../assets/image6.png'
import Class from './Class'
import Slider from "react-slick";
import { motion } from 'framer-motion';

type OurClassesProps = {
    setSelectedPage:(page:SelectedPage)=>void

}
const classes:ClassType[]=[
    {img:image1,
    title:"Weight Training Classes",
    text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
     {img:image2,
    title:"Yoga Classes",
    text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
     {img:image3,
    title:"Ab Core Classes",
    text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
     {img:image4,
    title:"Adventure Classes",
    text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
     {img:image5,
    title:"Fitness Classes",
    text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
     {img:image6,
    title:"Training Classes",
    text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
]

const OurClasses = ({setSelectedPage}: OurClassesProps) => {
     const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
  return (
        <div className='py-10 px-5 sm:px-20 sm:py-20 bg-[#FFE1E0]'>
            <motion.div id={SelectedPage.OurClasses}   onViewportEnter={()=>setSelectedPage(SelectedPage.OurClasses)} 
         initial="hidden"
          whileInView="visible"
          viewport={{  amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }} className='lg:w-[60%] mb-10'>
                <HeadingText title='OUR CLASSES'
                text='Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est tellus quam porttitor. Mauris velit euismod elementum arcu neque facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit enim mattis odio in risus nunc.' />
            </motion.div>
            <Slider {...settings}>
                {classes.map((item:ClassType)=>{
                    return <Class {...item} />
                })}
            </Slider>
        </div>
  )
}

export default OurClasses