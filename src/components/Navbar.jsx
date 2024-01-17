import React from 'react'
import {FaShoppingCart} from "react-icons/fa"
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux/es/hooks/useSelector'


const Navbar = () => {

  const {cart} = useSelector((state)=> state);

  return (
    <div className=''>
        <nav className='flex justify-between items-center h-20 max-w-6xl mx-auto'>
            <NavLink to={"/"}>
              <div>
                <img src='../logo.png' alt='cart-icon' width={150}/>
              </div>
            </NavLink>
            
            <div className='flex items-center font-medium text-slate-100 mr-5 space-x-6'>
                <NavLink to='/'>
                  <p>Home</p>
                </NavLink>

                <NavLink to='/cart'>
                  <div className='relative'>
                    <FaShoppingCart className='text-2xl'/>
                    {
                      cart.length > 0 && 
                      <span className='absolute -top-3 -right-2 text-slate-100 bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full'>{cart.length}</span>
                    }
                  </div>
                </NavLink>
                
            </div>
        </nav>
    </div>
  )
}

export default Navbar