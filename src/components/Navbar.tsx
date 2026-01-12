import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
  return (
  <nav className="flex justify-between w-4/5 mx-auto py-5 items-center sticky mb-7 top-0 bg-white z-10">
    <span className="uppercase text-sm md:text-xl lg:text-3xl text-red-950 font-bold tracking-wide"><Link to="/">React Shopping Cart</Link></span>
    <ul className="flex gap-4 text-lg text-red-950 font-semibold">
      <li><NavLink to="/" className={({isActive}) => isActive? "underline" : ''}>Home</NavLink></li>
      <li><NavLink to="/cart" className={({isActive}) => isActive? "underline" : ''}>Cart</NavLink></li>
    </ul>
  </nav>);
}
