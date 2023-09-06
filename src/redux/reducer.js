const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_FAV":
      return {
        ...state,
        myFavorites: [...state.allCharacters, payload],
        allCharacters: [...state.allCharacters, payload],
      };
    case "REMOVE_FAV":
      return {
        ...state,
        myFavorites: state.myFavorites.filter((char) => char.id !== +payload),
        allCharacters: state.allCharacters.filter((char) => char.id !== +payload),
      };
    case "LOGOUT":
      return {
        ...state,
        myFavorites: [],
        allCharacters: [],
      };
    case "FILTER":
      return {
        ...state,
        myFavorites: payload==='All'? [...state.allCharacters] : state.allCharacters.filter(char => char.gender === payload),
      };
    case "ORDER":
        return {
        ...state,
          myFavorites: state.allCharacters.sort((a, b) => {
            if (payload === 'A') return a.id - b.id;
            else if (payload === 'D') return b.id - a.id;
            else return 0;
          })
        };
    
    default:
      return { ...state };
  }
};

export default rootReducer;
