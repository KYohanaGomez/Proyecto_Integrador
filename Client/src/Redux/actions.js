import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actions-types";
import axios from 'axios';


export const addFav = (character) =>{
   const endpoint = 'http://localhost:3001/rickandmorty/fav';
   return async (dispatch) => {
      console.log(character);
      try {
         const { data } = await axios.post(endpoint, character);
         if(!data.length) throw Error('No hay favoritos')

         return dispatch({type: ADD_FAV, payload: data});
            
      } catch (error) {
         window.alert(error.message)   
      };
   }
};

export const removeFav = (id) => {
   const endpoint = `http://localhost:3001/rickandmorty/fav/${id}`;
   return async (dispatch) => {
      try {
         const { data } = await axios.delete(endpoint);

         return dispatch({type: REMOVE_FAV, payload: data});
            
      } catch (error) {
         window.alert(error.message) 
   };
     
   }
    
}

export const filterCads = (gender) => {
    return { type: FILTER, payload: gender }

}
export const orderCards = (order) => {
    return{ type: ORDER, payload: order}

}