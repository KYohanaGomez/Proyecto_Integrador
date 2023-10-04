import axios from 'axios';
import { useState, useEffect } from 'react';
import styles from './App.module.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import { Routes, Route, useLocation, useNavigate} from 'react-router-dom';
import Detail from './components/Detail/Detail'
import About from './components/About/About.jsx';
import Form from './components/Form/Form.jsx';
import Favorites from './components/Favorites/Favorites';

function App() {

   const location = useLocation();
   const navigate = useNavigate();
   const [characters, setCharacters]=useState([]);
   const [access, setAccess] = useState(false);



   const login = async ({ email, password }) => {
      try {
         const URL = 'http://localhost:3001/rickandmorty/login/';
         const { data } = await axios(URL + `?email=${email}&password=${password}`)
         const { access } = data;
         setAccess(data);
         access && navigate('/home');
     
      } catch (error) {
        const { message } = error

        window.alert(message)
      }
      
   }
   // const login = (userData) => {
   //    const { email, password } = userData;
   //    const URL = 'http://localhost:3001/rickandmorty/login/';
   //    axios(URL + `?email=${email}&password=${password}`)
   //    .then(({ data }) => {
   //       const { access } = data;
   //       setAccess(data);
   //       access && navigate('/home');
   //    });
   // }
   // const login = (userData) =>{
   //    if(userData.email === email && userData.password === password){
   //       setAccess(true);
   //       navigate('/home');
   //    }

   // }

   useEffect(()=>{
      // eslint-disable-next-line
    !access && navigate('/')
    // eslint-disable-next-line
   }, [access])

   async function onSearch(id) {
      try {
         const { data } = await axios(`http://localhost:3001/rickandmorty/character/${id}`)
         
         if (data.name) {
            setCharacters([...characters, data]);
         } 
      } catch (error) {
         window.alert('¡No hay personajes con este ID!');
      }
      
   }

   // function onSearch(id) {
   //    axios(`http://localhost:3001/rickandmorty/character/${id}`)
   //    .then(({ data }) => {
   //       if (data.name) {
   //          setCharacters([...characters, data]);
   //       } else {
   //          window.alert('¡No hay personajes con este ID!');
   //       }
   //    });
   // }
    const onClose = (id)=>{
    const filtro = characters.filter((char)=> char.id !== id);
    setCharacters(filtro)
   }

   let estilos = styles.Form;
   if(location.pathname !== '/') {estilos=styles.App}


   return (
      <div 
      className={estilos} style={{padding:'25px'}}>
      <div>
         {
            location.pathname !== '/'
            ? <Nav onSearch={onSearch}/>
            :null
         }
         
      </div>
      <Routes> 
          <Route 
          path='/' element={<Form login={login}/>}/>
          <Route
          path='/home' element={<Cards
          characters={characters}
          onClose={onClose} />}
          />
          <Route path='/about' element={<About/>}/>
          <Route path='/detail/:id' element={<Detail characters={characters}/>}/>
          <Route path='/favorites' element={<Favorites />}/>
      </Routes>
      </div> 
         
      
   );
}

export default App;
