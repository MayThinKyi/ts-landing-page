import { SelectedPage } from '../../types/types'
import Logo from '../../assets/Logo.png'
import Link from './Link';
import Button from '../../shared/Button';
import Slider from '../Slider';
type NavbarProps = {
    isNavOnTop:boolean;
    selectedPage:SelectedPage
}

const Navbar = ({isNavOnTop,selectedPage}: NavbarProps) => {
    const flexBetween='flex items-center justify-between'
    const checkIsActive=(page:SelectedPage)=>selectedPage===page ? true :false;
  return (
    <div className={`z-10  py-6 px-8 sm:px-20  ${flexBetween} fixed top-0 right-0 left-0 ${isNavOnTop ? 'bg-[#F8F4EB]' :'bg-[#FFE1E0] shadow-sm'}`}>
        <div className='sm:w-[20%]'>
            <img src={Logo} alt='Logo' />
        </div>
        <div className='w-[80%]'>
            <div className={` ${flexBetween} hidden xl:flex`}>
            <div className={`${flexBetween} gap-10 `}>
                <Link isActive={checkIsActive(SelectedPage.Home)} name='Home' link={SelectedPage.Home} />
                <Link  isActive={checkIsActive(SelectedPage.Benefits)} name='Benefits' link={SelectedPage.Benefits} />
                <Link  isActive={checkIsActive(SelectedPage.OurClasses)} name='Our Classes' link={SelectedPage.OurClasses} />
                <Link  isActive={checkIsActive(SelectedPage.ContactUs)} name='Contact Us' link={SelectedPage.ContactUs} />
            </div>
            <div className={`${flexBetween} gap-10`}>
                <p className='text-primary-500'>Sign In</p>
                <Button name='Become a Member' link={SelectedPage.OurClasses} />
            </div>
        </div>
        <div className='xl:hidden flex justify-end'>
            <Slider selectedPage={selectedPage} />
        </div>
        </div>
    </div>
  )
}

export default Navbar