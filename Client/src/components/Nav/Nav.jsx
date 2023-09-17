import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { NavLink } from "react-router-dom"
import styles from './Nav.module.css'


export default function Nav({onSearch}) {
    
   
    const random = Math.floor((Math.random()*825)+1)
    
    return (
    <div>
        <button className = {styles.random} 
        onClick={()=>onSearch(random)}>Random</button>
        <SearchBar onSearch = {onSearch}/>

        <NavLink to='/about'>
            <button className={styles.About}>About</button>
        </NavLink>
       
        <NavLink to='/home'>
        <button className={styles.Home}>Home</button>
        </NavLink>
        <NavLink to='/favorites'>
        <button className={styles.Favorites}>Favorites</button>
        </NavLink>

    </div>
    );

}