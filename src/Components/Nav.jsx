import { Link, NavLink } from "react-router-dom";
import logo from '../assets/amphora.png'
import UseHooks from "../Hooks/UseHooks";
import { useEffect, useState } from "react";

const Nav = () => {

  const {logOut, user} = UseHooks()


  const [theme, setTheme] = useState('light')

  // update state on toggle
  const handleToggle = e => {
    if (e.target.checked) {
      setTheme('synthwave')
    } else {
      setTheme('light')
    }
  }

  // set theme state in localStorage on mount & also update localStorage on state change
  useEffect(() => {
    localStorage.setItem('theme', theme)
    const localTheme = localStorage.getItem('theme')

    // add custom data-theme attribute
    document.querySelector('html').setAttribute('data-theme', localTheme)
  }, [theme])






    return (
        <div className="navbar bg-base-100 p-6">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       
        {/* <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li> */}

        <NavLink to='/' className={({isActive}) => isActive? "text-amber-500 font-bold" : "font-bold"}>Home</NavLink>
        <NavLink to='/allItem' className={({isActive}) => isActive? "text-amber-500 font-bold" : "font-bold"}>All Art & Craft Items</NavLink>
        <NavLink to='/add' className={({isActive}) => isActive? "text-amber-500 font-bold" : "font-bold"}>Add Craft Items</NavLink>
        <NavLink to='/mylist' className={({isActive}) => isActive? "text-amber-500 font-bold" : "font-bold"}>My Art&Craft List</NavLink>
        <NavLink to='/about' className={({isActive}) => isActive? "text-amber-500 font-bold" : "font-bold"}>About</NavLink>
       
        <NavLink to='/register' className={({isActive}) => isActive? "text-amber-500 font-bold" : "font-bold"}>Register</NavLink>
      </ul>
    </div>
   <div className="flex items-center gap-1">
   <img className="w-16 h-16" src= {logo} alt="" />
    <a className=" font-bold text-3xl">Ter<span className="text-amber-600">r</span>acotta</a>
   </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 flex gap-14 text-lg">
      {/* <li>
        <details>
          <summary>Parent</summary>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li> */}

        <NavLink to='/' className={({isActive}) => isActive? "text-amber-700 font-bold" : "font-bold"}>Home</NavLink>
        <NavLink to='/allItem' className={({isActive}) => isActive? "text-amber-500 font-bold" : "font-bold"}>All Art & Craft Items</NavLink>
        <NavLink to='/add' className={({isActive}) => isActive? "text-amber-700 font-bold" : "font-bold"}>Add Craft Items</NavLink>
        <NavLink to='/mylist' className={({isActive}) => isActive? "text-amber-700 font-bold" : "font-bold"}>My Art&Craft List</NavLink>
        <NavLink to='/about' className={({isActive}) => isActive? "text-amber-700 font-bold" : "font-bold"}>About</NavLink>
        
        <NavLink to='/register' className={({isActive}) => isActive? "text-amber-700 font-bold" : "font-bold"}>Register</NavLink>
    </ul>
  </div>
  {/* <div className="navbar-end">
    <Link to='/login' className="bg-amber-600 w-28 h-10 text-xl btn rounded-2xl  text-white font-bold">Log in</Link>
  </div> */}



<div className="navbar-end space-x-4">


<label className='cursor-pointer grid place-items-center'>
          <input
            type='checkbox'
            onChange={handleToggle}
            className='toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2'
          />
          <svg
            className='col-start-1 row-start-1 stroke-base-100 fill-base-100'
            xmlns='http://www.w3.org/2000/svg'
            width='14'
            height='14'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <circle cx='12' cy='12' r='5' />
            <path d='M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4' />
          </svg>
          <svg
            className='col-start-2 row-start-1 stroke-base-100 fill-base-100'
            xmlns='http://www.w3.org/2000/svg'
            width='14'
            height='14'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path d='M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z'></path>
          </svg>
        </label>

{
    user? <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-11 rounded-full">
                <img src={user?.photoURL || "https://i.ibb.co/y0yrnYQ/1681283571946.jpg" } />
            </div>
        </label>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-amber-50 rounded-box w-52">
            <li>
                <button className="btn btn-sm  btn-ghost">{user?.displayName||'user name not found'}</button>

            </li>
            <li>
                <button
                    onClick={logOut}
                    className="btn btn-sm  bg-amber-600 text-white">Log out</button>

            </li>
        </ul>
    </div>
        :
        <Link to='/login'>
            <button className="bg-amber-600 w-28 h-10 text-xl btn rounded-2xl  text-white font-bold">Login</button>
        </Link>
}
</div>






</div>
    );
};

export default Nav;