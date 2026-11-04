'use client';
import React from 'react'
import Link from 'next/link'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext';
import SearchBar from '../SearchBar';
function Nav() {
  const cartContext = useContext(CartContext);
  const cartCount = cartContext?.cartCount || 0;
  return (
    <div>
    <nav className="navbar bg-blue-100  fw-bold ">
    <div className="container px-3 items-center justify-between py-2 flex ">
    <h2 className='text-3xl font-bold me-5 mb-2 mb-lg-0'>ShopEase</h2>
    {/* <div className="collapse navbar-collapse" id="navbarSupportedContent"> */}
      <ul className="flex text-lg items-center gap-4 me-auto mb-2 mb-lg-0">
        
        <li className="flex ms-5">
          {/* <a className="nav-link active" aria-current="page" href="/">Home</a> */}
          <i className="bi bi-house-door-fill "></i>
          <Link className='nav-link' href={"/"}>Home</Link>
          
        </li>
         <SearchBar/>
        <li className="flex gap-1 ms-3">
          {/* <a className="nav-link" href="/about">About</a> */}
          <i className="bi bi-person-lines-fill "></i>
          <Link className='nav-link' href="/about">About</Link>
        </li>
       
        <li className="flex gap-1">
          <i className="bi bi-bag-heart-fill"></i>
          <Link className='nav-link' href="/products">Products</Link>
        </li>
        <li className="flex gap-1">
          {/* <a className="nav-link" href='/contact' >Contact</a> */}
          <i className="bi bi-envelope-at "></i>
          <Link className="nav-link" href='/contact' >Contact</Link>
        </li>
        <li className="flex gap-1">
         
        <Link
              href="/cart"
              className="relative flex  items-center gap-2  font-medium text-blue text-decoration-none  text-shadow-md"
            >
              <span className="text-xl !no-underline hover:!no-underline">Cart</span>
              

              {cartCount > 0 && (
                <span className="absolute -right-3 -top-3 flex h-5 min-w-5 items-center justify-center rounded-full bg-sky-500 px-1 text-xs font-bold text-white">
                  {cartCount}
                </span>
              )}
            </Link>       
            </li>
        </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>
  {/* </div> */}
</nav>
    </div>
  )
}

export default Nav