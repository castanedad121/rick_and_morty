//! Import axios api
import axios from "axios";
//! Import hooks
import { useState, useEffect } from "react";
//! Import react router dom
import { useParams, useNavigate } from "react-router-dom";
//! Import styles 
import styles from "./Detail.module.css";

const Detail = () => {
  const history = useNavigate();
  const { id } = useParams()
  const [character, setCharacter] = useState({});
  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);

  return (  
    
    <div className={styles.Container}>
      
      {character ? <>
        <div className={styles.onCloseContainer}>
          <button className={styles.onCloseButton} onClick={() => history(-1)}>
            X
          </button>
        </div>
          <div className={styles.ImgContainer}><img src={character?.image} alt="Not foundS" className={styles.ImgChard} /></div>
          <div className={styles.Containertext}>
          <h1>{character?.name}</h1>
          <label>Status <span>|</span> {character?.status}</label>
          <label>Species <span>|</span> {character?.species}</label>
          <label>Gender <span>|</span> {character?.gender}</label>
          <label>Origin <span>|</span> {character.origin?.name}</label>
          </div>
      </>
      : <span>Loanding...</span>}
      </div>
    
  );
};

export default Detail;
