import { NavLink } from 'react-router-dom'
import logo from '/assets/images/calvaryLogo.png';
import { useState, useEffect, useRef } from 'react';
import { IoMdMenu } from "react-icons/io";
import { FaTimes } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";

const Menu = [
  {
    title: 'Home',
    path: '/'
  },
  {
    title: 'Prayer',
    path: '/prayer'
  },
  {
    title: 'Give',
    path: '/give'
  },
  {
    title: 'Who we are',
    path: '/who_we_are'
  },
  {
    title: 'Youth Ministry',
    path: '/youth_ministry'
  },
]

const Header = () => {

  const activeLink = "text-[#1f4717] font-bold";
  const normalLink = "no-underline hover:scale-50";

  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [menuDisplay, setMenuDisplay] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHeaderVisible(entry.isIntersecting);
      },
      { threshold: 0.1 } // Adjust this threshold as needed
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => {
      if (headerRef.current) {
        observer.unobserve(headerRef.current);
      }
    };
  }, []);


  return (
    <>
      <section ref={headerRef} className='relative z-10 w-full'>
        <div className='bg-white p-3 w-full max-w-6xl mx-auto flex justify-between items-center'>

          <div className='w-16 h-16 lg:w-20 lg:h-20'>
            <img src={logo} alt="" />
          </div>

          <div className='lg:hidden' onClick={() => setMenuDisplay(!menuDisplay)}>
            {!menuDisplay ? <IoMdMenu className='text-4xl' /> : <FaTimes className='text-4xl' />}

          </div>

          <div className='hidden lg:flex'>
            <ul className='flex list-none gap-4 text-xl'>
              {Menu.map((item, index) => {
                return <li key={index}>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink}
                    to={item.path}
                  >
                    {item.title}
                  </NavLink>
                </li>
              })}
            </ul>
          </div>

        </div>
        {menuDisplay && (
          <div className='absolute flex bottom-74px lg:hidden bg-black opacity-[90%] h-[fit-content] w-full ease-in-out duration-700'>
            <div className='relative flex w-full sm:w-[50%] h-full bg-white'>
              <div className='lg:hidden w-full  bg-white'>
                <ul className='w-full list-none gap-7 text-2xl'>
                  {Menu.map((item, index) => {
                    return <li key={index} className='w-full p-4'>
                      <NavLink
                        className={({ isActive }) =>
                          isActive ? activeLink : normalLink}
                        to={item.path}
                        onClick={() => setMenuDisplay(false)}>
                        {item.title}
                      </NavLink>
                    </li>
                  })}
                </ul>
              </div>

            </div>
          </div>
        )

        }

      </section>

      {!isHeaderVisible && (
        <div
          className="cursor-pointer shadow-lg fixed bottom-2 right-2 z-40 h-10 w-10 bg-[#f4f4f4] rounded-full flex justify-center items-center"
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: 'smooth'
            })
          }}>
          <FaArrowUp />
        </div>
      )}
    </>

  )
}

export default Header
