import { useState } from "react"
import { navLinks } from "../constants/navlinks"
import { menu, close } from "../assets"
import "./navbar.css"

const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <nav className="w-full flex py-6 justify-between items-center ">
      <h1 className="text-white text-3xl font-bold text-orange-gradient">NixieCraft</h1>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((link, index) => (
          <li key={`#${link}`}
            className={`mx-4 text-lg font-poppins font-normal cursor-pointer text-[16px] text-dark-orange-gradient ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}
          >
            <a href={`${link}.html`} className="capitalize">{link}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain cursor-pointer"
          onClick={() => setToggle((prev) => !prev)} />

        <div className={`${toggle ? 'flex' : 'hidden'} bg-black-gradiant p-6 absolute top-20 right-0 mx-0 my-2 min-w-[140px] rounded-s-lg sidebar`}>
          <ul className="list-none justify-end items-center flex-1">
            {navLinks.map((link, index) => (
              <li key={`#${link}`}
                className={`text-dark-orange-gradient text-lg font-poppins font-normal ${index === navLinks.length - 1 ? 'mr-0' : 'mb-2'} cursor-pointer text-[16px]`}
              >
                <a href={`${link}.html`} className="capitalize">{link}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar