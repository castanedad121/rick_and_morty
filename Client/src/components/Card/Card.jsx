//! Import react router dom
import { Link, useLocation } from "react-router-dom";
//! Import styles
import styles from "./Card.module.css";
//! Import redux
import { addFav, removeFav } from "../../redux/actions";
import { connect } from "react-redux";
// ! Import Hooks
import { useState, useEffect } from "react";

const Card = (props) => {
  const {pathname} = useLocation();
  const {
    id,
    name,
    status,
    species,
    gender,
    origin,
    image,
    onClose,
    addFav,
    removeFav,
    myFavorites,
  } = props;

  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    isFav ? removeFav(id) : addFav(props);
    setIsFav(!isFav);
  };

 
  useEffect(() => {
    for (let i = 0; i < myFavorites.length; i++) {
      if (myFavorites[i].id === props.id) setIsFav(true);
    }
  }, [myFavorites, props]);

  return (
    <div className={styles.container}>
      {pathname !== "/favorites" && (
        <div className={styles.onCloseContainer}>
          <button onClick={() => onClose(id)} className={styles.onCloseButton}>
            X
          </button>
        </div>
      )}
      <div className={styles.favContainer}>
        {isFav ? (
          <button className={styles.favButton} onClick={handleFavorite}>
            ❤️
          </button>
        ) : (
          <button className={styles.favButton} onClick={handleFavorite}>
            🤍
          </button>
        )}
      </div>

      <div className={styles.imgContainer}>
        <img src={image} alt="Not foundS" className={styles.imgCard} />
        <div className={styles.name}>
          <Link to={`/detail/${id}`} >
            <h2>{name}</h2>
          </Link>
        </div>
      </div>

      <div className={styles.propsContainer}>
        <h2>{species}</h2>
        <h2>{gender}</h2>
      </div>
      <h2>{status}</h2>


      <div className={styles.containerOrigin}>
        <h2>{origin}</h2>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => dispatch(addFav(character)),
    removeFav: (id) => dispatch(removeFav(id)),
  };
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
    
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
