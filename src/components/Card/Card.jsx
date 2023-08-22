import styles from'./Card.module.css';

export default function Card({id,name,status,gender,origin,
   species,image,onClose}) {


   return (
      <div className={styles.card}>
         <button onClick={()=>onClose(id)}>❌</button>
         <h2>{name}</h2>
         <h2>{status}</h2>
         <h2>{gender}</h2>
         <h2>{origin}</h2>
         <h2>{species}</h2>
         <img src={image} alt=''/>
      </div>
   );
}
