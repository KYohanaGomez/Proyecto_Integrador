import axios from 'axios';
import { useState, useEffect } from 'react';
import styles from './App.module.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import { Routes, Route, useLocation, useNavigate} from 'react-router-dom';
import Detail from './components/Detail/Detail'
import About from './components/About/About.jsx';
import Form from './components/Form/Form.jsx';


const email = 'kygg.16@hotmail.com';
const password = '12345ky';

function App() {

   const location = useLocation();
   const navigate = useNavigate();
   const [characters, setCharacters]=useState([]);
   const [access, setAccess] = useState(false);


   const login = (userData) =>{
      if(userData.email === email && userData.password === password){
         setAccess(true);
         navigate('/home');
      }

   }

   useEffect(()=>{
    !access && navigate('/')

   }, [access])

   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters([...characters, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }
    const onClose = (id)=>{
    const filtro = characters.filter((char)=> char.id !== Number(id));
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
          <Route path='/' element={<Form login={login}/>}/>
         <Route
          path='/home' element={<Cards
          characters={characters}
          onClose={onClose} />}
          />
          <Route path='/about' element={<About/>}/>
      
          <Route path='/detail/:id' element={<Detail characters={characters}/>}/>
      </Routes>
      </div> 
         
      
   );
}

export default App;
