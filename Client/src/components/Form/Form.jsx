import { useState } from "react";
import validation from "../Validation/Validation";
import style from './Form.module.css'

const Form = ({login}) => {
    const [errors, setErrors] = useState({});
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (evento) => {
      setUserData({
        ...userData,
        [evento.target.name]: evento.target.value
      })

      setErrors(validation({
         ...userData,
        [evento.target.name]: evento.target.value
      }))
    }
    const handleSubmit = (evento)=>{
        evento.preventDefault()
        login(userData);

    }

    return(
         
        <div>
            <form onSubmit={handleSubmit}>
                <label className={style.labelemail} htmlFor='email' >Email: </label>
                <input className={style.email} type='Email...' name='email' value={userData.email}
                onChange={handleChange}/>
                {errors.email && <p >{errors.email}</p>}
                <hr />
                <label className={style.labelpassword} htmlFor='password' >Password: </label>
                <input className={style.password} type='Password...' name='password' value={userData.password}
                onChange={handleChange}/>
                 {errors.password && <p>{errors.password}</p>}
            
                <hr />

                <button className={style.submit} >Submit</button>
            </form>
        </div>


    )
}
export default Form;