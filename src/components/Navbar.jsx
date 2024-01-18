import React, { useEffect, useRef } from 'react'
import {FaShoppingCart} from "react-icons/fa"
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import gsap from 'gsap'




const Navbar = () => {

  const {cart} = useSelector((state)=> state);

  const comp = useRef(null);

  useEffect(()=>{
    const t1 = gsap.timeline();
    t1.from("#logo", {
      x: -10,
      opacity:0,
      duration:1,
    })
    .from("#home-btn",{
      x:10,
      opacity:0,
      duration:1,
    }).from("#cart-btn", {
      x: 10,
      opacity:0, 
      duration: 1, 
      delay: 0.2
    })
  },[])

  return (
    <div ref={comp}>
      <div  className='bg-slate-900'>
          <nav className='flex justify-between items-center h-20 max-w-6xl mx-auto'>
              <NavLink to={"/"}>
                <div id='logo'>
                  <img src='../logo.png' alt='cart-icon' width={150}/>
                </div>
              </NavLink>
              
              <div className='flex items-center font-medium text-slate-100 mr-5 space-x-6'>
                  <NavLink to='/'>
                    <p id='home-btn'>Home</p>
                  </NavLink>

                  <NavLink to='/cart'>
                    <div id='cart-btn' className='relative'>
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
    </div>
  )
}

export default Navbar