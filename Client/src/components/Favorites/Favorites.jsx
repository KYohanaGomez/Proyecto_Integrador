import { removeFav } from "../../Redux/actions";
import Card from "../Card/Card";
import { useDispatch, useSelector} from "react-redux";
import { filterCads, orderCards } from "../../Redux/actions";
import { useState } from "react";


const Favorites = ()=> {

    const dispatch = useDispatch();
    const [aux, setAux] = useState(false);

    const removeFavorite = (id) => {dispatch(removeFav(id))}

    const myFavorites = useSelector((state) => state.myFavorites)

    const handleOrder = (event) => {
     dispatch(orderCards(event.target.value));
     setAux(true)

    }

    const handleFilter = (event) => {
        dispatch(filterCads(event.target.value))

    }

    return (
        <div>
            <select onChange={handleOrder}>
                <option value="A">Ascendente</option>
                <option value="D">Descendente</option>
            </select>

            <select onChange={handleFilter}>   
                <option value="Generos">Generos</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">unknown</option>
            </select>
        {



            myFavorites?.map(fav =>{
                return(
                    <Card
                    key ={fav.id}
                    id={fav.id}
                    name={fav.name}
                    species={fav.species}
                    gender={fav.gender}
                    image={fav.image}
                    onClose={()=>{removeFavorite(fav.id)}}
                    />
                )
            })
        }
        </div>
    )
}
// const mapStateToProps = (state) => {
//     return {
//         myFavorites: state.myFavorites

//     }
// }
// const mapDispatchToProps = (dispatch) => {
//     return {
//         removeFavorite: (id)=>{dispatch(removeFav(id))}

//     }
// }

export default Favorites;