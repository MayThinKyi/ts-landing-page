import BenefitsPageGraphic from '../../assets/BenefitsPageGraphic.png'
import AbstractWaves from '../../assets/AbstractWaves.png'
import Sparkles from '../../assets/Sparkles.png'
import HeadingText from '../../shared/HeadingText'
import Button from '../../shared/Button'
import { SelectedPage } from '../../types/types'

const Fit = () => {
    
  return (
    <div className=" px-5 sm:px-20 grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-20">
        <div>
            <img src={BenefitsPageGraphic} alt='Benefits Page Graphic' />
        </div>
        <div>
            <img className='mb-8' src={AbstractWaves} alt='Abstract Waves' />
            <HeadingText   title='MILLIONS OF HAPPY MEMBERS GETTING FIT'
            text='Nascetur aenean massa auctor tincidunt. Iaculis potenti amet egestas ultrices consectetur adipiscing ultricies enim. Pulvinar fames vitae vitae quis. Quis amet vulputate tincidunt at in nulla nec. Consequat sed facilisis dui sit egestas ultrices tellus. Ullamcorper arcu id pretium sapien proin integer nisl. Felis orci diam odio.
            Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est tellus quam porttitor. Mauris velit euismod elementum arcu neque facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit enim mattis odio in risus nunc.' />
            <div className="flex flex-wrap sm:flex-nowrap items-center  gap-10 sm:gap-20  ">
                <Button name='Join Now' link={SelectedPage.OurClasses} />
                <img  src={Sparkles} alt='Sparkles' />
            </div>

        </div>
    </div>
  )
}

export default Fit