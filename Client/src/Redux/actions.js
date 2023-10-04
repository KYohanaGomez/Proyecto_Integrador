import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actions-types";
import axios from 'axios';


export const addFav = (character) =>{
   const endpoint = 'http://localhost:3001/rickandmorty/fav';
   return async (dispatch) => {
      try {
         const { data } = await axios.post(endpoint, character);
         if(!data.length) throw Error('No hay favoritos')

         return dispatch({type: ADD_FAV, payload: data});
            
      } catch (error) {
         window.alert(error.message)   
      };
      
   }
   
  // return{type : ADD_FAV, payload: character}
};
// export const addFav = (character) =>{
//     const endpoint = 'http://localhost:3001/rickandmorty/fav';
//       return (dispatch) => {
//          axios.post(endpoint, character).then(({ data }) => {
//             return dispatch({
//                type: ADD_FAV,
//                payload: data,
//             });
//          });
//       };
//    // return{type : ADD_FAV, payload: character}
// };


export const removeFav = (id) => {
   const endpoint = `http://localhost:3001/rickandmorty/fav/${id}`;
   return async (dispatch) => {
      try {
         const { data } = await axios.delete(endpoint);

         //if(!data.length) throw Error('No hay favoritos');

         return dispatch({type: REMOVE_FAV, payload: data});
            
      } catch (error) {
         window.alert(error.message) 
   };
     
   }
    
    //return{ type : REMOVE_FAV, payload : id}
}

export const filterCads = (gender) => {
    return { type: FILTER, payload: gender }

}

export const orderCards = (order) => {
    return{ type: ORDER, payload: order}

}