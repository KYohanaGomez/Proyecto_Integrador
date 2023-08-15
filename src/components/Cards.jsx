import Card from './Card';

export default function Cards({characters}) {

   return(
   <div>
      {characters.map(({id, name,status,gender,origin,species,image})=>{
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
            onClose={() => window.alert('Emulamos que se cierra la card')}
            />
         )
      })
      }
   </div>
   )
}
