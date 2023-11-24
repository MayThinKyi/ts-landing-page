import { SelectedPage } from '../../types/types'
import ContactUsPageGraphic  from '../../assets/ContactUsPageGraphic.png'
import HeadingText from '../../shared/HeadingText'
import Form from './Form'
import { motion } from 'framer-motion';
type JoinNowProps = {
    setSelectedPage:(page:SelectedPage)=>void

}

const JoinNow = ({setSelectedPage}: JoinNowProps) => {
  return (
    <div className='py-10 px-5 sm:px-10 md:p-20 grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-20'>
        <motion.div id={SelectedPage.ContactUs}  onViewportEnter={()=>setSelectedPage(SelectedPage.ContactUs)} 
         initial="hidden"
          whileInView="visible"
          viewport={{  amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}>
                <HeadingText title='JOIN NOW TO GET IN SHAPE' 
                text='Congue adipiscing risus commodo placerat. Tellus et in feugiat nisl sapien vel rhoncus. Placerat at in enim pellentesque. Nulla adipiscing leo egestas nisi elit risus sit. Nunc cursus sagittis.' />
                <Form/>
        </motion.div>
        <div className='mx-auto'>
            <img src={ContactUsPageGraphic} alt='ContactUs Page Graphic' /> 
        </div>
    </div>
  )
}

export default JoinNow