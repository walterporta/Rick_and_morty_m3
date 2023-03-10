import styles from "./Detail.module.css";  
import { useParams, useNavigate} from "react-router-dom"; 
import {useEffect, useState}  from "react";


export default function Detail(props){
    const [infoDetail, setInfo] = useState({});
    
    const { id } = useParams();
    
    const navigate = useNavigate();

    function backtoHome(){
        navigate("/home");
    }    
  

    useEffect(() => {
      fetch(`http://localhost:3001/rickandmorty/detail/${id}`)
        .then((response) => response.json())
        .then((char) => {
            console.log("me responde el back", char)
        if (char.name) {
            setInfo(char);
        } else {
            window.alert("No hay personajes con ese ID");
        }
        })
        .catch((err) => {
        window.alert("No hay personajes con ese ID");
        });
    return () => setInfo({});    
    }, [id]);




    return (
        <div>
            <div>
                <button onClick={backtoHome}>Volver</button>
            </div>
                {infoDetail.id ? (
            <div>
                <h1>{infoDetail.name}</h1>
                <h5>{infoDetail.status}</h5>
                <h5>{infoDetail.species}</h5>
                <h5>{infoDetail.gender}</h5>
                <h5>{infoDetail.origin?.name}</h5>
             <div>
            <img src={infoDetail.image} alt={infoDetail.name} />
            </div>
            </div>
          ) : (
            <h1>Loading...</h1>
          )}    
          </div>
            );
}

        