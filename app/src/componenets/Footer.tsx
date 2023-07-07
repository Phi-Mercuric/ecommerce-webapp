import { Link } from 'react-router-dom'
import { pages, socialLinks } from '../constants/footerlinks'

const Footer = () => {
  return (
    <section className="flex flex-col items-center sm:py-16 py-6 pl-6 sm:px-32 w-full">
      <div className="flex items-start flex-col sm:flex-row mb-4 self-start">
        <Link to="/"
          className="text-[6vw] sm:text-4xl font-bold text-orange-gradient">
          NixieCraft
        </Link>
        <p className="sm:mt-[3px] mt-[1vw] sm:ml-3 text-gray-300 sm:max-w-[15vw] text-[10px] sm:text-[0.9vw]">
          Your one stop shop for all things Nixie Tube related.
        </p>
      </div>
      <div className='flex flex-row w-full justify-evenly'>
        <div className="flex flex-col sm:mt-3 items-start sm:pl-10">
          <h3 className="text-[15px] sm:text-lg text-gray-400 mb-2 sm:mb-4"> Pages </h3>
          {pages.map((page, index) => (
            <Link key={page.link} to={page.link}
              className={`font-poppins text-[11px] sm:text-base cursor-pointer orange ${index === pages.length - 1 ? 'mb-0' : 'mb-2 sm:mb-3'}`}
            >
              {page.title}
            </Link>
          ))};
        </div>
        <div className="flex flex-col sm:mt-3 items-center sm:pl-10">
          <h3 className="text-[15px] sm:text-lg text-gray-400 mb-2 sm:mb-4"> Social Media </h3>
          <div className='grid grid-cols-2 gap-5 sm:gap-x-12 sm:gap-y-5'>
            {socialLinks.map((social) => (
              <Link key={social.link} to={social.link}
                className={`max-w-[30px] sm:max-w-[50px] font-poppins grid-item text-[10px] sm:text-base cursor-pointer orange`}
              >
                <img src={social.icon} alt={social.link} />
              </Link>
            ))};
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer