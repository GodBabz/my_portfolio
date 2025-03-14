import React,{useState,useEffect}from 'react'; //UseState to 
import {Link} from 'react-router-dom'; // Navigate to Other Parts of the Page.
import {styles} from '../styles';
import {navLinks} from '../constants';
import {menu , close } from '../assets';
import logo from '../assets/logo.png';
const Navbar = () => {
  const [active,setactive]=useState('')
  return (
    <nav
      className={`
      ${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link to="/" className='flex items-center gap-2'
        onClick={()=>{
          setactive("");
          window.scrollTo(0,0);
        }}>  
          <img src={logo} alt="logo" className="h-1 w-1 object-contain"/>
          <p className='text-white text-18px font-bold cursor-pointer'>Ayushman <span className='sm-block hidden'> | Rai</span></p>
        </Link>
      </div>
    </nav>
  )
}
export default Navbar