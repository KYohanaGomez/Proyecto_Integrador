import { useParams } from "react-router-dom"
import axios from "axios";
import { useState, useEffect} from "react";

export default function Detail({characters}){

    const {id} = useParams()

    const [character, setCharacter] = useState({})

    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`)
        .then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);

    //const chars = characters?.filter((char) => char.id === Number(id))[0];
    

    return(
        <div>
           {character && (
           <div>
            <h2>{character.id}</h2>
            <h2>{character.name}</h2>
            <h2>{character.status}</h2>
            <h2>{character.gender}</h2>
            <h2>{character.origin?.name}</h2>      
            <h2>{character.species}</h2>
            <img src={character.image} alt=''/>
           </div>
           )}     
        </div>
    );
}