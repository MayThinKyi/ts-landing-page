import { SelectedPage } from '../types/types';
import AnchorLink from 'react-anchor-link-smooth-scroll';

type ButtonProps = {
    name:string;
    link:SelectedPage;
}

const Button = ({name,link}: ButtonProps) => {
  return (
    <AnchorLink href={`#${link}`}>
        <button className='py-2 px-10 rounded-lg transition-all delay-150 ease-in-out hover:bg-secondary-500 bg-yellow-500 hover:text-white'>
         {name}
        </button>
    </AnchorLink>
  )
}

export default Button