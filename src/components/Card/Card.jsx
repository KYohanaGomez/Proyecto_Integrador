import styles from'./Card.module.css';
import { Link } from 'react-router-dom';

export default function Card({id,name,status,gender,origin,
   species,image,onClose}) {


   return (
      <div className={styles.card}>
         <button onClick={()=>onClose(id)}>❌</button>
         <Link to={`/detail/${id}`}>
            <h2>{name}</h2>
         </Link>
         
         <img src={image} alt=''/>
      </div>
   );
}
