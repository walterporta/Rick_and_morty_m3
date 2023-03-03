import React from "react";
import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import { useDispatch, useSelector} from "react-redux";
import { useState } from "react";
import { addFavorite, deleteFavorite } from "../../../redux/actions";
import { useEffect } from "react";  

export default function Card({name, species, gender, image, onClose, id}) {
   const [isFav, setIsFav] = useState(false);
   const myFavorites = useSelector(state => state.myFavorites);
   const dispatch = useDispatch();

   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false);
         dispatch(deleteFavorite(id));
      } else { 
         setIsFav(true);
         dispatch(addFavorite({name, species, gender, image, onClose, id}));
   
   }
}

      useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);
      
   
   return (

      <div className={styles.container}>
         
      {
         isFav ? (
            <button onClick={handleFavorite} className={styles.closeButton}>❤️</button>
         ) : (
            <button onClick={handleFavorite} className={styles.closeButton}>🤍</button>
         )
}

         <button onClick={onClose} className ={styles.closeButton}>
            X 
            </button>
            <Link to={`/detail/${id}`}>
            <h2 className={styles.name}>{name}</h2>
            <h2 className={styles.species}>{species}</h2>
            <h2 className={styles.gender}>{gender}</h2>
            <img  src={image} alt={name} className={styles.image} />
            </Link>
      </div>
   );
}
  



