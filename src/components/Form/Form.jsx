import { useState } from "react";
import validation from "../Validation/Validation";

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
                <label htmlFor='email' style={{color:'black' }}>Email: </label>
                <input type='Email...' name='email' value={userData.email}
                onChange={handleChange}/>
                {errors.email && <p style={{color:'red'}}>{errors.email}</p>}
                <hr />
                <label htmlFor='password' style={{color:'black'}}>Password: </label>
                <input type='Password...' name='password' value={userData.password}
                onChange={handleChange}/>
                 {errors.password && <p style={{color:'red'}}>{errors.password}</p>}
                <hr />

                <button style={{color:'black'}}>Submit</button>
            </form>
        </div>


    )
}
export default Form;