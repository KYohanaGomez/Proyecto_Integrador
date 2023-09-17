import { useState } from 'react';
import style from './SearchBar.module.css'


export default function SearchBar({onSearch}) {

   const [aux, setAux]=useState('')

   const [id, setId]=useState('');

   const handleChange = (event)=>{
   setId(event.target.value)
   }
   function detector(id) {
      setAux(id)
      if (id !== aux) {
         onSearch(id)
      }
   }
   
   return (
      <div >
         <input 
         className={style.inputSearch} 
         type='search' 
         value={id}
         onChange={handleChange}/>
         <button 
         className={style.botonSearch}
          onClick={()=>detector (id)}>Agregar</button>
      </div>
   );
}
