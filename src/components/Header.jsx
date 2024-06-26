import React, { useContext, useState } from 'react'
import logo from './../assets/img/logoEcomerce.png'
import { List, ShoppingCart } from '@phosphor-icons/react'
import { Cart } from './Cart'
import { useCart } from '../hooks/useCart'
import { AuthContext } from '../auth'
import { useNavigate } from 'react-router-dom'
import { IconButton } from '@mui/material'
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
// import { LogoutOutlined } from '@mui/icons-material'

function Header () {

  const { user, logout } = useContext( AuthContext );
  
  const getFirstName = (name) => {
      return name.split(' ')[0]
  }

  const navigate = useNavigate();

  const onLogout = () => {
    logout();
    navigate('/auth/login', {
        replace: true
    });
}

  const [showCart, setShowCart] = useState(false)
  const { cart } = useCart()

  const [showNavBar, setShowNavBar] = useState(false)

  function handleToggleCart () {
    setShowCart(!showCart)
  }

  function handleShowNavBar () {
    setShowNavBar(!showNavBar)
  }

  return (
    <header className='sticky top-0 left-0 z-20 header w-full bg-white shadow-md'>
      <div className='relative header-content container mx-auto px-2 h-20 flex items-center gap-2 sm:gap-10'>
        <button onClick={handleShowNavBar} className='sm:hidden'><List size={25} /></button>
        <div className='logoBox w-[150px] min-w-[140px]'>
          <img className='w-full h-full object-contain' src={logo} alt='sneakers company logo' />
        </div>
        <nav className='relative hidden sm:block h-full'>
          <ul className='h-full flex gap-7 items-center justify-center'>
            <li className='link-header relative h-full grid place-items-center text-c_dark-smoth hover:text-c_dark-strong font-medium'><a href=''>Collections</a></li>
            <li className='link-header relative h-full grid place-items-center text-c_dark-smoth hover:text-c_dark-strong font-medium'><a href=''>Men</a></li>
            <li className='link-header relative h-full grid place-items-center text-c_dark-smoth hover:text-c_dark-strong font-medium'><a href=''>Women</a></li>
            <li className='link-header relative h-full grid place-items-center text-c_dark-smoth hover:text-c_dark-strong font-medium'><a href=''>About</a></li>
            <li className='link-header relative h-full grid place-items-center text-c_dark-smoth hover:text-c_dark-strong font-medium'><a href=''>Contact</a></li>
          </ul>
        </nav>
        <nav className={`absolute top-full left-0 w-full h-[calc(100vh_-_5rem)] shadow-sm sm:hidden bg-white/75 backdrop-blur-sm max-h-0 ${showNavBar && 'max-h-screen p-5'} overflow-hidden transition-all duration-500 ease-in-out`}>
          <ul className='flex flex-col gap-7 justify-center'>
            <li className='link-header relative w-min py-1 grid place-items-center text-c_dark-smoth hover:text-c_dark-strong font-medium'><a href=''>Collections</a></li>
            <li className='link-header relative w-min py-1 grid place-items-center text-c_dark-smoth hover:text-c_dark-strong font-medium'><a href=''>Men</a></li>
            <li className='link-header relative w-min py-1 grid place-items-center text-c_dark-smoth hover:text-c_dark-strong font-medium'><a href=''>Women</a></li>
            <li className='link-header relative w-min py-1 grid place-items-center text-c_dark-smoth hover:text-c_dark-strong font-medium'><a href=''>About</a></li>
            <li className='link-header relative w-min py-1 grid place-items-center text-c_dark-smoth hover:text-c_dark-strong font-medium'><a href=''>Contact</a></li>
          </ul>
        </nav>
        <div className='right-side flex gap-5 ml-auto'>
              
          <div className='relative grid place-items-center'>
            <button onClick={handleToggleCart} className='relative text-c_dark-smoth hover:text-c_dark-strong font-medium'>
              <ShoppingCart size={25} />
              {
                cart.length > 0 &&
                  <span className='absolute bottom-[60%] left-[60%] grid place-items-center bg-c_orange-normal rounded-full p-[1px_5px] text-white text-xs'>{cart.length}</span>
              }
            </button>
            <Cart isShow={showCart} />
          </div>
          <div className='userBox w-11 h-11 rounded-full overflow-hidden border-c_orange-normal border-2'>
            <img className='w-full h-full object-cover' src={user.photoURL || 'https://www.shutterstock.com/image-vector/blank-avatar-photo-place-holder-600nw-1095249842.jpg' } alt='avatar' />
          </div>
          <span style={{marginTop: '10px'}} className="nav-item nav-link text-primary">
                  { getFirstName(user?.name) }
              </span>
              <IconButton
                  className="nav-item nav-link btn"
                  onClick={ onLogout }
                  title="Exit"
                  
              >
                  <ExitToAppIcon />
              </IconButton>
        </div>
      </div>
    </header>
  )
}

export default Header
