import Card from "../Card/Card";
import styles from "./Favorites.module.css";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { orderCards, filterCards } from "../../redux/actions";
import { useState } from "react";


const Favorites = (props) => {
  const dispatch = useDispatch();
  const { myFavorites } = props;
  const [aux, setAux] = useState(false);
  const handleOrder = (e) => {  
    dispatch(orderCards(e.target.value));
    setAux(!aux);
  };
  const handleFilter   = (e) => {
    dispatch(filterCards(e.target.value));
  };

  return (
    <div className={styles.FavoritesContainer}>
      <div className={styles.Options}>
        <select onChange={handleOrder}>
        <option selected >Order</option>
        <option value="A" >Ascendente</option>
        <option value="D" >Descendente</option>
        </select>
        <select onChange={handleFilter}>
        <option value="All" selected>All Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>
      <div className={styles.FavoritesContainer}>

      {myFavorites.map((char) => {
        return (
          <Card
            key={char.id}
            id={char.id}
            name={char.name}
            satatus={char.satatus}
            species={char.species}
            gender={char.gender}
            origin={char.origin}
            image={char.image}
            
          />
        );
      })} 
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, null)(Favorites);
