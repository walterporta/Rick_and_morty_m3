import { ADD_FAVORITE, DELETE_FAVORITE, FILTER, ORDER} from "./action-types"


const initialState = {
    myFavorites: [],
    allCharaters: [],
}




const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAVORITE:
            return {
              ...state,
                myFavorites: action.payload,
                allCharaters: action.payload,
            }
        
        case DELETE_FAVORITE:
            return {
              ...state,
                myFavorites: action.payload
            }

        case FILTER:
            const filtered = state.allCharaters.filter((pj) => pj.gender === action.payload);
            return {
                ...state,
                myFavorites: action.payload === "All" ? state.allCharaters : filtered,
            };

        case ORDER:
            console.log("soy yo");

        default:
            return {...state}
    }
}
 
export default reducer;
