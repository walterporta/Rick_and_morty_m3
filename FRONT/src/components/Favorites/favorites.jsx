// import { useSelector, useDispatch } from "react-redux";
// import styles from "./favorites.module.css"
// import { Link } from "react-router-dom";
// import { filterCards, orderCards } from "../../redux/actions";

// export default function Favorites(){
//     const myFavorites = useSelector((state) => state.myFavorites)
    
//     const dispatch = useDispatch();
    
//     const orderFav = (event) => {
//         dispatch(orderCards(event.target.value));};

//     const filterFav = (event) => {
//         dispatch(filterCards(event.target.value));};
      
//     return (
//         <div style={{ display: "flex" }}>
//         <div className="selector">
//           <select name="order" onChange={orderFav}>
//             <option disabled>Order by</option>
//             <option value="ascendente">Ascendente</option>
//             <option value="descendente">Descendente</option>
//           </select>
//         </div>

//         <div className="selector">
//         <select name="filter" onChange={filterFav}>
//           <option disabled>Filter by gender</option>
//           <option value="All">All</option>
//           <option value="Male">Male</option>
//           <option value="Female">Female</option>
//           <option value="Genderless">Genderless</option>
//           <option value="Unknown">Unknown</option>
//         </select>
//       </div>

        
//         {myFavorites.map((elem) => ( 
                       
//             <div className={styles.container} >
                       
//             <Link to={`/detail/${elem.id}`}>
//             <h2 className={styles.name}>{elem.name}</h2>
//             <h2 className={styles.species}>{elem.species}</h2>
//             <h2 className={styles.gender}>{elem.gender}</h2>
//             <img  src={elem.image} alt={elem.name} className={elem.image} />
//             </Link>
      
//             </div>
                      
//             ))}   
//         </div> 
        
//     );}




///////////////////////////



import { useSelector, useDispatch } from "react-redux";
import styles from "./favorites.module.css"
import { Link } from "react-router-dom";
import { filterCards, orderCards } from "../../redux/actions";
//import {handleFavorite} from "../../components/Cards/Card/"

export default function Favorites(){
    const myFavorites = useSelector((state) => state.myFavorites)
    
    const dispatch = useDispatch();
    
    const orderFav = (event) => {
        dispatch(orderCards(event.target.value));};

    const filterFav = (event) => {
        dispatch(filterCards(event.target.value));};
      
    return (
        <div style={{ display: "flex" }}>
        <div className="selector">
          <select name="order" onChange={orderFav}>
            <option disabled>Order by</option>
            <option value="ascendente">Ascendente</option>
            <option value="descendente">Descendente</option>
          </select>
        </div>

        <div className="selector">
        <select name="filter" onChange={filterFav}>
          <option disabled>Filter by gender</option>
          <option value="All">All</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="Unknown">Unknown</option>
        </select>
      </div>

        
        {myFavorites.map((elem) => ( 
                       
            <div className={styles.container} >
            

            <Link to={`/detail/${elem.id}`}>
            <h2 className={styles.name}>{elem.name}</h2>
            <h2 className={styles.species}>{elem.species}</h2>
            <h2 className={styles.gender}>{elem.gender}</h2>
            <img  src={elem.image} alt={elem.name} className={elem.image} />
            </Link>
      
            </div>
                      
            ))}   
        </div> 
        
    );}