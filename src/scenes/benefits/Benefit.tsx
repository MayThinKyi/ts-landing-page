import  { ReactNode } from 'react'

type BenefitProps = {
     icon:ReactNode;
    title:string;
    text:string
}

const Benefit = ({icon,title,text}: BenefitProps) => {
  return (
    <div className='text-center px-4 py-10 rounded-lg border-2'>
        <div className='mx-auto w-[50px] h-[50px] p-3 bg-[#FFE1E0] text-primary-500 rounded-full border'>
            {icon}
        </div>
        <h1 className='mt-5 mb-3 font-semibold'>{title}</h1>
        <p className='text-[15px]'>{text}</p>
    </div>
  )
}
export default Benefit