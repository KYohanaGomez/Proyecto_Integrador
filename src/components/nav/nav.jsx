import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { NavLink } from "react-router-dom"



export default function Nav({onSearch}) {
    
   
    const random = Math.floor((Math.random()*825)+1)
    
    return (
    <div>
        <button onClick={()=>onSearch(random)}>Random</button>
        <SearchBar onSearch = {onSearch}/>
        <NavLink to='/about'>About</NavLink>
        <br />
        <NavLink to='/home'>Home</NavLink>

    </div>
    );

}