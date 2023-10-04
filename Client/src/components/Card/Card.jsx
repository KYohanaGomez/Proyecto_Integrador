import styles from'./Card.module.css';
import { Link } from 'react-router-dom';
import { addFav, removeFav } from '../../Redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect} from 'react';

 function Card({id, gender, name, image, species, origin, status, onClose}) {

   const [isFav, setIsFav] = useState(false);

   const myFavorites = useSelector((state) => state.myFavorites)

   const dispatch = useDispatch()

   const handleFavorite = () => {
      if(isFav){
         setIsFav(false);
         dispatch(removeFav(id))
      }
      else{
         setIsFav(true);
         dispatch(addFav({id, name, gender, image, species, origin, status, onClose}))
      }


   }
   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]); 

   return (
      <div className={styles.card}>
         <h1 className={styles.cardHo}></h1>
             
          <button onClick={()=>onClose(id)}>❌</button>
          <Link to={`/detail/${id}`}>
           
            <h2>{name}</h2>
          </Link> 
          
         <button onClick={handleFavorite}>{isFav ? '❤️' : '🤍'} </button>  
         
         <img src={image} alt=''/>
      </div>
   );
}
// const  mapStateToProps = (state) =>{
//    return{
//       myFavorites : state.myFavorites

//    }

// }

// const mapDispatchToProps = (dispatch) => {
//    return{
//       addFav: (character)=>{dispatch(addFav(character))},
//       removeFav: (id)=>{dispatch(removeFav(id))}
//    }

// }


export default Card;
