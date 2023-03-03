import './App.css';
import { useState, useEffect } from 'react';
import Cards from './components/Cards/Cards';
import Nav from './components/Nav/Nav';
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import { Routes, Route } from "react-router-dom";
import Form from "./components/Form/Form";
import { useLocation, useNavigate } from "react-router-dom";
import Favorites from './components/Favorites/favorites';

function App () {
  const [characters, setCharacters] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  

  const [access, setAccess] = useState(false);
  const username = "walterandresporta@gmail.com";
  const password = "123456789";

  function login(userData){
    if (userData.password === password && userData.username === username){
      setAccess(true);
      navigate("/home");
    }
  }

  useEffect(() => {
    !access && navigate("/");
  }, [access]);



  const onSearch = (character) =>{
      fetch(`http://localhost:3001/rickandmorty/onsearch/${character}`)
        .then((response) => response.json())     
        .then((data) => {
          console.log(data);
          if (data.id) {
              setCharacters((estadoAnterior) => [...estadoAnterior, data]);
              navigate("/home");
          } else {
              window.alert('No hay personajes con ese ID');
          }
        })
        .catch(err => console.log(err))
  }   
 
  function onClose(id){
    setCharacters(
      characters.filter(personaje => personaje.id !== id))
  }


  const logout = () =>{
    setAccess(false);
    navigate("/");
  }; 

  return (
    <div className="App" style={{ padding: "25px" }}>
      {location.pathname !== "/" && <Nav onSearch={onSearch} logout={logout} />}
      
      <hr></hr>  
      <Routes>
        <Route  
          path="/home" 
          element={<Cards characters={characters} onClose={onClose} />} 
        />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Form login={login} />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
      </div>
  );
}  

export default App;


