import React from "react";
import MiFoto from  "../../img/MiFoto.jpg";
import styles from "../About/About.module.css"


export default function About () {
    return(
    <div className={styles.div}>
        <h1 className={styles.About}>Bienvenidos a la Rick & Morty App</h1>
       <h1 className={styles.nombre}>Hola! mi nombre es Kerly Yohana</h1>
       <img src={MiFoto} alt="MiFoto" className={styles.MiFoto}/>
       <p className={styles.texto}>Siempre he tenido interés por la tecnología y sus avances,
       tenía mucha curiosidad por saber como se hacían las aplicaciones y páginas web,
       fue asi como entre al mundo de la programación.Me siento muy feliz y orgullosa
       de todo lo que he aprendido hasta ahora y espero seguir aprendiendo muchas cosas más,
       se que la programación es la puerta hacia un futuro prospero.</p>
    </div>
    )
}
        
    
    