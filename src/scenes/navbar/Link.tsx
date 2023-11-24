import { SelectedPage } from '../../types/types';
import AnchorLink from 'react-anchor-link-smooth-scroll';

type LinkProps = {
    name:string;
    link:SelectedPage;
    isActive:boolean;
}

const Link = ({name,link,isActive}: LinkProps) => {
  return (
    <AnchorLink href={`#${link}`} >
        <p className={`text-lg sm:text-xl font-[500] xl:text-[15px] xl:font-normal mb-8 sm:mb-10 xl:mb-0 transition-all duration-150 ease-in-out 
        ${isActive ? 'text-secondary-500':'text-primary-500 hover:text-secondary-500'}`}>{name}</p>
    </AnchorLink>
  )
}

export default Link