import { removeFav } from "../../Redux/actions";
import Card from "../Card/Card";
import { useDispatch, useSelector} from "react-redux";
import { filterCads, orderCards } from "../../Redux/actions";
import { useState } from "react";


const Favorites = ()=> {
    const genders = ['Genders', 'Male', 'Female', 'Genderless', 'unknown'];
    const [aux, setAux] = useState(false);
    const dispatch = useDispatch();
    const myFavorites = useSelector((state) => state.myFavorites)

    const removeFavorite = (id) => {
        dispatch(removeFav(id))}

    const handleOrder = (event) => {
        dispatch(orderCards(event.target.value));
     setAux(!aux)
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

            {genders?.map((option) => (
                <option key = {option} value={option}>
                    {option}
                </option>
            ))}
                {/* <option value="Genders">Genders</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">unknown</option> */}
            </select>
        {
            myFavorites?.map(({id, name, species, gender, image, origin, status}) =>{
                return(
                    <Card
                    key ={id}
                    id={id}
                    name={name}
                    species={species}
                    gender={gender}
                    image={image}
                    origin={origin}
                    status={status}
                    onClose={()=>{removeFavorite(id)}} 
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