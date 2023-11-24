import { BenefitType, SelectedPage } from '../../types/types'
import HeadingText from '../../shared/HeadingText'
import { HomeModernIcon,UserGroupIcon,AcademicCapIcon } from '@heroicons/react/24/solid'
import Benefit from './Benefit'
import { motion } from 'framer-motion';
type BenefitsProps = {
    setSelectedPage:(page:SelectedPage)=>void

}
const benefits:BenefitType[]=[
    {
        icon:<HomeModernIcon/>,
        title:'State of the Art Facilities',
        text:'Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et.'
    },
     {
        icon:<UserGroupIcon/>,
        title:"100's of Diverse Classes",
        text:'Eu ipsum id egestas risus tempus enim semper felis quis. Nec consectetur ac venenatis facilisi est. Eget ac turpis id.'
    },
     {
        icon:<AcademicCapIcon/>,
        title:"Expert and Pro Trainers",
        text:'Fusce vestibulum aliquam ut cras. Nisl lectus egestas sapien nisl. Lacus at mi sit pellentesque. Congue parturient.'
    }
]

const Benefits = ({setSelectedPage}: BenefitsProps) => {
  return (
    <div  className='px-6 py-10 md:p-20'>
        <motion.div id={SelectedPage.Benefits}  onViewportEnter={()=>setSelectedPage(SelectedPage.Benefits)} 
         initial="hidden"
          whileInView="visible"
          viewport={{  amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }} className='xl:w-[60%]'>
          <HeadingText title='MORE THAN JUST GYM.'
        text='We provide world class fitness equipment, trainers and classes to get you to your ultimate fitness goals with ease. We provide true care into each and every member.' />
        </motion.div>
      
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mt-14">
            {benefits.map((benefit:BenefitType)=>{
                return <Benefit {...benefit} />
            })}
        </div>
    </div>
  )
}

export default Benefits