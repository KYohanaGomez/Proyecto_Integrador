import styles from'./Cards.module.css'
import Card from '../Card/Card';

export default function Cards({characters, onClose}) {

   return(
   <div className={styles.cards}>
      {characters?.map(({id, name,status,gender,origin,species,image})=>{
         return(
            <Card 
            Key= {id}
            id= {id}
            name= {name}
            status= {status}
            gender= {gender}
            origin= {origin.name}
            species= {species}
            image= {image}
            onClose={onClose}
            />
         )
      })
      }
   </div>
   )
}
