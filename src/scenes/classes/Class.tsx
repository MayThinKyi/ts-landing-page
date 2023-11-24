import  { useState } from 'react'

type ClassProps = {
    img:string;
    title:string;
    text:string;
}

const Class = ( {img,title,text}: ClassProps) => {
    const [isHover,setIsHover]=useState(false);
  return (
    <div className='cursor-pointer mr-5 h-[300px] relative' onMouseEnter={()=>setIsHover(true)} 
        onMouseLeave={()=>setIsHover(false)}>
        <img src={img} 
         className={`h-[100%] object-cover  `} />
        {isHover && <div className='bg-[#FF6364] px-4 py-4 sm:py-10 text-white absolute top-0 right-0 left-0 bottom-0 text-center'>
            <h1 className='text-xl font-semibold mb-6'>{title}</h1>
            <p className='text-sm'>{text}</p>
        </div>}
        
        
    </div>
  )
}

export default Class