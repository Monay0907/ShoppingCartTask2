import "./Navbar.css";
import { ShoppingBag } from 'phosphor-react';
import { NavLink } from "react-router-dom";
export const Navbar = () =>{
    return(
        <div className='navbar'>
            <div className='links'>
                <NavLink to="/">Products</NavLink>
                <NavLink to="/cart">
                    <ShoppingBag size={35}></ShoppingBag>
                </NavLink>
            </div>
        </div>
    );
}