import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actions-types";


const initialState = {
    myFavorites: [],
    allCharactersFav: []


}

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_FAV:
            return {
                ...state,
                myFavorites: [...state.allCharactersFav, payload],
                allCharactersFav: [...state.allCharactersFav, payload]
            }
        case REMOVE_FAV:
            return {
                ...state,   
                myFavorites: state.myFavorites.filter(fav => fav.id !== payload)
            }

        case FILTER:
            const allCharactersFiltered = state.allCharactersFav.filter(character => character.gender === payload)
    
            
            return {
                ...state,
                myFavorites: allCharactersFiltered

            }
            // case ORDER:
            // // eslint-disable-next-line no-case-declarations
            // let copy4 = state.allCharactersFav.sort((a, b) => {
            //     if(payload === 'A'){
            //         return a.id - b.id
            //     }else if (payload === 'D'){
            //         return b.id - a.id
            //     }else{
            //         return 0;
            //     }
            // })

        case ORDER:
            const allCharactersFavCopy = [...state.allCharactersFav]
            return {
                ...state,
                myFavorites:
                    payload === 'A'
                        ? allCharactersFavCopy.sort((a, b) => a.id - b.id)
                        : allCharactersFavCopy.sort((a, b) => b.id - a.id)
            }



        default:
            return { ...state }

    }

}



export default reducer;