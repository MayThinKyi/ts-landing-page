
type HeadingTextProps = {
    title:string;
    text:string
}

const HeadingText = ({title,text}: HeadingTextProps) => {
  return (
    <div>
        <h1 className='font-montserrat text-3xl font-bold'>{title}</h1>
        <p className='text-[15px] mt-8'>{text}</p>
    </div>
  )
}

export default HeadingText