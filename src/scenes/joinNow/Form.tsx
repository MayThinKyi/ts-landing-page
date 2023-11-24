

const Form = () => {
  return (
    <div className='mt-10'>
        <div className="mb-3">
            <input type="text" placeholder='Name' className='w-full outline-none bg-[#FFA6A3] text-primary-500 rounded-lg py-3 px-4 border' />
        </div>
        <div className="mb-3">
            <input type="text" placeholder='Email' className='w-full outline-none bg-[#FFA6A3] text-primary-500 rounded-lg py-3 px-4 border' />
        </div>
        <div className="mb-3">
            <textarea rows={5} placeholder='Message' className='w-full outline-none bg-[#FFA6A3] text-primary-500 rounded-lg py-3 px-4 border' />
        </div>
        <button className='py-2 px-10 rounded-lg transition-all delay-150 ease-in-out hover:bg-secondary-500 bg-yellow-500 hover:text-white' type="submit">Submit</button>
    </div>
  )
}

export default Form