import Logo from '../../assets/Logo.png'

const Footer = () => {
  return (
    <div className="text-primary-500 py-10 px-5 sm:px-10 lg:px-20 bg-[#FFE1E0] grid gap-10 lg:gap-20 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        <div>
            <img src={Logo} alt='Logo' />
            <p className='my-6'>Lorem vitae ut augue auctor faucibus eget eget ut libero. Elementum purus et arcu massa dictum condimentum. Augue scelerisque iaculis orci ut habitant laoreet. Iaculis tristique.</p>
            <p>© Evogym All Rights Reserved.</p>
        </div>
        <div>
            <h1 className='text-lg font-semibold mb-6'>Links</h1>
            <p className="mb-3">Massa orci senectus</p>
            <p className="mb-3">Et gravida id et etiam</p>
            <p className="mb-3">Ullamcoper vivamus</p>
        </div>
       <div>
            <h1 className='text-lg font-semibold mb-6'>Contact Us</h1>
            <p className="mb-3">Tempus metus mattis risus volupat egestas.</p>
            <p className="mb-3">(333)425-6825</p>
        </div>
    </div>
  )
}

export default Footer